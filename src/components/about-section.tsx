import { Button } from "@/components/ui/button";
import teamBg from "@/assets/team-bg.jpg";

export const AboutSection = () => {
  const stats = [
    { number: "500+", label: "Students Trained" },
    { number: "15+", label: "Expert Instructors" },
    { number: "95%", label: "Job Placement Rate" },
    { number: "50+", label: "Partner Companies" },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              <span className="bg-tech-gradient bg-clip-text text-transparent">
                Excellence
              </span>{" "}
              in Every Detail
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Get the skills, mentorship, and resources you need to thrive in
              today's digital world.
            </p>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">About Us</h3>
              <p className="text-muted-foreground leading-relaxed">
                JE Tech Hub, officially launched February 2024, marking a new phase of growth and innovation
                to deliver top-tier tech solutions while empowering individuals and businesses with
                industry-leading skills.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Having several training programs ongoing and approximately 30 graduates, we believe in
                nurturing creativity, fostering growth, and equipping our community with practical skills to
                thrive in the digital era.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-card rounded-lg shadow-card border-2 border-transparent hover:border-primary/20 transition-all">
                  <div className="text-3xl font-bold bg-tech-gradient bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="tech" size="lg">
                Learn More
              </Button>
              <Button variant="outline" size="lg">
                Our Tech Services
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-tech">
              <img 
                src={teamBg} 
                alt="JE Tech Hub Team" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-tech-gradient/20"></div>
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-tech border">
              <div className="text-2xl font-bold bg-tech-gradient bg-clip-text text-transparent">
                Trusted by 500+ Students
              </div>
              <div className="text-sm text-muted-foreground">
                Join our growing community
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};