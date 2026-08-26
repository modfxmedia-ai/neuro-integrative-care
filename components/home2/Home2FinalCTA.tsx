import Link from "next/link";

// Same headline/CTA copy as components/home/FinalCTA.tsx, restyled flat/light
// (no dark background, no pulsing glow).
export default function Home2FinalCTA() {
  return (
    <section className="bg-ink py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <h2 className="font-sans text-3xl font-semibold leading-tight tracking-tight text-paper sm:text-4xl">
          If everything else has failed,{" "}
          <span className="text-amber-b">
            that&apos;s exactly where we begin.
          </span>
        </h2>

        <div className="mt-9 flex justify-center">
          <Link
            href="/start"
            className="inline-flex items-center justify-center rounded-md bg-amber px-8 py-4 font-sans text-base font-medium text-ink transition-colors hover:bg-amber-b"
          >
            Book your New-Patient Investigation
          </Link>
        </div>
      </div>
    </section>
  );
}
