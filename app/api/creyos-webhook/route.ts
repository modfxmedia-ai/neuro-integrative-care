import { NextRequest, NextResponse } from "next/server";
import crypto from "node:crypto";
import { addWebhookEvent, getWebhookEvents } from "@/lib/creyosWebhookStore";

// No real secret registered with Creyos yet — placeholder lets the self-test
// route below prove out the verification logic. Replace via env var once
// Creyos has issued a real secret token for your registered URL.
const DEV_FALLBACK_SECRET = "dev-placeholder-change-me";

function getSecret() {
  return process.env.CREYOS_WEBHOOK_SECRET_TOKEN || DEV_FALLBACK_SECRET;
}

function signaturesMatch(expected: string, actual: string) {
  const a = Buffer.from(expected, "utf8");
  const b = Buffer.from(actual, "utf8");
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

export async function POST(request: NextRequest) {
  const rawBody = await request.text();
  const signature = request.headers.get("x-creyos-signature") || "";
  const expected = crypto.createHmac("sha256", getSecret()).update(rawBody).digest("hex");
  const verified = signature.length > 0 && signaturesMatch(expected, signature);

  let payload: unknown = null;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    payload = null;
  }

  addWebhookEvent({ receivedAt: new Date().toISOString(), verified, payload });

  if (!verified) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }
  return NextResponse.json({ received: true });
}

export async function GET() {
  return NextResponse.json({ events: getWebhookEvents() });
}
