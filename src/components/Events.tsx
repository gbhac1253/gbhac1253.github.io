import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";


const Events = () => {
  return (
    <section id="events" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-heading font-serif font-semibold mb-6">
            Church Calendar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            View all church events, services, and activities in one convenient calendar.
          </p>
        </div>
        
        {/* Google Calendar Section */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <Card className="p-8 border-0 bg-card shadow-card">
            <div className="w-full overflow-hidden rounded-lg">
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
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Events;