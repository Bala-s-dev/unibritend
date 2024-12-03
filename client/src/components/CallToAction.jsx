import React from "react";
import "../styles/CallToAction.css";

const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Ready to Begin Your Journey?</h2>
        <p>
          Contact us today to start your application process and take the first
          step toward your future!
        </p>
        <button className="cta-button">Contact Us</button>
      </div>
    </section>
  );
};

export default CallToAction;
