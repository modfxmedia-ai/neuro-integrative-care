import { NextRequest, NextResponse } from "next/server";
import crypto from "node:crypto";

const DEV_FALLBACK_SECRET = "dev-placeholder-change-me";

// Builds a sample payload matching Creyos's documented format, signs it the
// same way Creyos would, and posts it to our own receiver — lets you see the
// full verify+store flow work before Creyos ever sends a real delivery.
export async function POST(request: NextRequest) {
  const secret = process.env.CREYOS_WEBHOOK_SECRET_TOKEN || DEV_FALLBACK_SECRET;

  const samplePayload = {
    event: "direct.protocol_session.complete",
    client_id: "test-user",
    protocol_session_uuid: crypto.randomUUID(),
    completed_at: new Date().toISOString(),
    summary_report_id: 117186036,
    report_ids: [117186036],
    output_statement: "Further Testing Is Suggested",
  };
  const rawBody = JSON.stringify(samplePayload);
  const signature = crypto.createHmac("sha256", secret).update(rawBody).digest("hex");

  const res = await fetch(new URL("/api/creyos-webhook", request.nextUrl.origin), {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Creyos-Signature": signature },
    body: rawBody,
  });
  const data = await res.json();

  return NextResponse.json({ sentPayload: samplePayload, response: data, status: res.status });
}
