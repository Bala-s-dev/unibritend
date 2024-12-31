import { useEffect, useState } from "react";
import "./HeroSection.css";


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

  const stats = [
    { title: "500+", description: "Students Assisted" },
    { title: "100%", description: "Visa Success Rate" },
    { title: "200+", description: "Partner Universities" },
    { title: "24/7", description: "Student Support" },
  ];

  return (
    <section className="hero-section">
      <div className="hero-content overlay">
        <h1>{messages[currentMessage]}</h1>
        <p>Discover endless possibilities with Unibritind Ltd.</p>
        <div className="hero-buttons">
          <button className="hero-button primary">Get Started</button>
          <button className="hero-button secondary">Learn More</button>
        </div>
      </div>

      {/* Stats Section inside Hero Section */}
      <div className="stats-section">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <h2>{stat.title}</h2>
            <p>{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
