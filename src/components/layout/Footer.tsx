import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-background py-12 border-t border-border mt-auto">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-xl font-bold tracking-tighter">Yahya <span className="text-primary">Al-Ademi</span></span>
          <p className="text-sm text-muted-foreground">© {year} Yahya Al-Ademi. All rights reserved.</p>
        </div>
        
        <div className="flex gap-6">
          <a
            href="https://github.com/YahyaAl-Ademi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors p-2"
            aria-label="GitHub"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/yahya-al-ademi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors p-2"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
