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
      className="group flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1.5 backdrop-blur-sm transition-colors hover:border-amber-b/40 hover:bg-white/[0.08] lg:justify-start lg:gap-3 lg:rounded-xl lg:px-3.5 lg:py-3 xl:gap-2 xl:px-2.5"
    >
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-amber-b/15 text-amber-b transition-colors group-hover:bg-amber-b/25 lg:h-9 lg:w-9 lg:rounded-lg xl:h-7 xl:w-7">
        <Icon className="h-3.5 w-3.5 lg:h-[18px] lg:w-[18px] xl:h-[14px] xl:w-[14px]" strokeWidth={1.75} />
      </span>
      <span className="min-w-0 text-center lg:flex-1 lg:text-left">
        <span className="block font-sans text-sm font-semibold leading-tight text-white lg:text-[13px] xl:whitespace-nowrap">
          {name}
        </span>
        <span className="mt-0.5 block font-sans text-xs leading-tight text-white/55 lg:text-[11px]">
          {kicker}
        </span>
      </span>
    </Link>
  );
}

// pt (not mt) clears the fixed nav so the dark bg fills to the top.
// Video is encoded with a pure-black bg + rendered with `mix-blend-mode:
// lighten` — black pixels get max-blended with the section's `#010610`,
// making them literally identical to the section bg (both on desktop and
// Safari mobile, where color-space drift would otherwise show a seam).
export default function Home2VideoHero() {
  return (
    <section className="relative overflow-hidden bg-[#010610] pt-20 sm:pt-24">

      <div className="relative mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20 xl:px-6">
        <div className="mx-auto text-center">
          <h2 className="font-sans text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl lg:whitespace-nowrap lg:text-[2.25rem]">
            Six drug-free modalities.{" "}
            <span className="text-amber-b">One integrated protocol.</span>
          </h2>
          <p className="mt-3 font-sans text-base text-white/70 sm:text-lg">
            What combination works for you?
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:mt-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,2.3fr)_minmax(0,0.55fr)] lg:items-center lg:gap-6 xl:grid-cols-[210px_minmax(0,1fr)_210px] xl:gap-4">
          <div className="order-2 mx-auto flex w-full max-w-[15rem] flex-col gap-4 sm:max-w-xs lg:order-1 lg:mx-0 lg:max-w-none lg:gap-3">
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
                className="h-full w-full object-contain [mix-blend-mode:lighten]"
              >
                <source
                  src="/videos/home2-brain-orbit-black.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>

          <div className="order-3 mx-auto flex w-full max-w-[15rem] flex-col gap-4 sm:max-w-xs lg:mx-0 lg:max-w-none lg:gap-3">
            {RIGHT_SERVICES.map((s) => (
              <ServicePill key={s.href} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
