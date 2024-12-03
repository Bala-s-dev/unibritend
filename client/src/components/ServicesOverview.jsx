import React, { useState } from "react";
import "../styles/ServicesOverview.css";

const ServicesOverview = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const services = [
    {
      title: "University Selection",
      description:
        "Our experts guide you to choose the best university tailored to your interests and career goals.",
      process: [
        "Analyze academic profile and preferences",
        "Shortlist universities",
        "Discuss recommendations",
        "Finalize choices",
      ],
    },
    {
      title: "Application Assistance",
      description:
        "Receive professional help with creating standout applications and compelling personal statements.",
      process: [
        "Review application requirements",
        "Craft a strong personal statement",
        "Fill out and verify forms",
        "Submit applications before deadlines",
      ],
    },
    {
      title: "Visa Guidance",
      description:
        "Simplify the complex visa process with expert guidance to ensure compliance with regulations.",
      process: [
        "Prepare required documents",
        "Complete visa application forms",
        "Schedule visa interviews",
        "Receive visa approval",
      ],
    },
    {
      title: "Pre-Departure Support",
      description:
        "Get ready for a smooth transition with support for travel, accommodation, and cultural tips.",
      process: [
        "Book travel arrangements",
        "Find accommodation",
        "Provide cultural orientation",
        "Ensure a seamless move",
      ],
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-header" onClick={() => toggleAccordion(index)}>
              <h3>{service.title}</h3>
              <button className="toggle-button">
                {activeIndex === index ? "-" : "+"}
              </button>
            </div>
            <p>{service.description}</p>
            {activeIndex === index && (
              <ul className="process-list">
                {service.process.map((step, stepIndex) => (
                  <li key={stepIndex}>{step}</li>
                ))}
              </ul>
            )}
            <button className="apply-button">Apply Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesOverview;
