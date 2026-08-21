import { NextResponse } from "next/server";

const BASE_URL = "https://health.creyos.com/en/api/v1";

// Sample data straight from Creyos's REST API guide — shown until real
// CREYOS_CLIENT_API_KEY/CREYOS_CLIENT_API_SECRET are configured.
const MOCK_PATIENTS = {
  prev_page: null,
  next_page: null,
  users: [
    {
      id: 109773,
      email: "user_109773@creyos.com",
      auto_register_id: null,
      client_id: "farazfarazfaraz+214",
      created_at: "2018-03-23T00:47:16.000-04:00",
      updated_at: "2018-05-24T23:54:24.000-04:00",
    },
    {
      id: 107894,
      email: "user_107894@creyos.com",
      auto_register_id: null,
      client_id: "222333",
      created_at: "2018-03-09T22:59:40.000-05:00",
      updated_at: "2018-06-04T22:13:52.000-04:00",
    },
    {
      id: 107892,
      email: "user_107892@creyos.com",
      auto_register_id: null,
      client_id: "54445",
      created_at: "2018-03-09T22:58:00.000-05:00",
      updated_at: "2018-06-04T22:13:52.000-04:00",
    },
  ],
};

export async function GET() {
  const apiKey = process.env.CREYOS_CLIENT_API_KEY;
  const apiSecret = process.env.CREYOS_CLIENT_API_SECRET;

  if (!apiKey || !apiSecret) {
    return NextResponse.json({ mode: "mock", ...MOCK_PATIENTS });
  }

  try {
    const authRes = await fetch(`${BASE_URL}/oauth.access`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "client-api-key": apiKey,
        "client-api-secret": apiSecret,
      },
    });
    if (!authRes.ok) {
      return NextResponse.json({ error: "Creyos authentication failed." }, { status: 502 });
    }
    const { access_token: accessToken } = await authRes.json();

    const patientsRes = await fetch(`${BASE_URL}/user/list/all`, {
      headers: { accept: "application/json", Authorization: `Bearer ${accessToken}` },
    });
    if (!patientsRes.ok) {
      return NextResponse.json({ error: "Failed to fetch patients from Creyos." }, { status: 502 });
    }
    const data = await patientsRes.json();
    return NextResponse.json({ mode: "live", ...data });
  } catch {
    return NextResponse.json({ error: "Could not reach Creyos API." }, { status: 502 });
  }
}
