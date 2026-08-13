import { patientStories } from "@/content/patientStories";
import { conditions } from "@/content/conditions";

// Same four featured stories as components/home/ProofCards.tsx, restyled as
// a plain stacked list instead of a glowing/pulsing timeline.
const FEATURED_SLUGS = ["ellie", "gail", "seth", "janice"] as const;

export default function Home2Proof() {
  const featured = FEATURED_SLUGS.map((slug) =>
    patientStories.find((s) => s.slug === slug),
  ).filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <section className="bg-paper-2 py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="font-sans text-sm font-semibold uppercase tracking-wide text-amber-b">
            Proof
          </p>
          <h2 className="mt-3 font-sans text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            When the workup is right, the results are measurable.
          </h2>
        </div>

        <ul className="mt-12 grid gap-5">
          {featured.map((story) => {
            const sectorName = story.sector
              ? conditions.find((c) => c.slug === story.sector)?.name ?? null
              : null;
            return (
              <li
                key={story.slug}
                className="rounded-xl border-l-4 border-amber bg-paper p-6 shadow-sm"
              >
                <span className="inline-flex items-center rounded-full bg-amber-soft px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wide text-amber-b">
                  {sectorName ?? "Patient Story"}
                </span>
                <h3 className="mt-3 font-sans text-xl font-semibold leading-snug text-ink">
                  {story.headline}
                </h3>
                <p className="mt-3 font-sans text-[15px] leading-relaxed text-muted">
                  {story.body}
                </p>
                <p className="mt-4 font-sans text-xs font-semibold uppercase tracking-wide text-ink">
                  {story.patientName}
                </p>
                <p className="mt-1 font-sans text-xs italic leading-snug text-muted">
                  {story.disclaimer}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
