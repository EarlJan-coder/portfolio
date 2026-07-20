import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { BackToTop } from "@/components/ui/BackToTop";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { AIEngineering } from "@/components/sections/AIEngineering";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <BackToTop />
      <main className="relative">
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <AIEngineering />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
