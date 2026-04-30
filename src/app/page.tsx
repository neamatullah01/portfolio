import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import TechStack from "@/components/TechStack";
import Qualification from "@/components/Qualification";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Qualification />
      {/* 
        Remaining sections to be added:
        - Projects
        - Contact 
      */}
    </main>
  );
}
