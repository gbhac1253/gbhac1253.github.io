import { Card } from "@/components/ui/card";
import { Heart, Users, HandHeart, Lightbulb } from "lucide-react";

const coreValues = [
  {
    icon: Users,
    title: "Great Commission",
    description: "Making disciples of all nations, baptizing them and teaching them to observe all that Jesus commanded us."
  },
  {
    icon: Heart,
    title: "Greatest Commandment",
    description: "Loving God with all our heart, soul, mind, and strength, and loving our neighbors as ourselves."
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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