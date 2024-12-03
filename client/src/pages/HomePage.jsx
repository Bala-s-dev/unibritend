import HeroSection from "../components/HeroSection";
import ServicesOverview from "../components/ServicesOverview";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ServicesOverview />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default HomePage;
