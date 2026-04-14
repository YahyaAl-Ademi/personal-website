import React from "react";
import { GraduationCap, MapPin } from "lucide-react";

const education = [
  {
    degree: "PhD in Biomedical Engineering",
    institution: "BSUIR",
    location: "Minsk, Belarus",
    period: "2011 – 2015",
  },
  {
    degree: "MSc in Computer Systems for Medical Apparatus",
    institution: "Vinnitsa National Technical University",
    location: "Vinnitsa, Ukraine",
    period: "2008 – 2010",
  },
  {
    degree: "BSc in Biomedical Engineering",
    institution: "Vinnitsa National Technical University",
    location: "Vinnitsa, Ukraine",
    period: "2004 – 2008",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-secondary/10 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 text-center">
            Education & <span className="text-primary">Credentials</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((edu) => (
            <div key={edu.degree} className="h-full bg-background border border-border rounded-xl p-6 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-15px_rgba(var(--primary),0.3)]">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-xl leading-tight font-bold pb-4">
                {edu.degree}
              </h3>
              <div className="space-y-3">
                <div className="font-medium text-foreground/90">
                  {edu.institution}
                </div>
                <div className="flex items-center text-sm text-muted-foreground gap-1.5">
                  <MapPin size={14} />
                  {edu.location}
                </div>
                <div className="inline-block mt-2 px-3 py-1 bg-secondary rounded text-xs font-mono font-medium text-muted-foreground">
                  {edu.period}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
