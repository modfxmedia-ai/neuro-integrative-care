// Same three steps/copy as components/home/HowItWorks.tsx, restyled as a
// horizontal timeline (no image, no sticky/scroll-linked motion).
const STEPS = [
  {
    number: "01",
    title: "IDENTIFY",
    body: "We go beyond standard bloodwork. Advanced lab panels and a computerized neurological exam (balance, eye movement, reaction time, brain mapping) establish an objective picture of where your system actually broke down.",
  },
  {
    number: "02",
    title: "REBUILD",
    body: "We retrain and repair with drug-free technology: neurofeedback to retune brain activity, violet laser to restore cellular energy, regenerative solutions for tissue, and hands-on functional neurology rehab.",
  },
  {
    number: "03",
    title: "SUSTAIN",
    body: "We re-measure the same markers to confirm your nervous system is actually changing, not just that symptoms went quiet, then protect the gains with a personalized longevity and lifestyle plan.",
  },
] as const;

export default function Home2HowItWorks() {
  return (
    <section id="how-it-works" className="bg-paper-2 py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="font-sans text-sm font-semibold uppercase tracking-wide text-amber-b">
            The Investigation
          </p>
          <h2 className="mt-3 font-sans text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            A different kind of workup, built to find the driver, not label
            the symptom.
          </h2>
        </div>

        <ol className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-6">
          {STEPS.map((step, index) => (
            <li key={step.number} className="flex flex-col">
              <div className="flex items-center">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber font-sans text-sm font-semibold text-ink">
                  {step.number}
                </div>
                {index < STEPS.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="ml-3 hidden h-px flex-1 bg-rule sm:block"
                  />
                )}
              </div>
              <h3 className="mt-5 font-sans text-xs font-semibold uppercase tracking-wide text-amber-b">
                {step.title}
              </h3>
              <p className="mt-3 font-sans text-[15px] leading-relaxed text-muted">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
