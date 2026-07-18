import crypto from "node:crypto";

/**
 * Verifies the `X-Hub-Signature-256` header Meta sends with every webhook
 * delivery. The header has the form `sha256=<hex hmac of the raw body>`.
 */
export function verifyHubSignature(
  rawBody: string,
  signatureHeader: string | null,
  appSecret: string
): boolean {
  if (!signatureHeader?.startsWith("sha256=")) return false;

  const received = signatureHeader.slice("sha256=".length);
  const expected = crypto
    .createHmac("sha256", appSecret)
    .update(rawBody, "utf8")
    .digest("hex");

  const a = Buffer.from(received, "hex");
  const b = Buffer.from(expected, "hex");
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

export interface SignedRequestPayload {
  user_id?: string;
  algorithm?: string;
  issued_at?: number;
  [key: string]: unknown;
}

/**
 * Parses and verifies a Meta `signed_request` (used by the Data Deletion
 * Request callback). Format: `<base64url signature>.<base64url json payload>`,
 * where the signature is the raw HMAC-SHA256 digest of the payload part.
 * Returns null when the signature does not match.
 */
export function parseSignedRequest(
  signedRequest: string,
  appSecret: string
): SignedRequestPayload | null {
  const [encodedSig, encodedPayload] = signedRequest.split(".", 2);
  if (!encodedSig || !encodedPayload) return null;

  let signature: Buffer;
  let payloadJson: string;
  try {
    signature = Buffer.from(encodedSig, "base64url");
    payloadJson = Buffer.from(encodedPayload, "base64url").toString("utf8");
  } catch {
    return null;
  }

  const expected = crypto
    .createHmac("sha256", appSecret)
    .update(encodedPayload, "utf8")
    .digest();

  if (
    signature.length !== expected.length ||
    !crypto.timingSafeEqual(signature, expected)
  ) {
    return null;
  }

  try {
    return JSON.parse(payloadJson) as SignedRequestPayload;
  } catch {
    return null;
  }
}

/** Short, log-friendly confirmation code for a deletion request. */
export function deletionConfirmationCode(userId: string | undefined): string {
  const seed = `${userId ?? "unknown"}:${Date.now()}:${crypto
    .randomBytes(8)
    .toString("hex")}`;
  return `del-${crypto
    .createHash("sha256")
    .update(seed)
    .digest("hex")
    .slice(0, 12)}`;
}
