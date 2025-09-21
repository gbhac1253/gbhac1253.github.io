import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Car, Accessibility } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-heading font-serif font-semibold mb-6">
            Service Times & Location
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us for worship and fellowship. Everyone is welcome to be part of our church family.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Service Times */}
          <div className="animate-fade-in-up">
            <Card className="p-8 h-full shadow-card border-0 bg-card">
              <h3 className="text-2xl font-serif font-semibold mb-8 text-foreground">
                Worship Schedule
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-foreground">Sunday Worship Service</h4>
                    <p className="text-muted-foreground mb-2">10:00 AM - 12:00 PM</p>
                    <p className="text-sm text-muted-foreground">
                      Join us for worship, prayer, and biblical teaching in both Hmong and English.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-foreground">Midweek Prayers Night</h4>
                    <p className="text-muted-foreground mb-2">Wednesday 6:00 PM - 8:00 PM</p>
                    <p className="text-sm text-muted-foreground">
                      Time to join together in prayer, seeking God's presence and interceding for our community.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Location & Directions */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Card className="p-8 h-full shadow-card border-0 bg-card">
              <h3 className="text-2xl font-serif font-semibold mb-8 text-foreground">
                Visit Us
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-foreground">Address</h4>
                    <p className="text-muted-foreground mb-2">
                      1253 Mather Street<br />
                      Green Bay, WI 54303
                    </p>
                    <Button variant="link" className="p-0 h-auto text-primary hover:text-primary-light">
                      Get Directions →
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Car className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-foreground">Parking</h4>
                    <p className="text-sm text-muted-foreground">
                      Free parking available in our main lot and additional street parking nearby.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Accessibility className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-foreground">Accessibility</h4>
                    <p className="text-sm text-muted-foreground">
                      Our facility is fully accessible with wheelchair ramps and accessible restrooms.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
        
        {/* Map Placeholder */}
        <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Card className="p-8 shadow-card border-0 bg-card">
            <h3 className="text-2xl font-serif font-semibold mb-6 text-foreground">Find Us</h3>
            <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Interactive map will be embedded here</p>
                <p className="text-sm text-muted-foreground mt-2">1253 Mather Street, Green Bay, WI 54303</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;