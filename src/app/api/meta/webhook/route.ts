import { type NextRequest } from "next/server";
import { verifyHubSignature } from "@/lib/meta";

const GRAPH_VERSION = process.env.META_GRAPH_VERSION ?? "v23.0";

interface LeadgenChangeValue {
  leadgen_id: string;
  page_id: string;
  form_id: string;
  created_time: number;
  ad_id?: string;
  adgroup_id?: string;
}

interface LeadFieldData {
  name: string;
  values: string[];
}

/**
 * Webhook verification handshake. Meta calls this once when the callback URL
 * is configured in the App Dashboard.
 */
export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const mode = params.get("hub.mode");
  const token = params.get("hub.verify_token");
  const challenge = params.get("hub.challenge");

  if (
    mode === "subscribe" &&
    token &&
    token === process.env.META_WEBHOOK_VERIFY_TOKEN
  ) {
    return new Response(challenge ?? "", { status: 200 });
  }

  return new Response("Forbidden", { status: 403 });
}

/**
 * Receives `leadgen` events, pulls the full lead from the Graph API, and
 * forwards it to the CRM. Returns 500 on downstream failure so Meta retries
 * the delivery.
 */
export async function POST(request: NextRequest) {
  const appSecret = process.env.META_APP_SECRET;
  if (!appSecret) {
    console.error("[meta-webhook] META_APP_SECRET is not configured");
    return new Response("Server misconfigured", { status: 500 });
  }

  const rawBody = await request.text();
  const signature = request.headers.get("x-hub-signature-256");
  if (!verifyHubSignature(rawBody, signature, appSecret)) {
    return new Response("Invalid signature", { status: 401 });
  }

  let body: {
    object?: string;
    entry?: Array<{
      id: string;
      time: number;
      changes?: Array<{ field: string; value: LeadgenChangeValue }>;
    }>;
  };
  try {
    body = JSON.parse(rawBody);
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }

  if (body.object !== "page") {
    return new Response("EVENT_RECEIVED", { status: 200 });
  }

  const leadEvents =
    body.entry?.flatMap(
      (entry) => entry.changes?.filter((c) => c.field === "leadgen") ?? []
    ) ?? [];

  let failures = 0;
  for (const change of leadEvents) {
    try {
      const lead = await fetchLead(change.value.leadgen_id);
      await deliverToCrm(change.value, lead);
    } catch (err) {
      failures++;
      console.error(
        `[meta-webhook] failed to process lead ${change.value.leadgen_id}:`,
        err
      );
    }
  }

  if (failures > 0) {
    return new Response("Processing failed, retry", { status: 500 });
  }
  return new Response("EVENT_RECEIVED", { status: 200 });
}

/**
 * Pulls full lead details (form answers + campaign context) from the Graph
 * API. Returns null when no page token is configured or the lead cannot be
 * read (e.g. dashboard test leads) — the raw webhook event is still forwarded.
 */
async function fetchLead(leadgenId: string): Promise<Record<
  string,
  unknown
> | null> {
  const pageToken = process.env.META_PAGE_ACCESS_TOKEN;
  if (!pageToken) {
    console.warn(
      "[meta-webhook] META_PAGE_ACCESS_TOKEN not set — forwarding event without field data"
    );
    return null;
  }

  const fields = [
    "id",
    "created_time",
    "field_data",
    "form_id",
    "ad_id",
    "ad_name",
    "adset_id",
    "adset_name",
    "campaign_id",
    "campaign_name",
    "is_organic",
    "platform",
  ].join(",");

  const url = `https://graph.facebook.com/${GRAPH_VERSION}/${leadgenId}?fields=${fields}&access_token=${pageToken}`;
  const res = await fetch(url);
  if (!res.ok) {
    const errText = await res.text();
    console.warn(
      `[meta-webhook] Graph API read failed for lead ${leadgenId}: ${res.status} ${errText}`
    );
    return null;
  }
  return (await res.json()) as Record<string, unknown>;
}

/**
 * Sends the normalized lead to the CRM endpoint. Without CRM_LEAD_WEBHOOK_URL
 * the lead is only logged, which keeps the webhook testable before the CRM
 * side exists.
 */
async function deliverToCrm(
  event: LeadgenChangeValue,
  lead: Record<string, unknown> | null
): Promise<void> {
  const fieldData = (lead?.field_data ?? null) as LeadFieldData[] | null;
  const answers = fieldData
    ? Object.fromEntries(
        fieldData.map((f) => [f.name, f.values.length > 1 ? f.values : f.values[0]])
      )
    : null;

  const payload = {
    source: "meta_lead_ads",
    received_at: new Date().toISOString(),
    leadgen_id: event.leadgen_id,
    page_id: event.page_id,
    form_id: event.form_id,
    created_time: event.created_time,
    ad_id: event.ad_id ?? null,
    answers,
    lead,
  };

  const crmUrl = process.env.CRM_LEAD_WEBHOOK_URL;
  if (!crmUrl) {
    console.log("[meta-webhook] lead received (no CRM configured):", payload);
    return;
  }

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (process.env.CRM_LEAD_WEBHOOK_TOKEN) {
    headers.Authorization = `Bearer ${process.env.CRM_LEAD_WEBHOOK_TOKEN}`;
  }

  const res = await fetch(crmUrl, {
    method: "POST",
    headers,
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    throw new Error(`CRM responded ${res.status}: ${await res.text()}`);
  }
}
