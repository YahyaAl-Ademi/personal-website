import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
        scrolled ? "bg-background/80 backdrop-blur-md border-border/40 py-4 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a 
          href="#" 
          onClick={(e) => onNavClick(e, "#home")}
          className="text-2xl font-bold tracking-tighter text-foreground group"
        >
          Yahya <span className="text-primary transition-colors group-hover:text-primary/80">Al-Ademi</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => onNavClick(e, link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border shadow-lg py-4 px-6 flex flex-col gap-4 animate-in slide-in-from-top-2">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => onNavClick(e, link.href)}
              className="text-base font-medium text-foreground hover:text-primary transition-colors py-2"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
