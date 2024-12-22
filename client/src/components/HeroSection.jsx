import React, { useEffect, useState } from "react";
import "../styles/HeroSection.css";
import videosrc from "../components/Assets/video.mp4"


const HeroSection = () => {
  const messages = [
    "Your Trusted Partner for UK Studies!",
    "Achieve Your Dreams with Expert Guidance.",
    "Start Your Academic Journey Today!",
  ];

  

  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prevMessage) => (prevMessage + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="video-background ">
      <video autoPlay muted loop id="background-video">
        <source src={videosrc} type="video/mp4" />
      </video>
    <section className="hero-section " >
      
      <div className="hero-content overlay overlay" >
        <h1>{messages[currentMessage]}</h1>
        <p>Discover endless possibilities with Unibritind Ltd.</p>
        <div className="hero-buttons">
          <button className="hero-button primary">Get Started</button>
          <button className="hero-button secondary">Learn More</button>
          
        </div>
      </div>
    </section>
    </div>
  );
};

export default HeroSection;
