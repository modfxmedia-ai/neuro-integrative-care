import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import {
  FOUNDATIONAL_INTRO,
  FOUNDATIONAL_SUBNOTE,
  FOUNDATIONAL_MODULES,
  FOUNDATIONAL_TIPS,
  ADVANCED_INTRO,
  ADVANCED_SUBNOTE,
  ADVANCED_MODULES,
  ADVANCED_GUIDANCE,
  type CurriculumModule,
} from "@/content/howItWorks";

const SITE_URL = "https://neurointegrativecareoflosgatos.com";
const PAGE_URL = `${SITE_URL}/how-it-works`;

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Two 12-week curricula — Foundational and Advanced — that pair lifestyle and neurological-support modules with home neurofeedback like Myndlift.",
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    title: "How It Works | NeuroIntegrative Care of Los Gatos",
    description:
      "Two 12-week curricula — Foundational and Advanced — built to support brain health and amplify neurofeedback results.",
    url: "/how-it-works",
    type: "article",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "How It Works | NeuroIntegrative Care of Los Gatos",
  description:
    "The Foundational and Advanced Neurological Support Curricula: 24 weekly modules covering environmental, metabolic, and lifestyle drivers of brain health.",
  url: PAGE_URL,
  inLanguage: "en-US",
  isPartOf: {
    "@type": "WebSite",
    name: "NeuroIntegrative Care of Los Gatos",
    url: `${SITE_URL}/`,
  },
  specialty: { "@type": "MedicalSpecialty", name: "Neurology" },
  audience: { "@type": "MedicalAudience", audienceType: "Patient" },
};

function ModuleAccordion({
  modules,
  actionsLabel,
  startDelay = 100,
}: {
  modules: CurriculumModule[];
  actionsLabel: string;
  startDelay?: number;
}) {
  return (
    <div className="mt-12 divide-y divide-rule/70 border-t border-rule/70">
      {modules.map((mod, i) => (
        <Reveal key={mod.num} delay={startDelay + i * 40} offset={16}>
          <details className="group py-7">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 marker:content-none">
              <span className="flex items-baseline gap-4">
                <span className="font-mono text-[13px] font-medium text-amber">
                  {mod.num}
                </span>
                <span className="font-serif text-[1.1rem] leading-snug text-ink lg:text-[1.25rem]">
                  {mod.title}
                </span>
              </span>
              <span
                aria-hidden="true"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-amber/40 text-amber-b transition-transform duration-300 group-open:rotate-45"
              >
                +
              </span>
            </summary>

            <div className="mt-5 max-w-2xl space-y-5 pl-0 lg:pl-[52px]">
              <p className="text-[15px] leading-relaxed text-ink">
                {mod.focus}
              </p>

              <div>
                <p className="font-mono font-medium text-[11px] uppercase tracking-[0.16em] text-muted">
                  Objectives
                </p>
                <ul className="mt-2 space-y-1.5">
                  {mod.objectives.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-[14px] leading-relaxed text-muted"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-[3px] w-3 shrink-0 rounded-full bg-amber/60"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-mono font-medium text-[11px] uppercase tracking-[0.16em] text-muted">
                  {actionsLabel}
                </p>
                <ul className="mt-2 space-y-1.5">
                  {mod.actions.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-[14px] leading-relaxed text-muted"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-[3px] w-3 shrink-0 rounded-full bg-amber/60"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {mod.callout && (
                <div className="rounded-xl border border-amber/30 bg-amber-soft/40 p-4">
                  <p className="font-mono font-medium text-[11px] uppercase tracking-[0.16em] text-amber">
                    {mod.calloutLabel}
                  </p>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-ink/85">
                    {mod.callout}
                  </p>
                </div>
              )}

              {mod.tracking && (
                <div>
                  <p className="font-mono font-medium text-[11px] uppercase tracking-[0.16em] text-muted">
                    {mod.trackingLabel ?? "Tracking"}
                  </p>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-ink/85">
                    {mod.tracking}
                  </p>
                </div>
              )}

              {mod.note && (
                <p className="text-[13px] italic leading-relaxed text-muted-l">
                  {mod.noteLabel ?? "Myndlift Note"}: {mod.note}
                </p>
              )}
            </div>
          </details>
        </Reveal>
      ))}
    </div>
  );
}

export default function HowItWorksPage() {
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
          className="pointer-events-none absolute -left-[10%] -top-[20%] h-[70vh] w-[70vh] rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(closest-side, rgba(248,180,43,0.28), rgba(11,18,32,0) 70%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
          <Reveal
            as="p"
            delay={50}
            offset={12}
            className="font-mono font-medium text-[13px] uppercase tracking-[0.18em] text-amber-b"
          >
            How It Works
          </Reveal>
          <Reveal as="span" delay={180} offset={28} className="mt-6 block">
            <h1 className="font-serif text-4xl leading-[1.05] tracking-tight text-paper sm:text-5xl lg:text-6xl">
              Two 12-week curricula, built to change how your brain works.
            </h1>
          </Reveal>
          <Reveal
            as="p"
            delay={380}
            offset={16}
            className="mt-8 max-w-3xl font-serif text-[1.35rem] leading-[1.4] text-paper/80 sm:text-[1.55rem] lg:text-[1.75rem]"
          >
            A Foundational curriculum for everyone, and an Advanced curriculum
            for targeted recovery, memory restoration, and complex cases —
            each designed to run alongside home neurofeedback like Myndlift.
          </Reveal>
        </div>
      </section>

      {/* Foundational curriculum */}
      <section id="foundational" className="bg-paper-2 py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <Reveal className="max-w-3xl">
            <p className="font-mono font-medium text-[13px] uppercase tracking-[0.18em] text-amber">
              12-Week Neurological Support Curriculum
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
              The Foundational curriculum.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              {FOUNDATIONAL_INTRO}
            </p>
            <p className="mt-4 text-[14px] leading-relaxed text-muted-l">
              {FOUNDATIONAL_SUBNOTE}
            </p>
          </Reveal>

          <ModuleAccordion
            modules={FOUNDATIONAL_MODULES}
            actionsLabel="Core Actions"
          />

          <Reveal delay={100} className="mt-14 rounded-2xl border border-rule bg-paper p-6 lg:p-8">
            <p className="font-mono font-medium text-[12px] uppercase tracking-[0.18em] text-amber">
              Implementation Tips
            </p>
            <ul className="mt-4 space-y-2">
              {FOUNDATIONAL_TIPS.map((tip) => (
                <li
                  key={tip}
                  className="flex gap-3 text-[14px] leading-relaxed text-ink/85"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-[3px] w-3 shrink-0 rounded-full bg-amber"
                  />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Advanced curriculum */}
      <section id="advanced" className="bg-paper py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <Reveal className="max-w-3xl">
            <p className="font-mono font-medium text-[13px] uppercase tracking-[0.18em] text-amber">
              Advanced Neurological Support Curriculum
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
              The Advanced curriculum.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              {ADVANCED_INTRO}
            </p>
            <p className="mt-4 text-[14px] leading-relaxed text-muted-l">
              {ADVANCED_SUBNOTE}
            </p>
          </Reveal>

          <ModuleAccordion
            modules={ADVANCED_MODULES}
            actionsLabel="Core Content & Actions"
          />

          <Reveal delay={100} className="mt-14 rounded-2xl border border-rule bg-paper-2 p-6 lg:p-8">
            <p className="font-mono font-medium text-[12px] uppercase tracking-[0.18em] text-amber">
              Implementation Guidance
            </p>
            <ul className="mt-4 space-y-2">
              {ADVANCED_GUIDANCE.map((tip) => (
                <li
                  key={tip}
                  className="flex gap-3 text-[14px] leading-relaxed text-ink/85"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-[3px] w-3 shrink-0 rounded-full bg-amber"
                  />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </Reveal>
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
              These curricula run alongside the Virtual Program.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-paper/80">
              Start with the investigation, then layer in the modules that
              fit your workup, remote or in-clinic.
            </p>
          </Reveal>
          <Reveal delay={140} className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="/programs/virtual"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-amber to-amber-b px-7 py-3.5 text-sm font-medium tracking-tight text-ink shadow-[0_10px_36px_-10px_rgba(248,180,43,0.55)] transition-shadow duration-300 hover:shadow-[0_20px_52px_-12px_rgba(248,180,43,0.85)]"
            >
              Explore the Virtual Program
            </Link>
            <Link
              href="/start"
              className="inline-flex items-center rounded-full border border-paper/25 px-6 py-3.5 text-sm text-paper/85 transition-colors hover:border-amber-b hover:text-amber-b"
            >
              Start Here
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
