"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

interface Bar {
  label: string;
  /** Fill proportion, 0-1. */
  weight: number;
}

interface CredentialBarsProps {
  bars: Bar[];
}

export default function CredentialBars({ bars }: CredentialBarsProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start 85%", "end 45%"],
  });

  return (
    <div ref={wrapperRef} className="flex flex-col gap-5" aria-hidden="true">
      {bars.map((bar) => (
        <BarRow
          key={bar.label}
          label={bar.label}
          weight={bar.weight}
          progress={scrollYProgress}
        />
      ))}
    </div>
  );
}

interface BarRowProps extends Bar {
  progress: MotionValue<number>;
}

function BarRow({ label, weight, progress }: BarRowProps) {
  const width = useTransform(
    progress,
    [0, 1],
    ["0%", `${Math.min(100, Math.max(0, weight * 100))}%`],
  );
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-muted">
        {label}
      </p>
      <div className="relative mt-2 h-[3px] w-full rounded-full bg-rule/60">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-amber to-amber-b"
          style={{ width }}
        />
      </div>
    </div>
  );
}
