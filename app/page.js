import SiteShell from "@/components/sections/SiteShell";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import MilitaryService from "@/components/sections/MilitaryService";
import Contact from "@/components/sections/Contact";

export default function Page() {
  return (
    <SiteShell>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <MilitaryService />
      <Contact />
    </SiteShell>
  );
}
