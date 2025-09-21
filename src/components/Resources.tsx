import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Users, Shield, Clipboard, ExternalLink } from "lucide-react";

const resourceCategories = [
  {
    icon: FileText,
    title: "Church Documents",
    description: "Official church bylaws, constitution, and governing documents",
    items: [
      { name: "Church Bylaws", url: "#" },
      { name: "Constitution", url: "#" },
      { name: "Statement of Faith", url: "#" },
      { name: "Annual Reports", url: "#" }
    ]
  },
  {
    icon: Shield,
    title: "Policies & Procedures",
    description: "Guidelines and procedures for church operations and conduct",
    items: [
      { name: "Child Protection Policy", url: "#" },
      { name: "Financial Policies", url: "#" },
      { name: "Facility Use Guidelines", url: "#" },
      { name: "Volunteer Handbook", url: "#" }
    ]
  },
  {
    icon: Clipboard,
    title: "Forms & Applications",
    description: "Downloadable forms for various church activities and programs",
    items: [
      { name: "Membership Application", url: "#" },
      { name: "Ministry Volunteer Form", url: "#" },
      { name: "Event Registration", url: "#" },
      { name: "Prayer Request Form", url: "#" }
    ]
  },
  {
    icon: Users,
    title: "Ministry Resources",
    description: "Materials and guides for ministry leaders and participants",
    items: [
      { name: "Leadership Handbook", url: "#" },
      { name: "Small Group Guide", url: "#" },
      { name: "Youth Ministry Resources", url: "#" },
      { name: "Worship Team Guidelines", url: "#" }
    ]
  }
];

const Resources = () => {
  return (
    <section id="resources" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-heading font-serif font-semibold mb-6">
            Church Resources
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access important church documents, policies, forms, and ministry resources.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {resourceCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.title}
                className="p-6 hover:shadow-float transition-all duration-300 animate-fade-in-up border-0 bg-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold mb-2 text-foreground">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {category.items.map((item) => (
                    <Button
                      key={item.name}
                      variant="ghost"
                      className="w-full justify-between p-3 h-auto text-left hover:bg-primary/5"
                      onClick={() => window.open(item.url, '_blank')}
                    >
                      <span className="text-foreground">{item.name}</span>
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    </Button>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
        
        {/* Additional Resources */}
        <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Card className="p-8 border-0 bg-card/50 backdrop-blur-sm">
            <h3 className="text-2xl font-serif font-semibold mb-4 text-foreground">
              Need Additional Resources?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? Contact our church office and we'll be happy to help you access the resources you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg">
                Contact Church Office
              </Button>
              <Button 
                variant="link" 
                size="lg"
                onClick={() => window.open('#', '_blank')}
                className="text-primary hover:text-primary-light"
              >
                Browse All Documents →
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Resources;