import Image from "next/image";
import Navbar from "@/components/Navbar";
import AboutSection from '@/components/AboutSection';

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-10 pb-20 gap-16">
      <Navbar/>
      <AboutSection/>
    </div>
  );
}
