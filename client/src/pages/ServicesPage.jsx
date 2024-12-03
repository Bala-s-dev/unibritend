import React from "react";

const ServicesPage = () => {
  const services = [
    "University Selection",
    "Application Assistance",
    "Visa Guidance",
    "Pre-Departure Support",
    "Post-Arrival Assistance",
  ];

  return (
    <div className="services-page">
      <h2>Our Services</h2>
      <ul>
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesPage;
