import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import WhatIBuild from "./components/homepage/what-i-build";
import Skills from "./components/homepage/skills";

export default function Home() {
  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <WhatIBuild />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <ContactSection />
    </div>
  );
}
