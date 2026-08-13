import Image from "next/image";
import Link from "next/link";

// Same copy/photography as components/home/VirtualProgramBand.tsx, restyled
// flat (no animated glow, just a static image).
export default function Home2VirtualProgram() {
  return (
    <section className="bg-ink py-20 lg:py-24">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-10">
        <div>
          <p className="inline-flex items-center rounded-full bg-amber-soft px-4 py-1.5 font-sans text-sm font-semibold uppercase tracking-wide text-amber-b">
            The Future of the Practice
          </p>
          <h2 className="mt-4 font-sans text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
            The same 30-year method, now from anywhere in the country.
          </h2>
          <p className="mt-6 font-sans text-lg leading-relaxed text-muted-l">
            Our Virtual Program brings the neurometabolic investigation home.
            You start with a remote QEEG brain-training unit, neurotransmitter
            testing, and a guided video series, with Dr. Santucci reviewing
            your data and adjusting your protocol on a call every two weeks.
            It&apos;s how we&apos;re extending this work beyond Los Gatos: the
            same root-cause approach, delivered remotely, wherever you are.
          </p>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Link
              href="/programs/virtual"
              className="inline-flex items-center justify-center rounded-md bg-amber px-7 py-3.5 font-sans text-sm font-medium text-ink transition-colors hover:bg-amber-b"
            >
              Explore the Virtual Program · From $2,395
            </Link>
            <Link
              href="/programs/virtual"
              className="font-sans text-sm text-muted-l underline underline-offset-4 transition-colors hover:text-paper"
            >
              Not local? Start remotely.
            </Link>
          </div>
        </div>

        <div className="relative aspect-[3/2] overflow-hidden rounded-xl border border-paper/10">
          <Image
            src="/images/virtual-program.png"
            alt="A patient using a remote QEEG headset during a virtual visit with Dr. Santucci"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
