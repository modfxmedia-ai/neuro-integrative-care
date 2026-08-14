import Link from "next/link";
import {
  Zap,
  Waves,
  Sprout,
  Target,
  FlaskConical,
  Microscope,
  type LucideIcon,
} from "lucide-react";

type Service = {
  href: string;
  name: string;
  kicker: string;
  Icon: LucideIcon;
};

// Six services shown as 3 pills on each side of the video. First three
// (left column) are the "identify" side of the investigation; second three
// (right column) are the "rebuild" side. Kept inline (not imported from
// content/tools.ts) so this is a self-contained visual banner.
const LEFT_SERVICES: readonly Service[] = [
  {
    href: "/tools/longevity-testing",
    name: "Longevity Testing",
    kicker: "Beyond the Standard Physical",
    Icon: FlaskConical,
  },
  {
    href: "/start",
    name: "Advanced Lab Panels",
    kicker: "Root-Cause Bloodwork",
    Icon: Microscope,
  },
  {
    href: "/tools/functional-neurology",
    name: "Functional Neurology",
    kicker: "Circuit-Level Rehab",
    Icon: Target,
  },
] as const;

const RIGHT_SERVICES: readonly Service[] = [
  {
    href: "/tools/neurofeedback",
    name: "Neurofeedback",
    kicker: "qEEG-Guided Training",
    Icon: Waves,
  },
  {
    href: "/tools/violet-laser",
    name: "Violet Laser Therapy",
    kicker: "Photobiomodulation",
    Icon: Zap,
  },
  {
    href: "/tools/regenerative-solutions",
    name: "Regenerative Solutions",
    kicker: "Non-Surgical Repair",
    Icon: Sprout,
  },
] as const;

function ServicePill({ href, name, kicker, Icon }: Service) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-3 backdrop-blur-sm transition-colors hover:border-amber-b/40 hover:bg-white/[0.08]"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-b/15 text-amber-b transition-colors group-hover:bg-amber-b/25">
        <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate font-sans text-[13px] font-semibold leading-tight text-white">
          {name}
        </span>
        <span className="mt-0.5 block truncate font-sans text-[11px] text-white/55">
          {kicker}
        </span>
      </span>
    </Link>
  );
}

// pt (not mt) clears the fixed nav so the dark bg fills to the top.
// Video's original white background is chroma-keyed to navy (see
// design-conventions memory), blending edge-to-edge with the section.
export default function Home2VideoHero() {
  return (
    <section className="relative overflow-hidden bg-[#010610] pt-20 sm:pt-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/2 h-[32rem] w-[32rem] -translate-y-1/2 rounded-full bg-amber-b/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/3 h-[28rem] w-[28rem] rounded-full bg-blue-500/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-sans text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Six drug-free modalities.{" "}
            <span className="text-amber-b">One integrated protocol.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.8fr)_minmax(0,0.75fr)] lg:items-center lg:gap-10">
          <div className="order-2 flex flex-col gap-3 lg:order-1">
            {LEFT_SERVICES.map((s) => (
              <ServicePill key={s.href} {...s} />
            ))}
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto aspect-video w-full overflow-hidden">
              <video
                aria-hidden="true"
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-contain"
              >
                <source
                  src="/videos/home2-brain-orbit-navy.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>

          <div className="order-3 flex flex-col gap-3">
            {RIGHT_SERVICES.map((s) => (
              <ServicePill key={s.href} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
