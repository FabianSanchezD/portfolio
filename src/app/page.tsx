import Image from "next/image";
import Navbar from "@/components/Navbar";
import AboutSection from '@/components/AboutSection';
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-10 pb-20 gap-16">
      <Navbar/>
      <AboutSection/>
      <ProjectSection/>
      <ContactSection/>
    </div>
  );
}
