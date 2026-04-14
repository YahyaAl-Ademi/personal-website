import React from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import ScrollToTopButton from "@/components/layout/ScrollToTopButton";

export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground dark selection:bg-primary selection:text-primary-foreground flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
