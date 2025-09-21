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
        
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 shadow-card border-0 bg-card/70 backdrop-blur-sm animate-fade-in-up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-serif font-semibold mb-6 text-foreground">
                  Contact Information
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Phone</h4>
                      <p className="text-muted-foreground">(920) 555-0123</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <p className="text-muted-foreground">hello@gbhac.org</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Address</h4>
                      <p className="text-muted-foreground">
                        1253 Mather Street<br />
                        Green Bay, WI 54303
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Social Media Links */}
                <div className="pt-6 border-t border-border">
                  <h4 className="font-semibold mb-4 text-foreground">Follow Us</h4>
                  <div className="flex space-x-3">
                    <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Instagram className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Youtube className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div>
                <h3 className="text-2xl font-serif font-semibold mb-6 text-foreground">
                  Send Us a Message
                </h3>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-foreground">First Name</Label>
                      <Input 
                        id="firstName" 
                        placeholder="Your first name"
                        className="mt-1 border-border focus:ring-primary"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-foreground">Last Name</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Your last name"
                        className="mt-1 border-border focus:ring-primary"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-foreground">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com"
                      className="mt-1 border-border focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-foreground">Phone (Optional)</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="(920) 555-0123"
                      className="mt-1 border-border focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-foreground">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us how we can help you or what you'd like to know about our church..."
                      rows={3}
                      className="mt-1 border-border focus:ring-primary resize-none"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;