import { type NextRequest } from "next/server";
import { deletionConfirmationCode, parseSignedRequest } from "@/lib/meta";

/**
 * Meta Data Deletion Request callback.
 * Meta POSTs `signed_request=<sig>.<payload>` (form-encoded) when a user asks
 * Facebook to delete the data an app holds about them. Must respond with a
 * JSON object containing a human-visitable status `url` and a
 * `confirmation_code`.
 */
export async function POST(request: NextRequest) {
  const appSecret = process.env.META_APP_SECRET;
  if (!appSecret) {
    console.error("[meta-data-deletion] META_APP_SECRET is not configured");
    return new Response("Server misconfigured", { status: 500 });
  }

  let signedRequest: string | null = null;
  try {
    const form = await request.formData();
    signedRequest = form.get("signed_request")?.toString() ?? null;
  } catch {
    // fall through to the missing-parameter response
  }
  if (!signedRequest) {
    return new Response("Missing signed_request", { status: 400 });
  }

  const payload = parseSignedRequest(signedRequest, appSecret);
  if (!payload) {
    return new Response("Invalid signed_request", { status: 400 });
  }

  const confirmationCode = deletionConfirmationCode(payload.user_id);
  console.log(
    `[meta-data-deletion] deletion requested for user ${payload.user_id ?? "unknown"}, confirmation ${confirmationCode}`
  );

  // Notify the CRM so any lead records tied to this Meta user get erased.
  await notifyCrm(payload.user_id, confirmationCode);

  const statusUrl = new URL(
    `/data-deletion?code=${confirmationCode}`,
    request.nextUrl.origin
  ).toString();

  return Response.json({
    url: statusUrl,
    confirmation_code: confirmationCode,
  });
}

async function notifyCrm(
  userId: string | undefined,
  confirmationCode: string
): Promise<void> {
  const crmUrl = process.env.CRM_LEAD_WEBHOOK_URL;
  if (!crmUrl) return;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (process.env.CRM_LEAD_WEBHOOK_TOKEN) {
    headers.Authorization = `Bearer ${process.env.CRM_LEAD_WEBHOOK_TOKEN}`;
  }

  try {
    const res = await fetch(crmUrl, {
      method: "POST",
      headers,
      body: JSON.stringify({
        source: "meta_lead_ads",
        type: "data_deletion_request",
        meta_user_id: userId ?? null,
        confirmation_code: confirmationCode,
        requested_at: new Date().toISOString(),
      }),
    });
    if (!res.ok) {
      console.error(
        `[meta-data-deletion] CRM notification failed: ${res.status} ${await res.text()}`
      );
    }
  } catch (err) {
    // Never fail the Meta callback because of the CRM side; the request is
    // already logged above for manual follow-up.
    console.error("[meta-data-deletion] CRM notification error:", err);
  }
}
