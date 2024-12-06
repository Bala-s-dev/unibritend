import React from "react";
import "../styles/StatsSection.css";

const StatsSection = () => {
  const stats = [
    { title: "500+", description: "Students Assisted" },
    { title: "100%", description: "Visa Success Rate" },
    { title: "200+", description: "Partner Universities" },
    { title: "24/7", description: "Student Support" },
  ];

  return (
    <section className="stats-section">
      {stats.map((stat, index) => (
        <div className="stat-card" key={index}>
          <h2>{stat.title}</h2>
          <p>{stat.description}</p>
        </div>
      ))}
    </section>
  );
};

export default StatsSection;
