import React from "react";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Your Gateway to Academic Success in the UK!</h1>
        <p>
          Unibritind Ltd provides expert guidance for students aspiring to study
          in the UK. Let us help you achieve your academic dreams.
        </p>
        <button className="cta-button">Get Started</button>
      </div>
    </section>
  );
};

export default HeroSection;
