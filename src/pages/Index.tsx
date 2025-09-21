import Navigation from "@/components/Navigation";
import LiveBanner from "@/components/LiveBanner";
import Hero from "@/components/Hero";
import Tithe from "@/components/Tithe";
import About from "@/components/About";
import Services from "@/components/Services";
import Leadership from "@/components/Leadership";
import Ministries from "@/components/Ministries";
import Resources from "@/components/Resources";
import CallToAction from "@/components/CallToAction";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <LiveBanner />
      <Navigation />
      <Hero />
      <Tithe />
      <About />
      <Services />
      <Leadership />
      <Ministries />
      <Resources />
      <CallToAction />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
