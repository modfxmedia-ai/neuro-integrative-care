import type { Metadata } from "next";
import SixDoorsGrid from "@/components/home/SixDoorsGrid";

export const metadata: Metadata = {
  title: "Conditions",
  description:
    "Six sectors of investigation — autoimmune, brain brightening, concussion & post-trauma, environmental toxins, longevity, and idiopathic cases. Start here.",
  alternates: { canonical: "/conditions" },
};

export default function ConditionsHubPage() {
  return <SixDoorsGrid headingLevel="h1" />;
}
