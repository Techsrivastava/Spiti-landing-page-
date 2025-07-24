import BentoGrid1 from "@/components/BentoGrid1";
import Hero from "@/components/hero";
import Navbar from "@/components/Navbar";
import SectionOne from "@/components/section_one";
import SectionTwo from "@/components/sectiontwo";
import Image from "next/image";

export default function Home() {
  return (
     <main className="min-h-screen bg-black text-white text-gray-900">
      <Navbar />
      <Hero />
      <SectionOne/>
      <SectionTwo />
      <BentoGrid1/>
    </main>
  );
}
