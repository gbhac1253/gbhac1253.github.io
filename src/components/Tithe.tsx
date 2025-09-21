import { Button } from "@/components/ui/button";
import { Heart, DollarSign } from "lucide-react";

const Tithe = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-primary/10 rounded-full">
              <Heart className="h-8 w-8 text-primary" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
            Tithing & Offering
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Support our ministry and mission through your generous giving. Your contributions help us serve our community and spread God's love.
          </p>
          
          <Button 
            variant="primary" 
            size="lg"
            className="group min-w-[200px]"
            onClick={() => window.open('https://tithe.ly', '_blank')}
          >
            <DollarSign className="mr-2 h-5 w-5" />
            Give Online
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Tithe;