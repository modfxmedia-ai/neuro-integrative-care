"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Reveal from "@/components/Reveal";

const STEPS = [
  {
    number: "01",
    title: "IDENTIFY",
    body: "We go beyond standard bloodwork. Advanced lab panels and a computerized neurological exam — balance, eye movement, reaction time, brain mapping — establish an objective picture of where your system actually broke down.",
  },
  {
    number: "02",
    title: "REBUILD",
    body: "We retrain and repair with drug-free technology: neurofeedback to retune brain activity, violet laser to restore cellular energy, regenerative solutions for tissue, and hands-on functional neurology rehab.",
  },
  {
    number: "03",
    title: "SUSTAIN",
    body: "We re-measure the same markers to confirm your nervous system is actually changing — not just that symptoms went quiet — then protect the gains with a personalized longevity and lifestyle plan.",
  },
] as const;

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 55%"],
  });

  return (
    <section id="how-it-works" className="bg-ink py-24 text-paper lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal className="max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-amber-b">
            The Investigation
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-paper sm:text-5xl">
            A different kind of workup — built to find the driver, not label the symptom.
          </h2>
        </Reveal>

        <div ref={containerRef} className="relative mt-20 lg:mt-24">
          <div
            className="absolute left-6 top-6 bottom-6 w-px bg-rule-d lg:left-7 lg:top-7 lg:bottom-7"
            aria-hidden="true"
          />
          <motion.div
            className="absolute left-6 top-6 bottom-6 w-px origin-top bg-gradient-to-b from-amber-b to-amber lg:left-7 lg:top-7 lg:bottom-7"
            style={{ scaleY: scrollYProgress }}
            aria-hidden="true"
          />

          <ol className="space-y-16 lg:space-y-24">
            {STEPS.map((step, i) => (
              <Reveal
                key={step.number}
                as="li"
                delay={100 + i * 120}
                offset={20}
                className="flex gap-6 lg:gap-10"
              >
                <div className="shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-amber bg-ink font-mono text-xs text-amber lg:h-14 lg:w-14 lg:text-sm">
                    {step.number}
                  </div>
                </div>
                <div className="pt-2 lg:pt-3">
                  <h3 className="font-mono text-xs font-medium uppercase tracking-[0.32em] text-amber-b">
                    {step.title}
                  </h3>
                  <p className="mt-5 max-w-2xl text-lg leading-relaxed text-paper/80">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
