import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
          <p className="font-mono font-medium text-[13px] uppercase tracking-[0.18em] text-amber">
            Six Doors In
          </p>
          <Heading className="mt-4 font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
            Where does your story start?
          </Heading>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Most of our patients arrive with a physical problem, and discover
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
                className="group relative isolate flex h-full flex-col overflow-hidden rounded-3xl border border-rule/60 bg-white/70 p-8 shadow-[0_1px_2px_rgba(11,18,32,0.04)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-transparent hover:bg-white hover:shadow-[0_40px_80px_-40px_rgba(11,18,32,0.35)] lg:p-9"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-amber to-amber-b transition-transform duration-500 ease-out group-hover:scale-x-100"
                />

                <div className="relative flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-amber/30 bg-amber-soft font-mono text-[13px] tracking-[0.1em] text-amber transition-colors duration-500 group-hover:border-amber group-hover:bg-amber group-hover:text-ink">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-rule text-muted transition-all duration-500 group-hover:-rotate-45 group-hover:border-amber group-hover:bg-amber group-hover:text-ink"
                  >
                    <ArrowUpRight size={16} />
                  </span>
                </div>

                <div className="relative mt-9 flex-1">
                  <h3 className="font-serif text-[1.6rem] leading-[1.15] text-ink lg:text-[1.85rem]">
                    {condition.name}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-muted">
                    {condition.heroLine}
                  </p>
                </div>

                <div className="relative mt-8 flex items-center gap-2 border-t border-rule/60 pt-6 font-mono font-medium text-[12px] uppercase tracking-[0.18em] text-muted transition-colors group-hover:text-amber">
                  Explore
                  <span
                    aria-hidden="true"
                    className="h-px w-4 bg-current transition-all duration-500 group-hover:w-6"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
