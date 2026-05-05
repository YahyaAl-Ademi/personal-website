import React from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Full-Stack Developer Trainee",
    company: "HackYourFuture Amsterdam",
    period: "2025 to present",
    description: "Built PERN-stack apps, REST APIs, React apps with state management, full-stack platform with authentication and user dashboard.",
  },
  {
    title: "R&D Researcher",
    company: "BSUIR, Minsk, Belarus",
    period: "2015 to 2017",
    description: "Applied research in electromagnetic absorption and EMI shielding. Published 40 papers, authored 2 books, presented at international conferences.",
  },
  {
    title: "STEM Teacher",
    company: "Secondary School of Arab Solidarity, Minsk",
    period: "2012 to 2017",
    description: "Taught Physics, Math, Statistics, Electrical Engineering. Improved Physics results by 10%.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-background relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 text-center">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        <div className="relative border-l-2 border-primary/30 ml-3 md:ml-6 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.title} className="relative pl-8 md:pl-12">
              <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-background border-4 border-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]" />

              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                  {exp.title}
                </h3>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-medium tracking-wide w-fit">
                  {exp.period}
                </span>
              </div>

              <h4 className="text-lg text-muted-foreground font-medium mb-4 flex items-center gap-2">
                <Briefcase size={16} />
                {exp.company}
              </h4>
              
              <p className="text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
