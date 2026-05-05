import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Download, ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-primary/10 blur-[120px] mix-blend-screen opacity-50" />
        <div className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-blue-500/10 blur-[100px] mix-blend-screen opacity-50" />
      </div>

      <div className="container relative z-10 mx-auto px-6 py-24 flex flex-col items-center text-center">
        <div className="relative mb-8">
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-primary via-cyan-400 to-primary/40 blur-md opacity-80" />
          <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-primary/60 shadow-2xl shadow-primary/20">
            <img
              src="/profile.png"
              alt="Yahya Al-Ademi"
              className="w-full h-full object-cover object-[50%_12%]"
            />
          </div>
          <span className="absolute bottom-1 right-1 w-5 h-5 bg-primary rounded-full border-2 border-background animate-pulse" />
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border/50 text-sm text-muted-foreground mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Available for new opportunities
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Yahya Al-Ademi</span>
        </h1>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground/80 mb-6 font-mono tracking-tight">
          Junior Full-Stack Developer | React & Node.js | Open to Work in NL
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          I hold a PhD in biomedical engineering and now focus on software. I want to ship real products and keep growing with a good team.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md font-medium transition-colors w-full sm:w-auto h-14 px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => scrollTo("#projects")}
          >
            View My Projects
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md font-medium transition-colors border w-full sm:w-auto h-14 px-8 text-base border-border hover:bg-secondary"
            onClick={() => scrollTo("#contact")}
          >
            Contact Me
          </button>
          <a href="/cv.pdf" download="Yahya_Al-Ademi_CV.pdf" className="w-full sm:w-auto">
            <span className="inline-flex w-full h-14 items-center justify-center rounded-md font-medium px-8 text-base border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all gap-2 border">
              <Download className="w-5 h-5" />
              Download CV
            </span>
          </a>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/YahyaAl-Ademi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors p-2"
            aria-label="GitHub"
          >
            <FaGithub className="w-8 h-8" />
          </a>
          <a
            href="https://linkedin.com/in/yahya-al-ademi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors p-2"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-8 h-8" />
          </a>
        </div>
      </div>

      <motion.button
        onClick={() => scrollTo("#about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors cursor-pointer group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        aria-label="Scroll to About"
      >
        <span className="text-xs uppercase tracking-widest font-mono">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 group-hover:text-primary transition-colors" />
        </motion.div>
      </motion.button>
    </section>
  );
}
