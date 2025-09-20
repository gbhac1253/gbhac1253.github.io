import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, HandHeart, Heart } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/90" />
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="animate-fade-in mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-primary-foreground mb-6">
            Find Your Place With Us
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Whether you're new to faith or have been walking with God for years, 
            there's a place for you in our church family. Join us as we grow together in love and service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="p-8 bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 text-center animate-scale-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/20 mb-6">
              <MapPin className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-serif font-semibold text-primary-foreground mb-4">
              Plan a Visit
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Come and experience our welcoming community. We'd love to meet you!
            </p>
            <Button variant="secondary" className="w-full">
              Plan Your Visit
            </Button>
          </Card>
          
          <Card className="p-8 bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/20 mb-6">
              <HandHeart className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-serif font-semibold text-primary-foreground mb-4">
              Serve With Us
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Discover your gifts and make a difference in our community and beyond.
            </p>
            <Button variant="secondary" className="w-full">
              Get Involved
            </Button>
          </Card>
          
          <Card className="p-8 bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 text-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/20 mb-6">
              <Heart className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-serif font-semibold text-primary-foreground mb-4">
              Give Online
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Support our mission and ministries with a secure online donation.
            </p>
            <Button variant="secondary" className="w-full">
              Give Now
            </Button>
          </Card>
        </div>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Ready to take the next step in your faith journey?
          </p>
          <Button variant="secondary" size="lg" className="min-w-[200px]">
            Contact Us Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;