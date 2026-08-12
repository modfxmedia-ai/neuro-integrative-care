import Reveal from "@/components/Reveal";

export default function WhoThisIsFor() {
  return (
    <section className="relative overflow-hidden bg-amber-soft py-24 text-ink lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[60vh] w-[80vh] -translate-x-1/2 rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, rgba(232,160,32,0.22), rgba(246,231,199,0) 70%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-10">
        <Reveal>
          <p className="font-mono text-[13px] font-medium uppercase tracking-[0.18em] text-amber">
            Who This Is For
          </p>
        </Reveal>

        <Reveal delay={120} offset={24} className="relative mt-8">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 -top-14 -translate-x-1/2 select-none font-serif text-[7rem] italic leading-none text-ink/10 lg:-top-16 lg:text-[9rem]"
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
            You&apos;ve just never had the right investigation. That&apos;s
            what we do.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

