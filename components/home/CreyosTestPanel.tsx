"use client";

import { useState } from "react";

type Patient = {
  id: number;
  email: string;
  client_id: string;
  created_at: string;
};

type WebhookEvent = {
  receivedAt: string;
  verified: boolean;
  payload: {
    event: string;
    client_id: string;
    protocol_session_uuid: string;
    completed_at: string;
    summary_report_id: number | null;
    report_ids: number[];
    output_statement: string | null;
  };
};

type TestResult = {
  registrationUrl: string;
  userCode: string;
  webhookEvent: WebhookEvent;
  patientsMode: "mock" | "live";
  patients: Patient[];
};

export default function CreyosTestPanel() {
  const [result, setResult] = useState<TestResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form fields — pre-filled with test values so it works out of the box.
  const [birthdate, setBirthdate] = useState("1990-01-01");
  const [gender, setGender] = useState<"" | "male" | "female">("");
  const [userCode, setUserCode] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [trialName, setTrialName] = useState("");
  const [salt, setSalt] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const regRes = await fetch("/api/creyos-auto-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          birthdate,
          gender: gender || undefined,
          userCode: userCode || undefined,
          trialName: trialName || undefined,
          salt: salt || undefined,
        }),
      });
      const regData = await regRes.json();
      if (!regRes.ok) throw new Error(regData.error || "Auto-registration failed.");

      // Open the Creyos assessment page in a new tab so the tester can see
      // the actual signup/assessment flow the doc describes.
      window.open(regData.url, "_blank", "noopener,noreferrer");

      await fetch("/api/creyos-webhook/self-test", { method: "POST" });

      const eventsRes = await fetch("/api/creyos-webhook");
      const eventsData = await eventsRes.json();
      const latestEvent: WebhookEvent | undefined = eventsData.events?.[0];
      if (!latestEvent) throw new Error("Webhook event was not recorded.");

      const patientsRes = await fetch("/api/creyos-patients");
      const patientsData = await patientsRes.json();
      if (!patientsRes.ok) throw new Error(patientsData.error || "Patient list fetch failed.");

      setResult({
        registrationUrl: regData.url,
        userCode: regData.userCode,
        webhookEvent: latestEvent,
        patientsMode: patientsData.mode,
        patients: patientsData.users ?? [],
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "mt-1 w-full rounded-lg border border-rule bg-white px-3 py-2 text-sm text-ink";

  return (
    <section className="border-y-4 border-dashed border-amber bg-paper-2 py-16">
      <div className="mx-auto max-w-2xl px-6">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-amber-b">
            Temporary — Creyos Integration Test
          </p>
          <h2 className="mt-2 font-sans text-2xl font-semibold text-ink">
            Test Creyos Integration
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted">
            Fill in a test patient below and click the button. It opens a Creyos assessment in a
            new tab, then shows the webhook and patient-list results underneath.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto mt-6 max-w-md space-y-4 text-left">
          <div>
            <label htmlFor="birthdate" className="block text-sm font-medium text-ink">
              Date of birth
            </label>
            <input
              id="birthdate"
              type="date"
              required
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-ink">
              Gender (optional)
            </label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value as "" | "male" | "female")}
              className={inputClass}
            >
              <option value="">Prefer not to say</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div>
            <label htmlFor="userCode" className="block text-sm font-medium text-ink">
              Patient ID (optional — auto-generated if blank)
            </label>
            <input
              id="userCode"
              type="text"
              value={userCode}
              onChange={(e) => setUserCode(e.target.value)}
              placeholder="e.g. abc123"
              className={inputClass}
            />
          </div>

          <div className="rounded-lg border border-rule bg-white">
            <button
              type="button"
              onClick={() => setShowAdvanced((v) => !v)}
              className="flex w-full items-center justify-between px-3 py-2 text-left text-sm font-medium text-ink"
            >
              <span>Use my own Creyos credentials (optional)</span>
              <span className="text-muted">{showAdvanced ? "−" : "+"}</span>
            </button>
            {showAdvanced && (
              <div className="space-y-3 border-t border-rule p-3">
                <p className="text-xs text-muted">
                  Leave blank to use the built-in demo values. Enter your real Trial Name and
                  Auto-Registration Salt from Creyos to open a working assessment.
                </p>
                <div>
                  <label htmlFor="trialName" className="block text-xs font-medium text-ink">
                    Trial Name
                  </label>
                  <input
                    id="trialName"
                    type="text"
                    value={trialName}
                    onChange={(e) => setTrialName(e.target.value)}
                    placeholder="creyos_autoregistration_demo"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="salt" className="block text-xs font-medium text-ink">
                    Auto-Registration Salt
                  </label>
                  <input
                    id="salt"
                    type="text"
                    value={salt}
                    onChange={(e) => setSalt(e.target.value)}
                    placeholder="5baa9fc1…"
                    className={`${inputClass} font-mono`}
                  />
                </div>
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-amber px-4 py-4 text-base font-semibold text-ink disabled:opacity-60"
          >
            {loading ? "Running…" : "Run Creyos Test"}
          </button>

          {error && <p className="text-sm text-red-600">{error}</p>}
        </form>

        {result && (
          <div className="mt-8 space-y-6">
            <div className="rounded-lg border border-rule bg-white p-5 text-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-semibold text-ink">1. Auto-Registration Link</p>
                  <p className="mt-1 text-xs text-muted">
                    User code: <span className="font-mono">{result.userCode}</span>
                  </p>
                  <p className="mt-1 text-xs text-muted">
                    Opened in a new tab. If your browser blocked the popup, use this link:
                  </p>
                </div>
                <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                  Opened
                </span>
              </div>
              <a
                href={result.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block break-all rounded bg-paper-2 p-2 font-mono text-xs text-ink underline"
              >
                {result.registrationUrl}
              </a>
            </div>

            <div className="rounded-lg border border-rule bg-white p-5 text-sm">
              <div className="flex items-start justify-between gap-4">
                <p className="font-semibold text-ink">2. Webhook Delivery</p>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                    result.webhookEvent.verified
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {result.webhookEvent.verified ? "Signature verified" : "Signature invalid"}
                </span>
              </div>
              <p className="mt-1 text-xs text-muted">
                Received at {result.webhookEvent.receivedAt}
              </p>
              <pre className="mt-3 overflow-x-auto rounded bg-paper-2 p-3 text-xs text-ink">
                {JSON.stringify(result.webhookEvent.payload, null, 2)}
              </pre>
            </div>

            <div className="rounded-lg border border-rule bg-white p-5 text-sm">
              <div className="flex items-start justify-between gap-4">
                <p className="font-semibold text-ink">3. Patient List (REST API)</p>
                <span className="rounded-full bg-amber-soft px-2 py-0.5 text-xs font-medium text-ink">
                  {result.patientsMode === "mock" ? "Sample data" : "Live Creyos data"}
                </span>
              </div>
              <p className="mt-1 text-xs text-muted">
                {result.patients.length} patients returned from{" "}
                <span className="font-mono">/api/v1/user/list/all</span>
              </p>
              <div className="mt-3 space-y-2">
                {result.patients.map((patient) => (
                  <div key={patient.id} className="rounded border border-rule p-2 text-xs">
                    <p className="text-ink">{patient.email}</p>
                    <p className="text-muted">
                      client_id: <span className="font-mono">{patient.client_id}</span> · created{" "}
                      {patient.created_at}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
