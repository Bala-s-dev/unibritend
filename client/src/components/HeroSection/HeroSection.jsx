import { useEffect, useState } from "react";
import { FaUsers, FaUniversity, FaHeadset, FaPassport } from "react-icons/fa"; // Importing icons
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
    { title: "500+", description: "Students Assisted", icon: <FaUsers /> },
    { title: "100%", description: "Visa Success Rate", icon: <FaPassport /> },
    { title: "200+", description: "Partner Universities", icon: <FaUniversity /> },
    { title: "24/7", description: "Student Support", icon: <FaHeadset /> },
  ];

  return (
    <section className="hero-section">
      <div className="hero-content overlay">
        <h1 key={currentMessage} className="hero-text">
          {messages[currentMessage]}
        </h1>
        <p>Discover endless possibilities with Unibritind Ltd.</p>
        <div className="hero-buttons">
          <button className="hero-button primary">Get Started</button>
          <button className="hero-button secondary">Learn More</button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <div className="stat-icon icon">{stat.icon}</div>
            <h2>{stat.title}</h2>
            <p>{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
