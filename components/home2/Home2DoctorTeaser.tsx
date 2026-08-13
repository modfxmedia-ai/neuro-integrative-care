import Image from "next/image";
import Link from "next/link";

// Same copy/photography as components/home/DoctorTeaser.tsx (no motion stagger).
const CREDENTIALS = [
  { value: "30", label: "Years in Practice" },
  { value: "11", label: "Colleges Attended" },
  { value: "10,000+", label: "Hours Advanced Training" },
  { value: "500", label: "Doctors per Lecture" },
] as const;

export default function Home2DoctorTeaser() {
  return (
    <section className="bg-paper py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.3fr] lg:items-center lg:gap-14">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-rule">
            <Image
              src="/images/dr-santucci.png"
              alt="Dr. Thomas Santucci"
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover object-top"
            />
          </div>

          <div>
            <p className="font-sans text-sm font-semibold uppercase tracking-wide text-amber-b">
              The Doctor
            </p>
            <p className="mt-5 font-sans text-xl leading-relaxed text-ink sm:text-2xl">
              30 years. 11 colleges. 10,000+ hours of advanced training in
              functional medicine, functional neurology, and regenerative
              medicine. A published book, a second on the way, and a standing
              invitation to lecture on Alzheimer&apos;s to rooms of 500
              doctors. Dr. Thomas Santucci built this practice on one
              promise:{" "}
              <em className="italic text-amber-b">
                he doesn&apos;t diagnose anything he can&apos;t help.
              </em>
            </p>

            <dl className="mt-10 flex flex-wrap gap-3">
              {CREDENTIALS.map((item) => (
                <div
                  key={item.label}
                  className="flex items-baseline gap-2 rounded-full bg-amber-soft px-4 py-2"
                >
                  <dt className="font-sans text-lg font-semibold text-ink">
                    {item.value}
                  </dt>
                  <dd className="font-sans text-[11px] uppercase tracking-wide text-amber-b">
                    {item.label}
                  </dd>
                </div>
              ))}
            </dl>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-1.5 font-sans text-xs font-semibold uppercase tracking-wide text-ink transition-colors hover:text-amber-b"
            >
              Meet the doctor
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
