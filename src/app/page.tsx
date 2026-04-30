import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AnimatedBackground } from "@/components/AnimatedBackground";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      {/* 
        Remaining sections to be added:
        - About
        - Tech Stack / Skills
        - Qualification
        - Projects
        - Contact 
      */}
    </main>
  );
}
