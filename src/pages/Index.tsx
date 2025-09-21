import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Leadership from "@/components/Leadership";
import Ministries from "@/components/Ministries";
import Events from "@/components/Events";
import Resources from "@/components/Resources";
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
      <Leadership />
      <Ministries />
      <Events />
      <Resources />
      <CallToAction />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
