import { Card } from "@/components/ui/card";
import { Users, Baby, Zap, Heart, Globe, Coffee } from "lucide-react";

const ministries = [
  {
    icon: Zap,
    title: "Youth & Young Adults",
    description: "Dynamic programs for teens and young adults, focusing on faith development, leadership training, and community service.",
    ageGroup: "Ages 13-30"
  },
  {
    icon: Baby,
    title: "Children's Ministry",
    description: "Fun, engaging programs that help children learn about God's love through stories, songs, and activities.",
    ageGroup: "Ages 2-12"
  },
  {
    icon: Heart,
    title: "Men's & Women's Ministry",
    description: "Gender-specific groups that provide fellowship, study, and support for personal and spiritual growth.",
    ageGroup: "Adults"
  },
  {
    icon: Coffee,
    title: "Small Groups",
    description: "Intimate fellowship groups that meet throughout the week for Bible study, prayer, and community building.",
    ageGroup: "All Ages"
  },
  {
    icon: Globe,
    title: "Missions & Outreach",
    description: "Local and global mission work, community service projects, and partnerships with other organizations.",
    ageGroup: "All Ages"
  },
  {
    icon: Users,
    title: "Fellowship Events",
    description: "Community gatherings, cultural celebrations, and special events that bring our church family together.",
    ageGroup: "All Ages"
  }
];

const Ministries = () => {
  return (
    <section id="ministries" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-heading font-serif font-semibold mb-6">
            Our Ministries
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer a variety of ministries designed to help you grow in faith, build relationships, 
            and serve our community. There's a place for everyone in our church family.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry, index) => {
            const Icon = ministry.icon;
            return (
              <Card 
                key={ministry.title}
                className="p-6 hover:shadow-float transition-all duration-500 hover:scale-105 animate-scale-in border-0 bg-card/70 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-6">
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">
                    {ministry.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4 flex-grow">
                    {ministry.description}
                  </p>
                  
                  <div className="pt-4 border-t border-border">
                    <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                      {ministry.ageGroup}
                    </span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Ministries;