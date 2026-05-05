import React from "react";
import { BookOpen, Code, GraduationCap, Users } from "lucide-react";
import GitHubStats from "@/components/sections/GitHubStats";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function About() {
  const head = useScrollAnimation<HTMLDivElement>();
  const leftCol = useScrollAnimation<HTMLDivElement>(100);
  const rightCol = useScrollAnimation<HTMLDivElement>(150);

  const fade = (show: boolean) =>
    `transition-all duration-700 ease-out ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`;

  return (
    <section id="about" className="py-24 bg-secondary/20 relative">
      <div className="container mx-auto px-6">
        <div ref={head.ref} style={head.style} className={`${fade(head.show)} flex flex-col items-center mb-16`}>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 text-center">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div ref={leftCol.ref} style={leftCol.style} className={`${fade(leftCol.show)} space-y-6`}>
            <div className="flex items-center gap-5 mb-2">
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-primary to-cyan-400 opacity-50 blur-sm" />
                <img
                  src="/profile.png"
                  alt="Yahya Al-Ademi"
                  className="relative w-20 h-20 rounded-2xl object-cover object-[50%_12%] border border-primary/30"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Yahya Al-Ademi</h3>
                <p className="text-sm text-primary font-mono">Junior Full-Stack Developer</p>
                <p className="text-xs text-muted-foreground mt-0.5">Berkel en Rodenrijs, Netherlands</p>
              </div>
            </div>

            <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
              <p>
                I'm a calm and analytical person who enjoys breaking down complex problems and finding the best solutions. I like working with code and tough technical questions, and I care about the human side of work.
              </p>
              <p>
                I believe clear communication and a supportive team are key to doing great work. I face challenges with patience and consistency. I prefer to understand the reason behind a problem before deciding how to solve it.
              </p>
              <p>
                In the{" "}
                <a href="#projects" className="text-primary font-medium hover:underline">
                  projects
                </a>{" "}
                section, each card ends with a short outcome: who it is for, what problem it solves, or what it shows a hiring team.
              </p>
            </div>

            <div className="pt-6 border-t border-border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Languages</h3>
              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-2 bg-background border border-border rounded-lg text-sm">
                  <span className="font-semibold text-primary">Arabic</span> (Native)
                </div>
                <div className="px-4 py-2 bg-background border border-border rounded-lg text-sm">
                  <span className="font-semibold text-primary">English</span> (Proficient)
                </div>
                <div className="px-4 py-2 bg-background border border-border rounded-lg text-sm">
                  <span className="font-semibold text-primary">Russian</span> (Proficient)
                </div>
                <div className="px-4 py-2 bg-background border border-border rounded-lg text-sm">
                  <span className="font-semibold text-primary">Ukrainian</span> (Intermediate)
                </div>
                <div className="px-4 py-2 bg-background border border-border rounded-lg text-sm">
                  <span className="font-semibold text-primary">Dutch</span> (Intermediate)
                </div>
              </div>
            </div>

          </div>

          <div ref={rightCol.ref} style={rightCol.style} className={fade(rightCol.show)}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl blur-xl -z-10" />
              <div className="bg-background border border-border rounded-2xl p-8 shadow-xl relative z-10">
                <h3 className="text-2xl font-bold mb-6 border-b border-border pb-4">Career Journey</h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="mt-1 bg-primary/20 p-2 rounded-lg text-primary h-fit">
                      <GraduationCap size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Biomedical Engineer</h4>
                      <p className="text-sm text-muted-foreground">Foundation in scientific principles and precise engineering.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="mt-1 bg-primary/20 p-2 rounded-lg text-primary h-fit">
                      <BookOpen size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">R&D Researcher</h4>
                      <p className="text-sm text-muted-foreground">
                        Published 40 papers and 2 books. Mastered analytical rigor.{" "}
                        <a
                          href="https://scholar.google.com/citations?user=9JHCsDMAAAAJ&hl=en"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline font-medium"
                        >
                          Google Scholar
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="mt-1 bg-primary/20 p-2 rounded-lg text-primary h-fit">
                      <Users size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">STEM Teacher</h4>
                      <p className="text-sm text-muted-foreground">Developed communication skills explaining complex concepts clearly.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="mt-1 bg-primary text-primary-foreground p-2 rounded-lg h-fit shadow-[0_0_15px_rgba(var(--primary),0.5)]">
                      <Code size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-primary">Junior Full-Stack Developer</h4>
                      <p className="text-sm text-foreground/80">Applying analytical depth to modern web technologies.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GitHub Stats */}
        <div className="mt-12 pt-6 border-t border-border">
          <h3 className="text-xl font-semibold mb-4 text-foreground">GitHub Activity</h3>
          <GitHubStats />
        </div>
      </div>
    </section>
  );
}
