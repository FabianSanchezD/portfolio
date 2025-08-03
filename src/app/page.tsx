import Image from "next/image";
import Navbar from "@/components/Navbar";
import AboutSection from '@/components/AboutSection';
import TechStackSection from "@/components/TechStackSection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="font-sans min-h-screen p-4 md:p-8 lg:p-10 pb-20">
      <div className="flex flex-col items-center gap-7">
        <Navbar/>
        <AboutSection/>
        <TechStackSection/>
        <ProjectSection/>
        <ContactSection/>
      </div>
    </div>
  );
}
