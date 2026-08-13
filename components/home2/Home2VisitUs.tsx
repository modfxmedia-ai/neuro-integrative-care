import { MapPin, Phone, Clock, type LucideIcon } from "lucide-react";

interface DetailItem {
  icon: LucideIcon;
  lines: string[];
  href?: string;
}

// Same address/phone/hours as components/home/VisitUsSection.tsx, restyled
// flat (no blurred orb, no magnetic button, no floating map badges).
const PHONE_DISPLAY = "(408) 871-8222";
const PHONE_HREF = "tel:+14088718222";
const MAP_QUERY = "20+S+Santa+Cruz+Ave,+Suite+101,+Los+Gatos,+CA+95030";
const DIRECTIONS_HREF = `https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`;

const DETAILS: DetailItem[] = [
  {
    icon: MapPin,
    lines: ["20 S Santa Cruz Ave, Suite 101", "Los Gatos, CA 95030"],
  },
  { icon: Phone, lines: [PHONE_DISPLAY], href: PHONE_HREF },
  { icon: Clock, lines: ["Tue & Thu", "9:30–3:00"] },
];

const HIGHLIGHTS = ["In-Person Visits", "Downtown Los Gatos", "By Appointment"];

export default function Home2VisitUs() {
  return (
    <section className="bg-paper py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="font-sans text-sm font-semibold uppercase tracking-wide text-amber-b">
              Visit
            </p>
            <h2 className="mt-3 font-sans text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Come see us in Los Gatos.
            </h2>
            <p className="mt-4 max-w-md font-sans text-[15px] leading-relaxed text-muted">
              Our Los Gatos clinic is a quiet, unhurried space — no waiting
              room chaos, no rushed ten-minute visits. Just focused time to
              get to the bottom of what&apos;s going on.
            </p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {HIGHLIGHTS.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-amber-soft px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wide text-amber-b"
                >
                  {item}
                </li>
              ))}
            </ul>

            <address className="mt-8 space-y-3 not-italic">
              {DETAILS.map(({ icon: Icon, lines, href }) => {
                const Row = href ? "a" : "div";
                return (
                  <Row
                    key={lines[0]}
                    {...(href ? { href } : {})}
                    className="flex items-start gap-4 rounded-xl bg-paper-2 p-4"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-soft">
                      <Icon
                        size={18}
                        strokeWidth={1.5}
                        aria-hidden="true"
                        className="text-amber-b"
                      />
                    </span>
                    <div className="font-sans text-[15px] text-ink">
                      <p>{lines[0]}</p>
                      {lines[1] && <p className="text-muted">{lines[1]}</p>}
                    </div>
                  </Row>
                );
              })}
            </address>

            <a
              href={DIRECTIONS_HREF}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-md bg-amber px-6 py-3 font-sans text-sm font-medium text-ink transition-colors hover:bg-amber-b"
            >
              Get Directions
            </a>
          </div>

          <div className="overflow-hidden rounded-xl border-2 border-amber-soft">
            <iframe
              title="Map to NeuroIntegrative Care of Los Gatos"
              src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full border-0 lg:h-full lg:min-h-[22rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
