"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface CapabilityMeterProps {
  /** Portion of the arc to fill, 0-1. */
  target: number;
  /** Optional label placed under the arc. */
  label?: string;
}

const CIRCUMFERENCE = 2 * Math.PI * 90;

export default function CapabilityMeter({
  target,
  label,
}: CapabilityMeterProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start 85%", "end 40%"],
  });
  const targetOffset = CIRCUMFERENCE * (1 - target);
  const strokeDashoffset = useTransform(
    scrollYProgress,
    [0, 1],
    [CIRCUMFERENCE, targetOffset],
  );

  return (
    <div
      ref={wrapperRef}
      className="relative mx-auto flex aspect-square w-full max-w-[240px] items-center justify-center"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 200 200"
        className="h-full w-full -rotate-90"
        fill="none"
      >
        <circle
          cx="100"
          cy="100"
          r="90"
          stroke="rgba(217, 210, 194, 0.14)"
          strokeWidth="2"
        />
        <motion.circle
          cx="100"
          cy="100"
          r="90"
          stroke="url(#capability-gradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          style={{ strokeDashoffset }}
        />
        <defs>
          <linearGradient
            id="capability-gradient"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop offset="0%" stopColor="#e8a020" />
            <stop offset="100%" stopColor="#f8b42b" />
          </linearGradient>
        </defs>
      </svg>
      {label && (
        <span className="pointer-events-none absolute bottom-3 font-mono text-[9px] uppercase tracking-[0.32em] text-paper/45">
          {label}
        </span>
      )}
    </div>
  );
}
