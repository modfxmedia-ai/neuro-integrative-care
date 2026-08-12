import type { Metadata } from "next";
import Link from "next/link";
import { conditions } from "@/content/conditions";
import { tools } from "@/content/tools";
import Reveal from "@/components/Reveal";

const SITE_URL = "https://neurointegrativecareoflosgatos.com";
const PAGE_URL = `${SITE_URL}/how-we-work`;

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "Neurometabolic Rejuvenation — the brain and metabolism as one system. Five non-invasive, drug-free tools: violet laser, neurofeedback, regenerative, longevity.",
  alternates: { canonical: "/how-we-work" },
  openGraph: {
    title: "How We Work | NeuroIntegrative Care of Los Gatos",
    description:
      "Neurometabolic Rejuvenation — the brain and metabolism as one system. Five non-invasive, drug-free tools.",
    url: "/how-we-work",
    type: "article",
  },
};

const conditionsBySlug = new Map(conditions.map((c) => [c.slug, c]));

const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "How We Work | NeuroIntegrative Care of Los Gatos",
  description:
    "Neurometabolic Rejuvenation — the brain and metabolism as one system, investigated with objective testing and rebuilt with five non-invasive, drug-free tools.",
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
    "@type": "ItemList",
    itemListElement: tools.map((tool, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "MedicalProcedure",
        name: tool.name,
        description: tool.description,
        procedureType: {
          "@type": "MedicalProcedureType",
          name: "TherapeuticProcedure",
        },
      },
    })),
  },
};

export default function HowWeWorkPage() {
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
            delay={50}
            offset={12}
            className="font-mono text-[11px] uppercase tracking-[0.32em] text-amber-b"
          >
            How We Work
          </Reveal>
          <Reveal as="span" delay={180} offset={28} className="mt-6 block">
            <h1 className="font-serif text-4xl leading-[1.05] tracking-tight text-paper sm:text-5xl lg:text-6xl">
              Neurometabolic Rejuvenation.
            </h1>
          </Reveal>
          <Reveal
            as="p"
            delay={380}
            offset={16}
            className="mt-8 max-w-3xl font-serif text-[1.35rem] leading-[1.4] text-paper/80 sm:text-[1.55rem] lg:text-[1.75rem]"
          >
            The brain and metabolism as one system — investigated with
            objective testing, rebuilt with non-invasive, drug-free technology.
          </Reveal>
        </div>
      </section>

      {/* 3.1 — Philosophy */}
      <section className="bg-paper-2 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-3">
              <div className="flex items-center gap-4">
                <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.32em] text-amber">
                  Our Philosophy
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
              <p className="relative font-serif text-[1.5rem] leading-[1.4] text-ink sm:text-[1.75rem] lg:text-[2.05rem]">
                Every neurological symptom — brain fog, imbalance, fatigue,
                slow concussion recovery, an autoimmune flare, an
                &ldquo;idiopathic&rdquo; diagnosis — has a{" "}
                <span className="text-amber">metabolic engine</span> underneath
                it. Neurons are the most energy-hungry cells in the body, so
                when energy production, inflammation, detox, blood sugar, or
                hormones break down, the brain and nervous system are the first
                to show it. We treat the brain and the metabolism as{" "}
                <span className="italic text-amber">one system</span>, and we
                use advanced, non-invasive technology — not medication — to
                find where that system broke down and to retrain, repair, and
                rebuild it.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3.2 — Five tools */}
      <section id="tools" className="bg-paper py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <Reveal className="max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-amber">
              The Investigation Toolkit
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
              Five tools. Non-invasive. Drug-free.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Advanced technology used together — matched to what the workup
              actually surfaces — so structural repair and nervous-system
              retraining progress at the same time.
            </p>
          </Reveal>

          <ol className="mt-20 divide-y divide-rule/70">
            {tools.map((tool, i) => (
              <li key={tool.slug} id={tool.slug} className="scroll-mt-24">
                <Reveal
                  delay={80}
                  offset={20}
                  className="grid gap-8 py-14 lg:grid-cols-12 lg:gap-14 lg:py-20"
                >
                  <div className="lg:col-span-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-amber">
                      {String(i + 1).padStart(2, "0")} · {tool.kicker}
                    </p>
                    <h3 className="mt-5 font-serif text-[1.85rem] leading-[1.1] text-ink lg:text-[2.15rem]">
                      {tool.name}
                    </h3>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="text-lg leading-relaxed text-muted">
                      {tool.description}
                    </p>

                    <div className="mt-8">
                      <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink">
                        Applied In
                      </p>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {tool.sectorSlugs.map((slug) => {
                          const sector = conditionsBySlug.get(slug);
                          if (!sector) return null;
                          return (
                            <li key={slug}>
                              <Link
                                href={`/conditions/${sector.slug}`}
                                className="group inline-flex items-center gap-2 rounded-full border border-rule/70 bg-paper-2 px-4 py-2 text-[13px] text-ink transition-all hover:border-ink/30 hover:bg-white hover:shadow-[0_10px_30px_-20px_rgba(11,18,32,0.4)]"
                              >
                                <span>{sector.name}</span>
                                <span
                                  aria-hidden="true"
                                  className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-amber"
                                >
                                  →
                                </span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
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
              Every workup starts the same way.
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
