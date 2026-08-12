import Link from "next/link";
import { conditions } from "@/content/conditions";
import Reveal from "@/components/Reveal";

interface SixDoorsGridProps {
  /** Heading level for the section title. Use "h1" when this is the primary heading of the page. */
  headingLevel?: "h1" | "h2";
}

export default function SixDoorsGrid({
  headingLevel = "h2",
}: SixDoorsGridProps = {}) {
  const Heading = headingLevel;
  return (
    <section id="six-doors" className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-amber">
            Six Doors In
          </p>
          <Heading className="mt-4 font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
            Where does your story start?
          </Heading>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Most of our patients arrive with a physical problem — and discover
            the real driver was somewhere no one had looked. Start where your
            symptoms point. The investigation goes deeper from there.
          </p>
        </Reveal>

        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {conditions.map((condition, i) => (
            <Reveal
              key={condition.slug}
              as="li"
              delay={140 + i * 80}
              offset={24}
              className="h-full"
            >
              <Link
                href={`/conditions/${condition.slug}`}
                className="group relative isolate flex h-full flex-col overflow-hidden rounded-2xl border border-rule/60 bg-paper p-8 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-ink/20 hover:bg-white hover:shadow-[0_40px_80px_-50px_rgba(11,18,32,0.5)] lg:p-9"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-3 -top-6 select-none font-serif text-[8.5rem] leading-none text-ink/[0.04] transition-all duration-700 ease-out group-hover:-translate-y-1 group-hover:text-amber/25 lg:-right-4 lg:text-[10rem]"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative flex items-baseline justify-between">
                  <span className="font-mono text-[11px] tracking-[0.32em] text-amber">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-lg text-muted transition-all duration-500 group-hover:translate-x-1 group-hover:text-amber"
                  >
                    →
                  </span>
                </div>

                <div className="relative mt-12 flex-1 lg:mt-14">
                  <h3 className="font-serif text-[1.6rem] leading-[1.15] text-ink lg:text-[1.85rem]">
                    {condition.name}
                  </h3>
                  <p className="mt-5 text-[15px] leading-relaxed text-muted">
                    {condition.heroLine}
                  </p>
                </div>

                <div className="relative mt-10 pt-6">
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 block h-px bg-rule/70"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 block h-px w-0 bg-gradient-to-r from-amber to-amber-b transition-[width] duration-[700ms] ease-out group-hover:w-full"
                  />
                  <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-muted transition-colors group-hover:text-ink">
                    Explore
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
