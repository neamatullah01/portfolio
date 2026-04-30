import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { AnimatedBackground } from "@/components/AnimatedBackground";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      {/* 
        Remaining sections to be added:
        - Tech Stack / Skills
        - Qualification
        - Projects
        - Contact 
      */}
    </main>
  );
}
