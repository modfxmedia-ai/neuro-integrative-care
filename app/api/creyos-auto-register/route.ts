import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const CREYOS_BASE_URL = "https://health.creyos.com/en/account/signup";

function randomUserCode(): string {
  return `test${Math.random().toString(36).slice(2, 10)}`;
}

// Creyos wants birthdate as DD + YYYY + MM concatenated (per their integration guide example)
function toCreyosBirthdate(isoDate: string): string | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoDate);
  if (!match) return null;
  const [, year, month, day] = match;
  return `${day}${year}${month}`;
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body.birthdate !== "string") {
    return NextResponse.json({ error: "birthdate is required (YYYY-MM-DD)." }, { status: 400 });
  }

  // Allow the tester to supply their own Trial ID / Salt from the form;
  // otherwise fall back to the env values. The signup URL's path segment is
  // validated by Creyos as "trial_id" (per their error reference table), so
  // it needs the numeric Trial ID, not the Trial Name UUID.
  const trialId =
    typeof body.trialId === "string" && body.trialId.trim()
      ? body.trialId.trim()
      : process.env.CREYOS_TRIAL_ID || process.env.CREYOS_TRIAL_NAME;
  const salt =
    typeof body.salt === "string" && body.salt.trim() ? body.salt.trim() : process.env.CREYOS_AUTO_REG_SALT;

  if (!trialId || !salt) {
    return NextResponse.json(
      { error: "Missing Trial ID / Salt. Enter them in the form or set CREYOS_TRIAL_ID / CREYOS_AUTO_REG_SALT." },
      { status: 400 }
    );
  }

  const birthdate = toCreyosBirthdate(body.birthdate);
  if (!birthdate) {
    return NextResponse.json({ error: "birthdate must be in YYYY-MM-DD format." }, { status: 400 });
  }

  const gender = body.gender === "male" || body.gender === "female" ? body.gender : undefined;
  const userCode: string =
    typeof body.userCode === "string" && body.userCode.trim() ? body.userCode.trim() : randomUserCode();
  const protocolId =
    typeof body.protocolId === "string" && body.protocolId.trim()
      ? body.protocolId.trim()
      : process.env.CREYOS_PROTOCOL_ID;

  const payload: Record<string, unknown> = { user_code: userCode, birthdate };
  if (gender) payload.gender = gender;
  if (protocolId) payload.protocol_id = protocolId;

  const token = jwt.sign(payload, salt, { algorithm: "HS512", expiresIn: "7d" });
  const url = `${CREYOS_BASE_URL}/${trialId}?p=${token}`;

  return NextResponse.json({ url, userCode });
}
