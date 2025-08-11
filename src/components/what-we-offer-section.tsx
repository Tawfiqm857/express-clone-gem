import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const WhatWeOfferSection = () => {
  const offerings = [
    {
      icon: "💻",
      title: "Tech Training Programs",
      description: "Comprehensive courses in web development, mobile apps, and emerging technologies.",
    },
    {
      icon: "🔧",
      title: "Gadget Services", 
      description: "Professional gadget sales, repairs, and swaps under our JE Gadgets brand.",
    },
    {
      icon: "🎯",
      title: "Career Mentorship",
      description: "Expert guidance and mentorship to help you achieve your career goals.",
    },
    {
      icon: "🚀",
      title: "Innovation Support",
      description: "Resources and support for your innovative tech projects and startups.",
    },
    {
      icon: "🤝",
      title: "Industry Partnerships",
      description: "Connect with our 50+ partner companies for job opportunities.",
    },
    {
      icon: "📱",
      title: "Mobile Solutions",
      description: "Complete mobile device ecosystem including accessories and support.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What We{" "}
            <span className="bg-accent-gradient bg-clip-text text-transparent">
              Offer
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Operating under the umbrella of JE Gadgets, our parent brand, which specializes in gadget sales,
            repairs, and swaps. We offer a wide range of mobile devices, accessories and comprehensive tech education.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((item, index) => (
            <Card 
              key={index} 
              className="shadow-card hover:shadow-tech transition-all duration-300 transform hover:-translate-y-2 border-2 hover:border-primary/20 group"
            >
              <CardHeader className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};