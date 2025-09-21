import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Give", href: "#tithe" },
    { name: "Leadership", href: "#leadership" },
    { name: "Ministries", href: "#ministries" },
    { name: "Resources", href: "#resources" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-soft' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Button
              variant="ghost"
              className="text-xl font-serif font-semibold text-foreground hover:bg-transparent p-0"
              onClick={() => handleNavClick("#")}
            >
              Green Bay Hmong Alliance Church
            </Button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  className="text-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.name}
                </Button>
              ))}
            </div>
          </div>

        </div>

        {/* Tablet Navigation - Horizontal Scrollable Tabs */}
        <div className="hidden md:flex lg:hidden overflow-x-auto scrollbar-hide mt-4 pb-2">
          <div className="flex space-x-2 min-w-max px-2">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                size="sm"
                className="text-foreground hover:text-primary hover:bg-primary/10 whitespace-nowrap"
                onClick={() => handleNavClick(item.href)}
              >
                {item.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Mobile Navigation - Button Grid */}
        <div className="md:hidden mt-4 pb-2">
          <div className="grid grid-cols-2 gap-2 px-2">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                size="sm"
                className="text-foreground hover:text-primary hover:bg-primary/10 text-sm p-3 h-auto flex flex-col justify-center"
                onClick={() => handleNavClick(item.href)}
              >
                <span className="w-full text-center leading-tight">{item.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;