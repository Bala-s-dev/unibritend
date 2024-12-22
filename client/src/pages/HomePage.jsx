import React from "react";
import Apply from "../components/Apply";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection"
import ServicesOverview from "../components/ServicesOverview";
import QuickLinks from "../components/QuickLinks";
import CallToAction from "../components/CallToAction";
import Hcollege from "../components/Hcollege"
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";



const HomePage = () => {
  return (
    <div>
      <Apply/>
      <HeroSection />
      <StatsSection />
      <ServicesOverview />
      <CallToAction />
      <Hcollege />
      <Testimonials/>
      <QuickLinks />
      <Footer />
    </div>
  );
};

export default HomePage;
