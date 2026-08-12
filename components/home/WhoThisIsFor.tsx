import Reveal from "@/components/Reveal";
import CapabilityMeter from "./CapabilityMeter";

export default function WhoThisIsFor() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-paper lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[10%] top-1/2 h-[70vh] w-[70vh] -translate-y-1/2 rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, rgba(248,180,43,0.22), rgba(11,18,32,0) 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-14">
          <Reveal className="lg:col-span-2">
            <div className="flex items-center gap-4">
              <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.32em] text-amber-b">
                Who This Is For
              </h2>
              <span
                aria-hidden="true"
                className="hidden h-px flex-1 bg-rule-d lg:block"
              />
            </div>
          </Reveal>

          <Reveal delay={120} offset={24} className="relative lg:col-span-7">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-3 -top-10 select-none font-serif text-[7rem] italic leading-none text-paper/10 lg:-left-6 lg:-top-14 lg:text-[10rem]"
            >
              &ldquo;
            </span>
            <p className="relative font-serif text-[1.55rem] leading-[1.35] text-paper sm:text-[1.85rem] lg:text-[2.1rem]">
              You&apos;re the one everyone else leans on. The one holding a
              family, a business, or both together. And lately you&apos;re
              running at maybe 70% of what you know you&apos;re capable of —
              while every doctor tells you you&apos;re fine.{" "}
              <span className="text-amber-b">
                You are not fine, and you are not imagining it.
              </span>{" "}
              You&apos;ve just never had the right investigation. That&apos;s
              what we do.
            </p>
          </Reveal>

          <Reveal
            delay={220}
            offset={24}
            className="lg:col-span-3 lg:justify-self-end"
          >
            <CapabilityMeter target={0.7} label="Capacity Gap" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
