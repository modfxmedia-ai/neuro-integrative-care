// COMPLIANCE: Do NOT add or display the "90% resolution in serious/lethal conditions"
// stat anywhere on this site. Client-approved hold per CO-01 — legal/liability risk.
// Only individual, measured, method-attributed results are approved for public pages.

import { patientStories } from "@/content/patientStories";
import { conditions } from "@/content/conditions";
import Reveal from "@/components/Reveal";

const FEATURED_SLUGS = ["ellie", "gail", "seth", "janice"] as const;

export default function ProofCards() {
  const featured = FEATURED_SLUGS.map((slug) =>
    patientStories.find((s) => s.slug === slug),
  ).filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <section className="bg-ink py-24 text-paper lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-3xl">
          <p className="font-mono font-medium text-[13px] uppercase tracking-[0.18em] text-amber-b">
            Proof
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-paper sm:text-5xl">
            When the workup is right, the results are measurable.
          </h2>
        </Reveal>

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
                <article className="flex h-full flex-col justify-between rounded-lg border border-rule-d bg-ink-2 p-8 shadow-[0_2px_30px_-18px_rgba(0,0,0,0.7)]">
                  <div>
                    <p className="font-mono font-medium text-[12px] uppercase tracking-[0.16em] text-amber-b">
                      {sectorName ?? "Patient Story"}
                    </p>
                    <h3 className="mt-5 font-serif text-2xl leading-tight text-amber">
                      {story.headline}
                    </h3>
                    <p className="mt-5 text-[15px] leading-relaxed text-paper/75">
                      {story.body}
                    </p>
                  </div>
                  <div className="mt-8 border-t border-rule-d pt-5">
                    <p className="font-mono font-medium text-[12px] uppercase tracking-[0.14em] text-paper">
                      {story.patientName}
                    </p>
                    <p className="mt-2 text-[11px] italic leading-snug text-paper/50">
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
