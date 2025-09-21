import { Card } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

const pastors = [
  {
    name: "Pastor [Name]",
    title: "Senior Pastor",
    description: "Leading our congregation with wisdom and compassion, Pastor [Name] has been serving our community for [X] years, dedicated to teaching God's word and shepherding our church family.",
    email: "pastor@gbhac.org",
    phone: "(920) XXX-XXXX",
    image: "/placeholder.svg" // Replace with actual pastor photo
  },
  {
    name: "Pastor [Name]",
    title: "Associate Pastor",
    description: "Supporting our ministry with a heart for outreach and discipleship, Pastor [Name] focuses on connecting with our community and developing strong spiritual foundations.",
    email: "associate@gbhac.org", 
    phone: "(920) XXX-XXXX",
    image: "/placeholder.svg" // Replace with actual pastor photo
  }
];

const Leadership = () => {
  return (
    <section id="leadership" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-heading font-serif font-semibold mb-6">
            Our Pastoral Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the dedicated leaders who shepherd our congregation and guide us in our spiritual journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {pastors.map((pastor, index) => (
            <Card 
              key={pastor.name}
              className="p-8 hover:shadow-float transition-all duration-300 animate-fade-in-up border-0 bg-card shadow-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
                  <img 
                    src={pastor.image} 
                    alt={pastor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-2 text-foreground">
                  {pastor.name}
                </h3>
                <p className="text-primary font-medium mb-4">
                  {pastor.title}
                </p>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6 text-center">
                {pastor.description}
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  <a 
                    href={`mailto:${pastor.email}`}
                    className="hover:text-primary transition-colors"
                  >
                    {pastor.email}
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  <a 
                    href={`tel:${pastor.phone}`}
                    className="hover:text-primary transition-colors"
                  >
                    {pastor.phone}
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Additional Leadership Note */}
        <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Card className="p-6 border-0 bg-card/50 backdrop-blur-sm max-w-2xl mx-auto">
            <p className="text-muted-foreground">
              Our pastoral team is supported by dedicated deacons, ministry leaders, and volunteers who 
              help make our church a place of worship, growth, and community service.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Leadership;