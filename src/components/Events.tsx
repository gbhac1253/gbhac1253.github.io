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
            <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Google Calendar will be embedded here</p>
                <p className="text-sm text-muted-foreground mt-2">
                  View all church events, services, and activities in one place
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Events;