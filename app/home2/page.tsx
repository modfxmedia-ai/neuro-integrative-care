import type { Metadata } from "next";
import Home2VideoHero from "@/components/home2/Home2VideoHero";
import Home2Hero from "@/components/home2/Home2Hero";
import Home2ConditionGrid from "@/components/home2/Home2ConditionGrid";
import Home2Proof from "@/components/home2/Home2Proof";
import Home2WhyChooseUs from "@/components/home2/Home2WhyChooseUs";
import Home2HowItWorks from "@/components/home2/Home2HowItWorks";
import Home2VirtualProgram from "@/components/home2/Home2VirtualProgram";
import Home2Recognition from "@/components/home2/Home2Recognition";
import Home2DoctorTeaser from "@/components/home2/Home2DoctorTeaser";
import Home2FinalCTA from "@/components/home2/Home2FinalCTA";
import Home2VisitUs from "@/components/home2/Home2VisitUs";

// Internal design variant for comparison against the live homepage — same
// copy/content/section order, restyled clean and minimal. Kept out of search
// results (noindex) and out of app/sitemap.ts to avoid duplicate content.
export const metadata: Metadata = {
  title: "Home 2 (Design Variant)",
  description:
    "Design variant of the NeuroIntegrative Care of Los Gatos homepage — same content, a cleaner and more minimal visual treatment.",
  robots: { index: false, follow: true },
};

export default function Home2Page() {
  return (
    <>
      <Home2VideoHero />
      <Home2Hero />
      <Home2ConditionGrid />
      <Home2Proof />
      <Home2WhyChooseUs />
      <Home2HowItWorks />
      <Home2VirtualProgram />
      <Home2Recognition />
      <Home2DoctorTeaser />
      <Home2FinalCTA />
      <Home2VisitUs />
    </>
  );
}
