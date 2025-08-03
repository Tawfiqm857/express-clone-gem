import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-background/95 backdrop-blur-lg shadow-lg border-b border-border/50" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-tech-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">JE</span>
            </div>
            <span className={`text-xl font-bold transition-colors ${
              isScrolled ? "text-foreground" : "text-white"
            }`}>
              Tech Hub
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className={`transition-colors hover:text-accent ${
              isScrolled ? "text-foreground" : "text-white"
            }`}>
              Home
            </a>
            <a href="#services" className={`transition-colors hover:text-accent ${
              isScrolled ? "text-foreground" : "text-white"
            }`}>
              Services
            </a>
            <a href="#about" className={`transition-colors hover:text-accent ${
              isScrolled ? "text-foreground" : "text-white"
            }`}>
              About
            </a>
            <a href="#contact" className={`transition-colors hover:text-accent ${
              isScrolled ? "text-foreground" : "text-white"
            }`}>
              Contact
            </a>
          </div>
          
          <Button variant={isScrolled ? "default" : "hero"} size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};