import  { useState } from "react";
import "./ServicesOverview.css";

const ServicesOverview = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const services = [
    {
      title: "University Selection",
      icon: "fa-university",
      description:
        "Our experts guide you to choose the best university tailored to your interests and career goals.",
      process: [
        { step: "Analyze academic profile and preferences", icon: "fa-user-graduate" },
        { step: "Shortlist universities", icon: "fa-list" },
        { step: "Discuss recommendations", icon: "fa-comments" },
        { step: "Finalize choices", icon: "fa-check" },
      ],
    },
    {
      title: "Application Assistance",
      icon: "fa-file-alt",
      description:
        "Receive professional help with creating standout applications and compelling personal statements.",
      process: [
        { step: "Review application requirements", icon: "fa-search" },
        { step: "Craft a strong personal statement", icon: "fa-pen" },
        { step: "Fill out and verify forms", icon: "fa-file-signature" },
        { step: "Submit applications before deadlines", icon: "fa-calendar-check" },
      ],
    },
    {
      title: "Visa Guidance",
      icon: "fa-passport",
      description:
        "Simplify the complex visa process with expert guidance to ensure compliance with regulations.",
      process: [
        { step: "Prepare required documents", icon: "fa-folder-open" },
        { step: "Complete visa application forms", icon: "fa-file" },
        { step: "Schedule visa interviews", icon: "fa-calendar" },
        { step: "Receive visa approval", icon: "fa-thumbs-up" },
      ],
    },
    {
      title: "Pre-Departure Support",
      icon: "fa-plane",
      description:
        "Get ready for a smooth transition with support for travel, accommodation, and cultural tips.",
      process: [
        { step: "Book travel arrangements", icon: "fa-ticket-alt" },
        { step: "Find accommodation", icon: "fa-bed" },
        { step: "Provide cultural orientation", icon: "fa-globe" },
        { step: "Ensure a seamless move", icon: "fa-route" },
      ],
    },
  ];

  const toggleAccordion = (index) => {
    // Toggle the active index (if same index clicked, collapse it, otherwise expand new)
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div
              className={`service-header ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="icon-title">
                <i className={`fas ${service.icon}`}></i>
                <h3>{service.title}</h3>
              </div>
              <button className="toggle-button">
                {activeIndex === index ? "-" : "+"}
              </button>
            </div>
            <p>{service.description}</p>
            {activeIndex === index && (
              <ul className="process-list">
                {service.process.map((item, stepIndex) => (
                  <li key={stepIndex}>
                    <i className={`fas ${item.icon} process-icon`}></i>
                    {item.step}
                  </li>
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
