import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Ministries from "@/components/Ministries";
import Events from "@/components/Events";
import CallToAction from "@/components/CallToAction";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Ministries />
      <Events />
      <CallToAction />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
