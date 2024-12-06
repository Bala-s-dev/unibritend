import React from "react";
import "../styles/QuickLinks.css";

const QuickLinks = () => {
  const links = [
    { label: "Services", url: "/services" },
    { label: "About Us", url: "/about" },
    { label: "Contact Us", url: "/contact" },
    { label: "Apply Now", url: "/apply" },
  ];

  return (
    <section className="quick-links">
      <h2>Quick Links</h2>
      <div className="links-container">
        {links.map((link, index) => (
          <a href={link.url} key={index} className="quick-link">
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
};

export default QuickLinks;
