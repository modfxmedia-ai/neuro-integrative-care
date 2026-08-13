import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function WhoThisIsFor() {
  return (
    <section className="relative overflow-hidden bg-amber-soft py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-ink/10">
              <Image
                src="/images/who-this-is-for.png"
                alt="A woman thoughtfully reflecting at her desk, balancing family, work, and self-care"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
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

