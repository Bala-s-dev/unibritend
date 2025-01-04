import React from "react";
import Apply from "../components/Apply/Apply";
import HeroSection from "../components/HeroSection/HeroSection";
import ServicesOverview from "../components/ServiceOverview/ServicesOverview";
import Hcollege from "../components/Hcollege/Hcollege"
import Testimonials from "../components/Testimonials/Testimonials";
import Chatbot from "../components/Chatbot/Chatbot";



const HomePage = () => {
  return (
    <div>
      <Apply/>
      <HeroSection />
      <ServicesOverview />
      <Hcollege />
      <Testimonials/>
      <Chatbot/>
    </div>
  );
};

export default HomePage;
