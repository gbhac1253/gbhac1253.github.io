import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Ministries", href: "#ministries" },
    { name: "Events", href: "#events" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Church Info */}
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-6">
              Green Bay Hmong Alliance Church
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              A welcoming community following Jesus, seeking to love God and serve our neighbors in Green Bay, Wisconsin.
            </p>
            <div className="flex items-center text-primary-foreground/80">
              <span>Made with</span>
              <Heart className="h-4 w-4 mx-2 text-red-400" />
              <span>for our community</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="ghost"
                  className="justify-start p-2 h-auto text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <a href={link.href}>
                    {link.name}
                  </a>
                </Button>
              ))}
            </div>
          </div>
          
          {/* Contact Summary */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Visit Us</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <p>1253 Mather Street<br />Green Bay, WI 54303</p>
              <p>(920) 555-0123</p>
              <p>info@gbhmongalliancechurch.org</p>
              <div className="pt-4">
                <p className="font-medium text-primary-foreground">Sunday Worship</p>
                <p>10:00 AM - 12:00 PM</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Border */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/70 text-sm">
              © {currentYear} Green Bay Hmong Alliance Church. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-primary-foreground/70">
              <Button variant="ghost" className="p-0 h-auto text-primary-foreground/70 hover:text-primary-foreground">
                Privacy Policy
              </Button>
              <Button variant="ghost" className="p-0 h-auto text-primary-foreground/70 hover:text-primary-foreground">
                Terms of Service
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;