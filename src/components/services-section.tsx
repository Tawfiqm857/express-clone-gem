import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            We Provide Services That{" "}
            <span className="bg-tech-gradient bg-clip-text text-transparent">
              You Can Trust!
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dedicated to empowering individuals and businesses with cutting-edge solutions.
          </p>
          <Button variant="tech" size="lg" className="mt-8">
            Our Services
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="shadow-card hover:shadow-tech transition-all duration-300 transform hover:-translate-y-2 border-2 hover:border-primary/20">
            <CardHeader>
              <div className="w-12 h-12 bg-tech-gradient rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">🎯</span>
              </div>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                To connect education and technology with innovative and practical tutoring that
                enhances tech skills and prepares students for the digital future.
              </CardDescription>
              <Button variant="outline" className="mt-4">
                LEARN MORE →
              </Button>
            </CardContent>
          </Card>
          
          <Card className="shadow-card hover:shadow-tech transition-all duration-300 transform hover:-translate-y-2 border-2 hover:border-primary/20">
            <CardHeader>
              <div className="w-12 h-12 bg-accent-gradient rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">🚀</span>
              </div>
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                Shaping the future of tech—raising brilliant minds and crafting skilled
                professionals who lead innovation in the digital landscape.
              </CardDescription>
              <Button variant="outline" className="mt-4">
                LEARN MORE →
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};