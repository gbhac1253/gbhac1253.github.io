import { Card } from "@/components/ui/card";
import { Heart, Users, HandHeart, Lightbulb } from "lucide-react";

const coreValues = [
  {
    icon: Heart,
    title: "Faith",
    description: "Trusting in Jesus Christ as our Lord and Savior, growing in our relationship with God through prayer, worship, and scripture."
  },
  {
    icon: Users,
    title: "Community",
    description: "Building meaningful relationships and supporting one another as we journey together in faith and life."
  },
  {
    icon: HandHeart,
    title: "Service",
    description: "Serving God by serving others, both within our church family and in our broader Green Bay community."
  },
  {
    icon: Lightbulb,
    title: "Hope",
    description: "Sharing the hope of Christ with others and being a beacon of light in our community and beyond."
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-heading font-serif font-semibold mb-6">
            Welcome to Our Church Family
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For 40 years, Green Bay Hmong Alliance Church has been a cornerstone of faith and 
            community in Green Bay, Wisconsin. We are a vibrant congregation dedicated to worshipping 
            God, growing in faith, and serving our neighbors with love and compassion.
          </p>
        </div>
        
        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {coreValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card 
                key={value.title} 
                className="p-6 text-center hover:shadow-float transition-all duration-300 animate-scale-in border-0 bg-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4">
                  <Icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            );
          })}
        </div>
        
        {/* Scripture Verse */}
        <div className="text-center animate-fade-in-up">
          <Card className="p-8 max-w-2xl mx-auto border-0 bg-primary/5 backdrop-blur-sm">
            <blockquote className="text-xl md:text-2xl font-serif italic text-foreground mb-4 leading-relaxed">
              "There is neither Jew nor Gentile, neither slave nor free, nor is there male and female, 
              for you are all one in Christ Jesus."
            </blockquote>
            <cite className="text-muted-foreground font-medium">
              Galatians 3:28
            </cite>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;