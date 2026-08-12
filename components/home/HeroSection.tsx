"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

/*
 * Compliance note: convey "finally understood" through empathy — never
 * diagnostic or curative guarantees. Language stays in functional-medicine
 * scope: investigate, identify, support.
 *
 * LCP note: entrance animations on the H1 and hero copy use the CSS
 * `.reveal` keyframe (animation-fill-mode: both) via the <Reveal> component,
 * not framer-motion `initial`+`animate`. This guarantees the text renders on
 * paint even if the JS bundle is slow or blocked, and is disabled under
 * prefers-reduced-motion. framer-motion is reserved here for ambient loops
 * (radial glows) and hover interactions.
 */

const TRUST_ITEMS = [
  "30 years in Silicon Valley",
  "11 colleges, 10,000+ hours of advanced training",
  "Zero prescriptions",
  "Los Gatos, CA",
] as const;

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[15%] -top-[25%] h-[80vh] w-[80vh] rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, rgba(248,180,43,0.32), rgba(11,18,32,0) 70%)",
        }}
        animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[20%] -right-[15%] h-[70vh] w-[70vh] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(closest-side, rgba(36,50,71,0.9), rgba(11,18,32,0) 70%)",
        }}
        animate={{ x: [0, -50, 0], y: [0, -30, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 pb-24 pt-36 lg:grid-cols-12 lg:px-10 lg:pb-32 lg:pt-44">
        <div className="lg:col-span-7">
          <Reveal
            as="p"
            delay={50}
            offset={12}
            className="font-mono text-[11px] uppercase tracking-[0.32em] text-amber-b"
          >
            NeuroIntegrative Care · Los Gatos
          </Reveal>

          <h1 className="mt-6 font-serif text-[2.5rem] leading-[1.05] tracking-tight text-paper sm:text-5xl lg:text-6xl">
            <Reveal as="span" delay={180} offset={28} className="block">
              You&apos;re not imagining it.
            </Reveal>
            <Reveal as="span" delay={400} offset={28} className="block">
              You&apos;ve just never been{" "}
              <span className="italic text-amber-b">fully investigated</span>.
            </Reveal>
          </h1>

          <Reveal
            as="p"
            delay={850}
            offset={16}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-paper/75"
          >
            For people who&apos;ve seen specialist after specialist, whose labs
            keep coming back &ldquo;normal,&rdquo; and who still don&apos;t feel
            right — a 30-year, root-cause investigation into the brain,
            metabolism, and nervous system. Drug-free. Backed by objective
            testing, not guesswork.
          </Reveal>

          <Reveal
            delay={1050}
            offset={16}
            className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center"
          >
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className="shrink-0"
            >
              <Link
                href="/start-here"
                className="inline-flex items-center rounded-full bg-gradient-to-r from-amber to-amber-b px-7 py-3.5 text-sm font-medium tracking-tight text-ink shadow-[0_10px_36px_-10px_rgba(248,180,43,0.6)] transition-shadow duration-300 hover:shadow-[0_20px_52px_-12px_rgba(248,180,43,0.85)]"
              >
                Book a New-Patient Investigation — $300
              </Link>
            </motion.div>
            <Link
              href="#how-it-works"
              className="group inline-flex items-center gap-2 text-sm text-paper/80 transition-colors hover:text-amber-b"
            >
              See how the investigation works
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </Reveal>

          <Reveal
            as="ul"
            delay={1300}
            offset={12}
            className="mt-14 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] uppercase tracking-[0.22em] text-paper/55"
          >
            {TRUST_ITEMS.map((item, i) => (
              <li key={item} className="flex items-center gap-3">
                <span>{item}</span>
                {i < TRUST_ITEMS.length - 1 && (
                  <span aria-hidden="true" className="text-amber-b/60">
                    ·
                  </span>
                )}
              </li>
            ))}
          </Reveal>
        </div>
        {/*
         * PLACEHOLDER — awaiting real portrait of Dr. Santucci.
         * DO NOT caption any interim image with his name until a real photo is
         * supplied and approved.
         */}
        <Reveal delay={450} offset={24} className="lg:col-span-5">
          <div className="relative mx-auto w-full max-w-md">
            <motion.span
              aria-hidden="true"
              className="pointer-events-none absolute -inset-6 rounded-[24px]"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(248,180,43,0.28), rgba(11,18,32,0) 70%)",
              }}
              animate={{ opacity: [0.4, 0.65, 0.4], scale: [1, 1.03, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <div
              className="relative aspect-[3/4] w-full overflow-hidden rounded-lg border border-rule-d bg-ink-2 shadow-[0_40px_80px_-40px_rgba(11,18,32,0.7)]"
              role="presentation"
              aria-hidden="true"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,rgba(248,180,43,0.10),rgba(17,28,46,0)_60%)]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]"
              />
              <div className="absolute inset-x-6 bottom-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-paper/45">
                  Portrait Pending
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
