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
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-primary hover:text-primary-light"
                      onClick={() => window.open('https://www.google.com/maps/dir//1253+Mather+St,+Green+Bay,+WI+54303/@44.5323914,-88.0436436,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8802fa9d4afd9653:0xd78c75851117e54!2m2!1d-88.0410687!2d44.5323876?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D', '_blank')}
                    >
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
                      Our facility has a wheelchair ramp for easy access.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
        
        {/* Interactive Map */}
        <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Card className="overflow-hidden shadow-card border-0 bg-card">
            <div className="p-6 pb-0">
              <h3 className="text-2xl font-serif font-semibold mb-4 text-foreground">Find Us</h3>
              <p className="text-muted-foreground mb-6">1253 Mather Street, Green Bay, WI 54303</p>
            </div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5688.3165809940465!2d-88.0436436232965!3d44.532391395125266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8802fa9d4afd9653%3A0xd78c75851117e54!2s1253%20Mather%20St%2C%20Green%20Bay%2C%20WI%2054303!5e0!3m2!1sen!2sus!4v1758420808865!5m2!1sen!2sus" 
              width="100%" 
              height="400" 
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;