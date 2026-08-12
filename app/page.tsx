import HeroSection from "@/components/home/HeroSection";
import SixDoorsGrid from "@/components/home/SixDoorsGrid";
import ProofCards from "@/components/home/ProofCards";
import HowItWorks from "@/components/home/HowItWorks";
import VirtualProgramBand from "@/components/home/VirtualProgramBand";
import WhoThisIsFor from "@/components/home/WhoThisIsFor";
import DoctorTeaser from "@/components/home/DoctorTeaser";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SixDoorsGrid />
      <ProofCards />
      <HowItWorks />
      <VirtualProgramBand />
      <WhoThisIsFor />
      <DoctorTeaser />
      <FinalCTA />
    </>
  );
}
