"use client";

import { useCallback, useRef } from "react";
import type { MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { Navigation } from "lucide-react";

const SHELL_STRENGTH = 0.18;
const CONTENT_STRENGTH = 0.35;

interface MagneticDirectionsButtonProps {
  href: string;
  label?: string;
}

export default function MagneticDirectionsButton({
  href,
  label = "Get Directions",
}: MagneticDirectionsButtonProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rawContentX = useMotionValue(0);
  const rawContentY = useMotionValue(0);

  const shellX = useSpring(rawX, { stiffness: 280, damping: 22, mass: 0.4 });
  const shellY = useSpring(rawY, { stiffness: 280, damping: 22, mass: 0.4 });
  const contentX = useSpring(rawContentX, { stiffness: 320, damping: 24, mass: 0.35 });
  const contentY = useSpring(rawContentY, { stiffness: 320, damping: 24, mass: 0.35 });

  const handleMouseMove = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      if (prefersReducedMotion || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const dx = event.clientX - (rect.left + rect.width / 2);
      const dy = event.clientY - (rect.top + rect.height / 2);
      rawX.set(dx * SHELL_STRENGTH);
      rawY.set(dy * SHELL_STRENGTH);
      rawContentX.set(dx * CONTENT_STRENGTH);
      rawContentY.set(dy * CONTENT_STRENGTH);
    },
    [prefersReducedMotion, rawX, rawY, rawContentX, rawContentY],
  );

  const handleMouseLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
    rawContentX.set(0);
    rawContentY.set(0);
  }, [rawX, rawY, rawContentX, rawContentY]);

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={prefersReducedMotion ? undefined : { x: shellX, y: shellY }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-ink px-6 py-3 font-mono text-[13px] font-medium uppercase tracking-[0.14em] text-paper"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 origin-center scale-0 rounded-full bg-amber opacity-0 transition-transform duration-300 ease-out group-hover:scale-100 group-hover:opacity-100"
      />
      <motion.span
        style={prefersReducedMotion ? undefined : { x: contentX, y: contentY }}
        className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-ink"
      >
        {label}
        <Navigation
          size={14}
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </motion.span>
    </motion.a>
  );
}
