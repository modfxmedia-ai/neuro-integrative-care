import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ShieldAlert,
  Brain,
  Activity,
  Leaf,
  Hourglass,
  HelpCircle,
  type LucideIcon,
} from "lucide-react";
import { conditions } from "@/content/conditions";
import Reveal from "@/components/Reveal";

// Stand-in icon per condition until real clinic/patient photography replaces
// the placeholder tiles below.
const CONDITION_ICONS: Record<string, LucideIcon> = {
  "autoimmune-investigation": ShieldAlert,
  "brain-brightening": Brain,
  "concussion-post-trauma": Activity,
  "environmental-toxins": Leaf,
  "longevity-science": Hourglass,
  "idiopathic-unexplained": HelpCircle,
};

// Real photography, provided per-condition.
const CONDITION_IMAGES: Record<string, string> = {
  "autoimmune-investigation": "/images/conditions/autoimmune-investigation.webp",
  "brain-brightening": "/images/conditions/brain-brightening.webp",
  "concussion-post-trauma": "/images/conditions/concussion-post-trauma.webp",
  "environmental-toxins": "/images/conditions/environmental-toxins.png",
  "longevity-science": "/images/conditions/longevity-science.webp",
  "idiopathic-unexplained": "/images/conditions/idiopathic-unexplained.png",
};

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
          {conditions.map((condition, i) => {
            const ConditionIcon = CONDITION_ICONS[condition.slug] ?? HelpCircle;
            return (
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
                <div
                  aria-hidden="true"
                  className="relative -mx-8 -mt-8 mb-7 aspect-[16/10] overflow-hidden lg:-mx-9 lg:-mt-9"
                >
                  {CONDITION_IMAGES[condition.slug] ? (
                    <>
                      <Image
                        src={CONDITION_IMAGES[condition.slug]}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    </>
                  ) : (
                    // PLACEHOLDER STOCK IMAGE — replace with real clinic/patient photography before launch.
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-soft via-paper-2 to-white transition-transform duration-700 ease-out group-hover:scale-105" />
                      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_25%_20%,rgba(232,160,32,0.28),transparent_70%)]" />
                    </>
                  )}
                  <ConditionIcon
                    aria-hidden="true"
                    strokeWidth={1.25}
                    className="absolute bottom-4 right-4 h-11 w-11 text-amber/50"
                  />
                </div>

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
            );
          })}
        </ul>
      </div>
    </section>
  );
}
