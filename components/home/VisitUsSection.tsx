import { MapPin, Phone, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";

const PHONE_DISPLAY = "(408) 871-8222";
const PHONE_HREF = "tel:+14088718222";
const MAP_QUERY = "20+S+Santa+Cruz+Ave,+Suite+101,+Los+Gatos,+CA+95030";

export default function VisitUsSection() {
  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="font-mono font-medium text-[13px] uppercase tracking-[0.18em] text-amber">
              Visit
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
              Come see us in Los Gatos.
            </h2>

            <address className="mt-10 space-y-6 not-italic text-ink">
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-1 shrink-0 text-amber"
                  aria-hidden="true"
                />
                <div>
                  <p>20 S Santa Cruz Ave, Suite 101</p>
                  <p className="text-muted">Los Gatos, CA 95030</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone
                  size={18}
                  className="mt-1 shrink-0 text-amber"
                  aria-hidden="true"
                />
                <a
                  href={PHONE_HREF}
                  className="transition-colors hover:text-amber"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock
                  size={18}
                  className="mt-1 shrink-0 text-amber"
                  aria-hidden="true"
                />
                <div>
                  <p>Tue &amp; Thu</p>
                  <p className="text-muted">9:30 – 3:00</p>
                </div>
              </div>
            </address>
          </Reveal>

          <Reveal delay={120} offset={24} className="lg:col-span-7">
            <div className="overflow-hidden rounded-2xl border border-rule">
              {/* TODO: swap in production Google Maps embed URL / API key. */}
              <iframe
                title="Map to NeuroIntegrative Care of Los Gatos"
                src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-80 w-full border-0 lg:h-full lg:min-h-[22rem]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
