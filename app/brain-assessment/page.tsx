import type { Metadata } from "next";
import CreyosTestPanel from "@/components/home/CreyosTestPanel";

export const metadata: Metadata = {
  title: "Brain Assessment — Creyos Integration Test",
  robots: { index: false, follow: false },
};

export default function BrainAssessmentPage() {
  return (
    <main className="pt-24">
      <CreyosTestPanel />
    </main>
  );
}
