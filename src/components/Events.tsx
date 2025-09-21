import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";

const events = [
  {
    title: "Community Bible Study",
    date: "Every Tuesday",
    time: "7:00 PM - 8:30 PM",
    location: "Church Fellowship Hall",
    description: "Join us for an in-depth study of Scripture with discussion and prayer. Open to all levels of biblical knowledge.",
    type: "Weekly"
  },
  {
    title: "Youth Night",
    date: "January 15, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "Youth Center",
    description: "Fun activities, games, worship, and meaningful discussions for teens and young adults.",
    type: "Special Event"
  },
  {
    title: "Community Outreach Day",
    date: "January 25, 2025",
    time: "9:00 AM - 3:00 PM",
    location: "Various Locations",
    description: "Join us as we serve our Green Bay community through various service projects and volunteer opportunities.",
    type: "Service"
  }
];

const Events = () => {
  return (
    <section id="events" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-heading font-serif font-semibold mb-6">
            Upcoming Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay connected with our church community through our regular events and special activities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card 
              key={event.title}
              className="p-6 hover:shadow-float transition-all duration-300 animate-fade-in-up border-0 bg-card shadow-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    event.type === 'Weekly' 
                      ? 'bg-primary/10 text-primary' 
                      : event.type === 'Special Event'
                      ? 'bg-accent/50 text-accent-foreground'
                      : 'bg-secondary text-secondary-foreground'
                  }`}>
                    {event.type}
                  </span>
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                </div>
                
                <h3 className="text-xl font-serif font-semibold mb-4 text-foreground">
                  {event.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {event.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2 text-primary" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    {event.location}
                  </div>
                </div>
                
                <Button variant="outline" className="w-full mt-auto">
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Google Calendar Section */}
        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Card className="p-8 border-0 bg-card shadow-card">
            <h3 className="text-2xl font-serif font-semibold mb-6 text-foreground text-center">
              Church Calendar
            </h3>
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
        
        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Button variant="primary" size="lg">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Events;