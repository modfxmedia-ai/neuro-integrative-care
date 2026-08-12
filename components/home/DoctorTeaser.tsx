import Link from "next/link";
import Reveal from "@/components/Reveal";
import CredentialBars from "./CredentialBars";

const CREDENTIAL_BARS = [
  { label: "30 years in practice", weight: 1 },
  { label: "11 colleges of training", weight: 0.37 },
  { label: "10,000+ hours advanced", weight: 0.85 },
];

export default function DoctorTeaser() {
  return (
    <section className="bg-paper-2 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-4">
            <div className="flex items-center gap-4">
              <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.32em] text-amber">
                The Doctor
              </h2>
              <span
                aria-hidden="true"
                className="hidden h-px flex-1 bg-rule lg:block"
              />
            </div>
            <div className="mt-10">
              <CredentialBars bars={CREDENTIAL_BARS} />
            </div>
            <Link
              href="/about"
              className="group mt-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.32em] text-ink transition-colors hover:text-amber"
            >
              Meet the doctor
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </Reveal>

          <Reveal delay={120} offset={24} className="relative lg:col-span-8">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-3 -top-10 select-none font-serif text-[7rem] italic leading-none text-ink/[0.06] lg:-left-6 lg:-top-14 lg:text-[10rem]"
            >
              &ldquo;
            </span>
            <p className="relative font-serif text-[1.55rem] leading-[1.4] text-ink sm:text-[1.8rem] lg:text-[2.05rem]">
              30 years. 11 colleges. 10,000+ hours of advanced training in
              functional medicine, functional neurology, and regenerative
              medicine. A published book, a second on the way, and a standing
              invitation to lecture on Alzheimer&apos;s to rooms of 500
              doctors. Dr. Thomas Santucci built this practice on one
              promise:{" "}
              <span className="italic text-amber">
                he doesn&apos;t diagnose anything he can&apos;t help.
              </span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
