import Link from "next/link";
import Reveal from "@/components/Reveal";

const CREDENTIALS = [
  { value: "30", label: "Years in Practice" },
  { value: "11", label: "Colleges Attended" },
  { value: "10,000+", label: "Hours Advanced Training" },
  { value: "500", label: "Doctors per Lecture" },
] as const;

export default function DoctorTeaser() {
  return (
    <section className="bg-paper-2 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <div className="flex items-center gap-4">
              <h2 className="font-mono text-[13px] font-medium uppercase tracking-[0.18em] text-amber">
                The Doctor
              </h2>
              <span
                aria-hidden="true"
                className="hidden h-px flex-1 bg-rule lg:block"
              />
            </div>

            <dl className="mt-10 hidden grid-cols-2 gap-x-8 gap-y-10 lg:grid">
              {CREDENTIALS.map((item) => (
                <div key={item.label}>
                  <dt className="font-mono text-2xl font-semibold text-ink lg:text-[1.75rem]">
                    {item.value}
                  </dt>
                  <dd className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted">
                    {item.label}
                  </dd>
                </div>
              ))}
            </dl>
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

            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-rule pt-8 sm:grid-cols-4 lg:hidden">
              {CREDENTIALS.map((item) => (
                <div key={item.label}>
                  <dt className="font-mono text-xl font-semibold text-ink">
                    {item.value}
                  </dt>
                  <dd className="mt-1 text-[10px] uppercase tracking-[0.18em] text-muted">
                    {item.label}
                  </dd>
                </div>
              ))}
            </dl>

            <Link
              href="/about"
              className="group mt-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-ink transition-colors hover:text-amber"
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
        </div>
      </div>
    </section>
  );
}
