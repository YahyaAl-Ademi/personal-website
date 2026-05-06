import React from "react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    title: "Job Compass",
    description:
      "Full-stack job listing platform with authentication, role-based access, RESTful APIs, and relational database design.",
    outcome:
      "A full sign-up to job listings flow, backed by PostgreSQL. The closest project on this site to a production-ready product..",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/YahyaAl-Ademi/Job-Compass-Fullstack-App",
    live: "https://job-compass.org/",
    featured: true
  },
  {
    title: "Weather App (React)",
    description:
      "Responsive weather app using real-time API data and async requests with dynamic backgrounds.",
    outcome:
      "People get live conditions for a city they pick, with async API calls and UI that still feels smooth on a phone.",
    tech: ["React", "JavaScript", "External APIs"],
    github: "https://github.com/YahyaAl-Ademi/React-Weather-App",
    live: "https://weatherapp102025.netlify.app/",
    featured: false
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather for any city using OpenWeatherMap API, no frameworks. Pure JavaScript implementation.",
    outcome:
      "Same idea as the React weather app, but without a framework on purpose, so it's clear I can work in plain JS, the DOM, and fetch when there's no library in the stack.",
    tech: ["Vanilla JS", "HTML", "CSS"],
    github: "https://github.com/YahyaAl-Ademi/Vanilla-JS-Weather-Dashboard",
    live: "https://weather-app-ey6z.onrender.com/",
    featured: false
  },
  {
    title: "Interactive Quiz",
    description: "Client-side quiz app demonstrating core web fundamentals, DOM manipulation, and state management.",
    outcome:
      "Someone taking the quiz gets clear questions and instant scoring. I kept all state and updates in the browser without a library.",
    tech: ["Vanilla JS", "HTML", "CSS"],
    github: "https://github.com/YahyaAl-Ademi/Interactive-js-quiz",
    live: "https://qius-app-2025.netlify.app/",
    featured: false
  },
  {
    title: "E-commerce Shop",
    description: "Shopping platform with product filtering, cart functionality, and responsive UI.",
    outcome:
      "Users can browse, filter, and use a cart in one flow. That's the sort of retail-style pattern employers know from real online shops.",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/YahyaAl-Ademi/E-commerce-Platform",
    live: "https://e-commerce-platform-2025.vercel.app/",
    featured: false
  }
];

export default function Projects() {
  const head = useScrollAnimation<HTMLDivElement>();

  const fade = `transition-all duration-700 ease-out ${head.show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`;

  return (
    <section id="projects" className="py-24 bg-secondary/10 relative">
      <div className="container mx-auto px-6">
        <div ref={head.ref} style={head.style} className={`${fade} flex flex-col items-center mb-16`}>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 text-center">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((item) => (
            <div key={item.title} className={item.featured ? "md:col-span-2 lg:col-span-2" : ""}>
              <div className="relative h-full flex flex-col bg-background/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden group hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10 rounded-xl">
                {item.featured && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-cyan-400" />
                )}
                <div className="p-6 pb-0">
                  <div className="flex justify-between items-start mb-2">
                    {item.featured ? (
                      <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-primary text-primary-foreground">
                        Featured
                      </span>
                    ) : (
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-muted-foreground border-border">
                        Project
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors mt-2">
                    {item.title}
                  </h3>
                </div>
                <div className="p-6 flex-1">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <p className="text-sm text-foreground/90 leading-relaxed border-l-2 border-primary/50 pl-3 mb-6">
                    {item.outcome}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                      <span key={tech} className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-secondary/50 text-secondary-foreground font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 pt-6 border-t border-border/50 p-6">
                  {item.github ? (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-border px-3 text-sm font-medium hover:bg-secondary flex-1"
                    >
                      <FaGithub className="w-4 h-4" /> Code
                    </a>
                  ) : (
                    <span className="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-border px-3 text-sm font-medium opacity-50 cursor-not-allowed flex-1">
                      <FaGithub className="w-4 h-4" /> Private Repo
                    </span>
                  )}

                  {item.live ? (
                    <a
                      href={item.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 items-center justify-center gap-2 rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 flex-1"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  ) : (
                    <span className="inline-flex h-9 items-center justify-center gap-2 rounded-md bg-secondary px-3 text-sm font-medium opacity-50 cursor-not-allowed flex-1">
                      <ExternalLink className="w-4 h-4" /> Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
