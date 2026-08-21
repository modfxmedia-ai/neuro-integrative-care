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
  const trialName = process.env.CREYOS_TRIAL_NAME;
  const salt = process.env.CREYOS_AUTO_REG_SALT;

  if (!trialName || !salt) {
    return NextResponse.json(
      { error: "Creyos is not configured (missing CREYOS_TRIAL_NAME / CREYOS_AUTO_REG_SALT)." },
      { status: 500 }
    );
  }

  const body = await request.json().catch(() => null);
  if (!body || typeof body.birthdate !== "string") {
    return NextResponse.json({ error: "birthdate is required (YYYY-MM-DD)." }, { status: 400 });
  }

  const birthdate = toCreyosBirthdate(body.birthdate);
  if (!birthdate) {
    return NextResponse.json({ error: "birthdate must be in YYYY-MM-DD format." }, { status: 400 });
  }

  const gender = body.gender === "male" || body.gender === "female" ? body.gender : undefined;
  const userCode: string =
    typeof body.userCode === "string" && body.userCode.trim() ? body.userCode.trim() : randomUserCode();

  const payload: Record<string, unknown> = { user_code: userCode, birthdate };
  if (gender) payload.gender = gender;

  const token = jwt.sign(payload, salt, { algorithm: "HS512", expiresIn: "7d" });
  const url = `${CREYOS_BASE_URL}/${trialName}?p=${token}`;

  return NextResponse.json({ url, userCode });
}
