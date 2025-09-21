import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-worship.jpg";

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background pt-32 md:pt-36 lg:pt-20 pb-20">
      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground mb-8 leading-tight">
            Welcome
          </h1>
          
          <Button 
            variant="primary" 
            size="lg" 
            onClick={scrollToServices}
            className="group min-w-[200px]"
          >
            Join Us This Sunday
            <ArrowDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
          </Button>
        </div>
        
        {/* Calendar */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="bg-card rounded-lg shadow-card overflow-hidden">
            <iframe 
              src="https://calendar.google.com/calendar/embed?src=gbhac1253%40gmail.com&ctz=America%2FChicago" 
              style={{ border: 0 }} 
              width="100%" 
              height="600" 
              frameBorder="0" 
              scrolling="no"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;