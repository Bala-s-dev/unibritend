import React from "react";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection"
import ServicesOverview from "../components/ServicesOverview";

import QuickLinks from "../components/QuickLinks";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";


const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <ServicesOverview />
      <QuickLinks />
      <CallToAction />
      <Footer />
      <Testimonials/>
    </div>
  );
};

export default HomePage;
