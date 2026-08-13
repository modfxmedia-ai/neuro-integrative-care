import { Scale } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function WhoThisIsFor() {
  return (
    <section className="relative overflow-hidden bg-amber-soft py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          {/* PLACEHOLDER STOCK IMAGE — replace with real patient/lifestyle photography before launch. */}
          <Reveal className="order-2 lg:order-1">
            <div
              aria-hidden="true"
              className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-ink/10"
            >
              <div className="absolute inset-0 bg-[linear-gradient(155deg,#f8b42b_0%,#e8a020_55%,#c97f10_100%)]" />
              <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(60%_60%_at_75%_25%,rgba(255,255,255,0.6),transparent_70%)]" />
              <Scale
                aria-hidden="true"
                strokeWidth={1}
                className="absolute bottom-6 right-6 h-16 w-16 text-white/70"
              />
            </div>
          </Reveal>

          <div className="order-1 text-center lg:order-2 lg:text-left">
            <Reveal>
              <p className="font-mono text-[13px] font-medium uppercase tracking-[0.18em] text-amber">
                Who This Is For
              </p>
            </Reveal>

            <Reveal delay={120} offset={24} className="relative mt-8">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 -top-14 -translate-x-1/2 select-none font-serif text-[7rem] italic leading-none text-ink/10 lg:left-0 lg:-top-16 lg:translate-x-0 lg:text-[9rem]"
              >
                &ldquo;
              </span>
              <p className="relative font-serif text-[1.55rem] leading-[1.35] text-ink sm:text-[1.85rem] lg:text-[2.1rem]">
                You&apos;re the one everyone else leans on. The one holding a
                family, a business, or both together. And lately you&apos;re
                running at maybe 70% of what you know you&apos;re capable of,
                while every doctor tells you you&apos;re fine.{" "}
                <span className="text-amber">
                  You are not fine, and you are not imagining it.
                </span>{" "}
                You&apos;ve just never had the right investigation.
                That&apos;s what we do.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

