import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-heading font-serif font-semibold mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you. Reach out with any questions or to learn more about our church family.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in-up">
            <Card className="p-8 h-full shadow-card border-0 bg-card/70 backdrop-blur-sm">
              <h3 className="text-2xl font-serif font-semibold mb-8 text-foreground">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-foreground">Phone</h4>
                    <p className="text-muted-foreground">(920) 555-0123</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-foreground">Email</h4>
                    <p className="text-muted-foreground">info@gbhmomlliancechurch.org</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-foreground">Address</h4>
                    <p className="text-muted-foreground">
                      1234 Community Lane<br />
                      Green Bay, WI 54303
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Social Media Links */}
              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="text-lg font-semibold mb-6 text-foreground">Follow Us</h4>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Youtube className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Contact Form */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Card className="p-8 h-full shadow-card border-0 bg-card/70 backdrop-blur-sm">
              <h3 className="text-2xl font-serif font-semibold mb-8 text-foreground">
                Send Us a Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-foreground">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Your first name"
                      className="mt-2 border-border focus:ring-primary"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-foreground">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Your last name"
                      className="mt-2 border-border focus:ring-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com"
                    className="mt-2 border-border focus:ring-primary"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-foreground">Phone (Optional)</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="(920) 555-0123"
                    className="mt-2 border-border focus:ring-primary"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us how we can help you or what you'd like to know about our church..."
                    rows={4}
                    className="mt-2 border-border focus:ring-primary resize-none"
                  />
                </div>
                
                <Button type="submit" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;