import { MapPin, Phone, Clock, ArrowUpRight, type LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";
import MagneticDirectionsButton from "@/components/home/MagneticDirectionsButton";

interface DetailItem {
  icon: LucideIcon;
  lines: string[];
  href?: string;
}

const PHONE_DISPLAY = "(408) 871-8222";
const PHONE_HREF = "tel:+14088718222";
const MAP_QUERY = "20+S+Santa+Cruz+Ave,+Suite+101,+Los+Gatos,+CA+95030";
const DIRECTIONS_HREF = `https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`;
const MAPS_HREF = `https://www.google.com/maps?q=${MAP_QUERY}`;

const DETAILS: DetailItem[] = [
  {
    icon: MapPin,
    lines: ["20 S Santa Cruz Ave, Suite 101", "Los Gatos, CA 95030"],
  },
  { icon: Phone, lines: [PHONE_DISPLAY], href: PHONE_HREF },
  { icon: Clock, lines: ["Tue & Thu", "9:30 – 3:00"] },
];

const HIGHLIGHTS = ["In-Person Visits", "Downtown Los Gatos", "By Appointment"] as const;

export default function VisitUsSection() {
  return (
    <section className="relative overflow-hidden bg-paper py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-amber-soft/70 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-stretch lg:gap-16">
          <Reveal className="flex flex-col lg:col-span-5">
            <div>
              <p className="font-mono font-medium text-[13px] uppercase tracking-[0.18em] text-amber">
                Visit
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
                Come see us in Los Gatos.
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
                Our Los Gatos clinic is a quiet, unhurried space — no waiting
                room chaos, no rushed ten-minute visits. Just focused time to
                get to the bottom of what&apos;s going on.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {HIGHLIGHTS.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-rule/60 bg-white px-4 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-muted"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              <address className="mt-8 overflow-hidden rounded-3xl border border-rule/60 bg-white/70 not-italic">
                <div className="divide-y divide-rule/60">
                  {DETAILS.map(({ icon: Icon, lines, href }) => {
                    const Row = href ? "a" : "div";
                    return (
                      <Row
                        key={lines[0]}
                        {...(href ? { href } : {})}
                        className="group flex items-start gap-4 p-5 transition-colors duration-300 hover:bg-amber-soft/60"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-amber/30 bg-amber-soft text-amber transition-colors duration-300 group-hover:border-amber group-hover:bg-amber group-hover:text-ink">
                          <Icon size={17} aria-hidden="true" />
                        </span>
                        <div className="pt-1.5 text-ink">
                          <p>{lines[0]}</p>
                          {lines[1] && <p className="text-muted">{lines[1]}</p>}
                        </div>
                      </Row>
                    );
                  })}
                </div>
              </address>
            </div>

            <div className="mt-6 lg:mt-auto lg:pt-8">
              <MagneticDirectionsButton href={DIRECTIONS_HREF} />
            </div>
          </Reveal>

          <Reveal delay={120} offset={24} className="lg:col-span-7 lg:h-full">
            <div className="group relative h-full overflow-hidden rounded-3xl border border-rule/60 shadow-[0_1px_2px_rgba(11,18,32,0.04)] transition-shadow duration-500 hover:shadow-[0_40px_80px_-40px_rgba(11,18,32,0.35)]">
              {/* TODO: swap in production Google Maps embed URL / API key. */}
              <iframe
                title="Map to NeuroIntegrative Care of Los Gatos"
                src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-80 w-full border-0 grayscale-[20%] transition-all duration-500 group-hover:grayscale-0 lg:h-full lg:min-h-[32rem]"
              />

              <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 rounded-full border border-rule/60 bg-white/90 px-4 py-2 font-mono text-[12px] font-medium uppercase tracking-[0.1em] text-ink shadow-md backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-amber" />
                </span>
                Suite 101
              </div>

              <a
                href={MAPS_HREF}
                target="_blank"
                rel="noreferrer"
                aria-label="Open in Google Maps"
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink shadow-md backdrop-blur transition-transform duration-300 hover:scale-105 hover:text-amber"
              >
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
