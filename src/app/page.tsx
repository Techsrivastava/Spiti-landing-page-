import BentoGrid1 from "@/components/BentoGrid1";
import { CoterieSection } from "@/components/coterie-section";
import { CraftsmanshipSection } from "@/components/craftsmanship-section";
import Hero from "@/components/hero";
import Navbar from "@/components/Navbar";
import { NomadicRoadFooter } from "@/components/nomadic-road-footer";
import SectionOne from "@/components/section_one";
import SectionTwo from "@/components/sectiontwo";
import ParallaxSection from "@/components/ParallaxSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ParallaxSection>
        <SectionOne />
      </ParallaxSection>
      <ParallaxSection>
        <SectionTwo />
      </ParallaxSection>
      <ParallaxSection>
        <BentoGrid1 />
      </ParallaxSection>
      <ParallaxSection>
        <CoterieSection />
      </ParallaxSection>
      <ParallaxSection>
        <CraftsmanshipSection />
      </ParallaxSection>
      <ParallaxSection>
        <NomadicRoadFooter />
      </ParallaxSection>
    </main>
  );
}
