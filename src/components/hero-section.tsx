import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            LEARN, GROW{" "}
            <span className="bg-accent-gradient bg-clip-text text-transparent">
              & EXPLORE
            </span>
            <br />
            ENDLESS OPPORTUNITIES!
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of satisfied clients who have achieved their goals with our expert guidance.
          </p>
          
          <Button variant="hero" size="xl" className="shadow-tech">
            Get Started
          </Button>
        </div>
      </div>
      
      {/* Floating Tech Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-accent rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-primary rounded-full animate-pulse delay-300"></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-accent rounded-full animate-pulse delay-700"></div>
      <div className="absolute bottom-20 right-10 w-5 h-5 bg-primary rounded-full animate-pulse delay-1000"></div>
    </section>
  );
};