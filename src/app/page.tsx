import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import TechStack from "@/components/TechStack";
import Qualification from "@/components/Qualification";
import FeaturedProjects from "@/components/Projects";
import Contact from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Qualification />
      <FeaturedProjects />
      <Contact />
      <Footer />
    </main>
  );
}
