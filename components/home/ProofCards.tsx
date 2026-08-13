// COMPLIANCE: Do NOT add or display the "90% resolution in serious/lethal conditions"
// stat anywhere on this site. Client-approved hold per CO-01 — legal/liability risk.
// Only individual, measured, method-attributed results are approved for public pages.

import Image from "next/image";
import { patientStories } from "@/content/patientStories";
import { conditions } from "@/content/conditions";
import Reveal from "@/components/Reveal";

const FEATURED_SLUGS = ["ellie", "gail", "seth", "janice"] as const;

export default function ProofCards() {
  const featured = FEATURED_SLUGS.map((slug) =>
    patientStories.find((s) => s.slug === slug),
  ).filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <section className="bg-paper-2 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <Reveal className="max-w-3xl">
            <p className="font-mono font-medium text-[13px] uppercase tracking-[0.18em] text-amber">
              Proof
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
              When the workup is right, the results are measurable.
            </h2>
          </Reveal>

          <Reveal delay={100} offset={24}>
            <div
              className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-rule/60"
            >
              <Image
                src="/images/proof-patients.png"
                alt="Patients whose symptoms were investigated and resolved through the program"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        {/*
         * Layout reserves space for future video testimonials and before/after
         * QEEG images — swap in once patient releases are signed. Current cards
         * are text-only proof.
         */}
        <ul className="mt-16 grid gap-6 md:grid-cols-2">
          {featured.map((story, i) => {
            const sectorName = story.sector
              ? conditions.find((c) => c.slug === story.sector)?.name ?? null
              : null;
            return (
              <Reveal
                key={story.slug}
                as="li"
                delay={140 + i * 90}
                offset={24}
                className="h-full"
              >
                <article className="flex h-full flex-col justify-between rounded-lg border border-rule bg-white p-8 shadow-[0_1px_2px_rgba(11,18,32,0.04)] transition-shadow duration-300 hover:shadow-[0_30px_60px_-30px_rgba(11,18,32,0.2)]">
                  <div>
                    <p className="font-mono font-medium text-[12px] uppercase tracking-[0.16em] text-amber">
                      {sectorName ?? "Patient Story"}
                    </p>
                    <h3 className="mt-5 font-serif text-2xl leading-tight text-ink">
                      {story.headline}
                    </h3>
                    <p className="mt-5 text-[15px] leading-relaxed text-muted">
                      {story.body}
                    </p>
                  </div>
                  <div className="mt-8 border-t border-rule pt-5">
                    <p className="font-mono font-medium text-[12px] uppercase tracking-[0.14em] text-ink">
                      {story.patientName}
                    </p>
                    <p className="mt-2 text-[11px] italic leading-snug text-muted-l">
                      {story.disclaimer}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
