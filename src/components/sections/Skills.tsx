import React from "react";
import { Layers, Server, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Layers className="w-6 h-6 mb-4 text-primary" />,
    skills: ["JavaScript (ES6+)", "TypeScript", "React.js", "HTML5", "CSS3", "Responsive Design"],
  },
  {
    title: "Backend",
    icon: <Server className="w-6 h-6 mb-4 text-primary" />,
    skills: ["Node.js", "Express", "RESTful APIs", "Fetch API"],
  },
  {
    title: "Database",
    icon: <Database className="w-6 h-6 mb-4 text-primary" />,
    skills: ["PostgreSQL (SQL)", "MongoDB"],
  },
  {
    title: "Tools & Methods",
    icon: <Wrench className="w-6 h-6 mb-4 text-primary" />,
    skills: ["Git", "Agile", "Scrum"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 text-center">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="h-full">
              <div className="bg-secondary/30 border border-border rounded-xl p-6 h-full hover:border-primary/50 transition-colors group">
                <div className="bg-background w-12 h-12 rounded-lg flex items-center justify-center border border-border group-hover:border-primary/30 transition-colors mb-6 shadow-sm">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{cat.title}</h3>
                <ul className="space-y-3">
                  {cat.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-muted-foreground text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/70" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />
    </section>
  );
}
