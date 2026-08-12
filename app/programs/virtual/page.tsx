// COMPLIANCE + NAMING:
// • Program name is "Mind Transformation Blueprint" per the client-approved
//   blueprint and CO-01. Dr. Santucci's CV spells it "Mynd Transformation
//   Blueprint." Flag for Justin to confirm with the client which spelling is
//   canonical. Until confirmed, use "Mind" everywhere published — DO NOT edit
//   the spelling here without written confirmation.
// • Tier structure below is DRAFT. Blueprint hints at a near-free Myndlift-app
//   basic tier as lead magnet, up through full neurometabolic profiling — exact
//   tiers and pricing are not finalized. Placeholder tiers are labeled clearly
//   so nothing ships as "confirmed" until the client signs off.

import type { Metadata } from "next";
import Link from "next/link";
import { programs } from "@/content/programs";
import Reveal from "@/components/Reveal";

const SITE_URL = "https://neurointegrativecareoflosgatos.com";
const PAGE_URL = `${SITE_URL}/programs/virtual`;

const PROGRAM_NAME_PUBLIC = "Mind Transformation Blueprint";
const virtualProgram = programs.entryPrograms.find(
  (p) => p.slug === "virtual-program",
);

export const metadata: Metadata = {
  title: `The Virtual Program — ${PROGRAM_NAME_PUBLIC}`,
  description:
    "A 30-year neurometabolic method delivered to your home. Remote QEEG, neurotransmitter testing, biweekly clinician review with Dr. Santucci. From $2,395. National.",
  alternates: { canonical: "/programs/virtual" },
  openGraph: {
    title: `The Virtual Program | NeuroIntegrative Care of Los Gatos`,
    description:
      "A 30-year neurometabolic method delivered to your home. From $2,395. National.",
    url: "/programs/virtual",
    type: "article",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: `The Virtual Program — ${PROGRAM_NAME_PUBLIC} | NeuroIntegrative Care of Los Gatos`,
  description:
    "A 30-year neurometabolic method delivered to your home. Remote QEEG unit, neurotransmitter testing, guided video series, and biweekly clinician review calls with Dr. Santucci.",
  url: PAGE_URL,
  inLanguage: "en-US",
  isPartOf: {
    "@type": "WebSite",
    name: "NeuroIntegrative Care of Los Gatos",
    url: `${SITE_URL}/`,
  },
  specialty: { "@type": "MedicalSpecialty", name: "Neurology" },
  audience: { "@type": "MedicalAudience", audienceType: "Patient" },
  mainEntity: {
    "@type": "Service",
    name: `The Virtual Program (${PROGRAM_NAME_PUBLIC})`,
    serviceType: "Neurometabolic Care",
    description:
      "A 6–12 week at-home neurometabolic program: remote QEEG unit, neurotransmitter testing, guided video series, and neurofeedback calls every two weeks. National.",
    provider: {
      "@type": "MedicalClinic",
      name: "NeuroIntegrative Care of Los Gatos",
      url: `${SITE_URL}/`,
    },
    areaServed: { "@type": "Country", name: "United States" },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "2395",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        minPrice: "2395",
        description: "From $2,395",
      },
      availability: "https://schema.org/InStock",
      url: PAGE_URL,
    },
  },
};

const FEATURE_ROWS = [
  { label: "Neurofeedback training" },
  { label: "QEEG brain map" },
  { label: "Neurotransmitter testing" },
  { label: "Clinician review cadence" },
  { label: "Program duration" },
  { label: "Repeat brain scan" },
] as const;

type TierId = "app" | "mid" | "full";

const TIERS: Array<{
  id: TierId;
  eyebrow: string;
  name: string;
  price: string;
  cadence: string;
  values: Record<(typeof FEATURE_ROWS)[number]["label"], string>;
  cta: { label: string; href: string };
  featured?: boolean;
  placeholder: boolean;
}> = [
  {
    id: "app",
    eyebrow: "Entry Tier · TBD",
    name: "Myndlift App (Basic)",
    price: "TBD",
    cadence: "Pending client confirmation",
    values: {
      "Neurofeedback training": "App-based (Myndlift), self-directed",
      "QEEG brain map": "TBD",
      "Neurotransmitter testing": "TBD",
      "Clinician review cadence": "TBD",
      "Program duration": "Ongoing (TBD)",
      "Repeat brain scan": "TBD",
    },
    cta: { label: "TBD", href: "/start-here" },
    placeholder: true,
  },
  {
    id: "mid",
    eyebrow: "Middle Tier · TBD",
    name: "TBD Middle Tier",
    price: "TBD",
    cadence: "Pending client confirmation",
    values: {
      "Neurofeedback training": "TBD",
      "QEEG brain map": "TBD",
      "Neurotransmitter testing": "TBD",
      "Clinician review cadence": "TBD",
      "Program duration": "TBD",
      "Repeat brain scan": "TBD",
    },
    cta: { label: "TBD", href: "/start-here" },
    placeholder: true,
  },
  {
    id: "full",
    eyebrow: "Full Program",
    name: "The Virtual Program",
    price: virtualProgram?.price ?? "From $2,395",
    cadence: "Every 2 weeks with Dr. Santucci",
    values: {
      "Neurofeedback training": "Remote QEEG unit, protocolized",
      "QEEG brain map": "Included + repeat scan",
      "Neurotransmitter testing": "Included",
      "Clinician review cadence": "Every 2 weeks with Dr. Santucci",
      "Program duration": virtualProgram?.duration ?? "6–12 weeks",
      "Repeat brain scan": "End of first phase",
    },
    cta: { label: "Start Here", href: "/start-here" },
    featured: true,
    placeholder: false,
  },
];

export default function VirtualProgramPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink py-28 text-paper lg:py-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[10%] -top-[20%] h-[70vh] w-[70vh] rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(closest-side, rgba(248,180,43,0.28), rgba(11,18,32,0) 70%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
          <Reveal
            as="p"
            delay={20}
            offset={8}
            className="mb-8 font-mono text-[10px] uppercase tracking-[0.32em] text-paper/55"
          >
            <Link
              href="/programs"
              className="transition-colors hover:text-amber-b"
            >
              Programs
            </Link>
            <span aria-hidden="true" className="mx-3 text-paper/30">
              /
            </span>
            <span className="text-paper">Virtual Program</span>
          </Reveal>
          <Reveal
            as="p"
            delay={50}
            offset={12}
            className="font-mono text-[11px] uppercase tracking-[0.32em] text-amber-b"
          >
            The Virtual Program
          </Reveal>
          <Reveal as="span" delay={180} offset={28} className="mt-6 block">
            <h1 className="font-serif text-4xl leading-[1.05] tracking-tight text-paper sm:text-5xl lg:text-6xl">
              {PROGRAM_NAME_PUBLIC}.
            </h1>
          </Reveal>
          <Reveal
            as="p"
            delay={380}
            offset={16}
            className="mt-8 max-w-3xl font-serif text-[1.35rem] leading-[1.4] text-paper/80 sm:text-[1.55rem] lg:text-[1.75rem]"
          >
            A 30-year neurometabolic method — delivered to your home. From
            $2,395. National.
          </Reveal>
          <Reveal delay={550} className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/start-here"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-amber to-amber-b px-7 py-3.5 text-sm font-medium tracking-tight text-ink shadow-[0_10px_36px_-10px_rgba(248,180,43,0.55)] transition-shadow duration-300 hover:shadow-[0_20px_52px_-12px_rgba(248,180,43,0.85)]"
            >
              Start with the $300 Investigation
            </Link>
            <Link
              href="#tiers"
              className="inline-flex items-center rounded-full border border-paper/25 px-6 py-3.5 text-sm text-paper/85 transition-colors hover:border-amber-b hover:text-amber-b"
            >
              Compare tiers
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Method — the main copy */}
      <section className="bg-paper-2 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-3">
              <div className="flex items-center gap-4">
                <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.32em] text-amber">
                  The Method, Remote
                </h2>
                <span
                  aria-hidden="true"
                  className="hidden h-px flex-1 bg-rule lg:block"
                />
              </div>
            </Reveal>
            <Reveal delay={120} offset={24} className="relative lg:col-span-9">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-3 -top-10 select-none font-serif text-[7rem] italic leading-none text-ink/[0.06] lg:-left-6 lg:-top-16 lg:text-[12rem]"
              >
                &ldquo;
              </span>
              <p className="relative font-serif text-[1.45rem] leading-[1.4] text-ink sm:text-[1.7rem] lg:text-[2rem]">
                A 30-year neurometabolic method, delivered to your home. You
                start with a remote QEEG brain-training unit, neurotransmitter
                testing, and a guided video series — with Dr. Santucci
                reviewing your data and adjusting your protocol on a call
                every two weeks. After the first phase, a repeat brain scan
                shows what&apos;s changed and sets your next step. From
                <span className="text-amber"> $2,395</span>. No prescriptions.
                No travel. Available nationwide.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Tier comparison */}
      <section id="tiers" className="bg-paper py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-amber">
              Program Tiers
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
              Choose your entry point.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Three ways to engage the neurometabolic method remotely — from a
              lightweight, app-guided entry through the full biweekly-clinician
              program.
            </p>
          </Reveal>

          <Reveal delay={80} className="mt-10">
            <div
              role="note"
              className="inline-flex items-center gap-3 rounded-full border border-amber/40 bg-amber-soft/60 px-4 py-2 text-[12px] tracking-tight text-ink"
            >
              <span
                aria-hidden="true"
                className="inline-block h-2 w-2 rounded-full bg-amber"
              />
              <span className="font-mono uppercase tracking-[0.24em]">
                Draft
              </span>
              <span className="text-muted">
                Tier structure and pricing are pending client confirmation.
              </span>
            </div>
          </Reveal>

          <ul className="mt-14 grid gap-6 lg:grid-cols-3">
            {TIERS.map((tier, i) => (
              <Reveal
                key={tier.id}
                as="li"
                delay={140 + i * 90}
                offset={24}
                className="h-full"
              >
                <article
                  className={`flex h-full flex-col justify-between rounded-2xl border p-8 lg:p-9 ${
                    tier.featured
                      ? "border-amber/50 bg-paper-2 shadow-[0_20px_60px_-30px_rgba(232,160,32,0.35)]"
                      : "border-rule/60 bg-paper"
                  }`}
                >
                  <div>
                    <p
                      className={`font-mono text-[10px] uppercase tracking-[0.32em] ${
                        tier.featured ? "text-amber" : "text-muted"
                      }`}
                    >
                      {tier.eyebrow}
                    </p>
                    <h3 className="mt-5 font-serif text-[1.5rem] leading-tight text-ink lg:text-[1.7rem]">
                      {tier.name}
                    </h3>
                    <p
                      className={`mt-4 font-mono text-[11px] uppercase tracking-[0.32em] ${
                        tier.placeholder ? "text-muted-l" : "text-ink"
                      }`}
                    >
                      {tier.price}
                    </p>
                    <p className="mt-2 text-[12px] italic text-muted-l">
                      {tier.cadence}
                    </p>

                    <dl className="mt-8 divide-y divide-rule/70">
                      {FEATURE_ROWS.map((row) => (
                        <div key={row.label} className="py-3">
                          <dt className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
                            {row.label}
                          </dt>
                          <dd
                            className={`mt-1.5 text-[14px] leading-snug ${
                              tier.values[row.label] === "TBD"
                                ? "italic text-muted-l"
                                : "text-ink"
                            }`}
                          >
                            {tier.values[row.label]}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <div className="mt-10">
                    {tier.placeholder ? (
                      <span className="inline-flex items-center rounded-full border border-rule/70 bg-paper-2 px-5 py-2.5 text-xs italic text-muted-l">
                        {tier.cta.label} — pending confirmation
                      </span>
                    ) : (
                      <Link
                        href={tier.cta.href}
                        className="inline-flex items-center rounded-full bg-gradient-to-r from-amber to-amber-b px-6 py-3 text-sm font-medium tracking-tight text-ink shadow-[0_10px_28px_-14px_rgba(248,180,43,0.5)] transition-shadow duration-300 hover:shadow-[0_18px_44px_-14px_rgba(248,180,43,0.8)]"
                      >
                        {tier.cta.label}
                        <span
                          aria-hidden="true"
                          className="ml-2 transition-transform group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </Link>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink py-24 text-paper lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(closest-side, rgba(248,180,43,0.28), rgba(11,18,32,0) 70%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-10">
          <Reveal>
            <h2 className="font-serif text-3xl leading-[1.2] tracking-tight text-paper sm:text-4xl lg:text-5xl">
              Bring the workup home. Start where everyone starts.
            </h2>
          </Reveal>
          <Reveal delay={140} className="mt-10 flex justify-center">
            <Link
              href="/start-here"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-amber to-amber-b px-7 py-3.5 text-sm font-medium tracking-tight text-ink shadow-[0_10px_36px_-10px_rgba(248,180,43,0.55)] transition-shadow duration-300 hover:shadow-[0_20px_52px_-12px_rgba(248,180,43,0.85)]"
            >
              Book a New-Patient Investigation — $300
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
