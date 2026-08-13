import { Microscope, BrainCircuit, ShieldOff, MapPin } from "lucide-react";

// Same four items/copy as components/home/WhyChooseUs.tsx.
const ITEMS = [
  {
    icon: Microscope,
    title: "Objective Testing",
    description: "Backed by lab panels and brain mapping, not guesswork.",
  },
  {
    icon: BrainCircuit,
    title: "Root-Cause Investigation",
    description:
      "We find what's driving your symptoms, not just what's masking them.",
  },
  {
    icon: ShieldOff,
    title: "Drug-Free",
    description: "Zero prescriptions. Technology and protocol-based care.",
  },
  {
    icon: MapPin,
    title: "In-Clinic or Virtual",
    description:
      "The same investigation, available locally in Los Gatos or nationwide.",
  },
] as const;

export default function Home2WhyChooseUs() {
  return (
    <section className="bg-paper py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="font-sans text-sm font-semibold uppercase tracking-wide text-amber-b">
            Why Choose Us
          </p>
          <h2 className="mt-3 font-sans text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            What makes the investigation different
          </h2>
        </div>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item) => (
            <li key={item.title} className="rounded-xl bg-paper-2 p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-amber-soft">
                <item.icon
                  size={22}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="text-amber-b"
                />
              </span>
              <h3 className="mt-4 font-sans text-lg font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-2 font-sans text-[15px] leading-relaxed text-muted">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
