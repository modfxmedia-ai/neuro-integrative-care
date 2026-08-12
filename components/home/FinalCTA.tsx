"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 text-paper lg:py-40">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[80vh] w-[80vh] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(248,180,43,0.28), rgba(11,18,32,0) 70%)",
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
        <Reveal>
          <h2 className="font-serif text-4xl leading-[1.15] tracking-tight text-paper sm:text-5xl lg:text-6xl">
            If everything else has failed,
            <br />
            <span className="text-amber-b">
              that&apos;s exactly where we begin.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={220} className="mt-12 flex justify-center">
          <motion.div
            animate={{
              boxShadow: [
                "0 10px 30px -10px rgba(248,180,43,0.35)",
                "0 22px 60px -10px rgba(248,180,43,0.75)",
                "0 10px 30px -10px rgba(248,180,43,0.35)",
              ],
            }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full"
          >
            <Link
              href="/start-here"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-amber to-amber-b px-8 py-4 text-base font-medium tracking-tight text-ink"
            >
              Book your New-Patient Investigation — $300
            </Link>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
