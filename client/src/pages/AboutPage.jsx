import React from "react";
import "../styles/AboutPage.css";

const AboutPage = () => {
  return (
    <section className="about-page">
      <div className="head-section">
        <h1>About Unibritend</h1>
      </div>

      <section className="content">
        <div className="section mission">
          <h2>Mission</h2>
          <p>
            To empower students worldwide by providing expert guidance and
            comprehensive support, helping them achieve their academic aspirations
            and unlock opportunities at leading UK universities.
          </p>
        </div>

        <div className="section vision">
          <h2>Vision</h2>
          <p>
            To become a trusted global leader in educational consultancy,
            inspiring and enabling students to succeed in their academic and
            professional journeys.
          </p>
        </div>

        <div className="section values">
          <h2>Core Values</h2>
          <ul>
            <li>
              <strong>Excellence:</strong> We strive for the highest standards
              in every aspect of our work.
            </li>
            <li>
              <strong>Integrity:</strong> We are committed to ethical practices
              and honest advice.
            </li>
            <li>
              <strong>Empathy:</strong> We understand the unique challenges
              students face and tailor our support to meet their needs.
            </li>
            <li>
              <strong>Innovation:</strong> We continuously improve our services
              to offer modern and effective solutions.
            </li>
            <li>
              <strong>Commitment:</strong> We dedicate ourselves to the success
              of every student we assist.
            </li>
          </ul>

          <div className="core-values-icons">
            <div>
              <i className="fas fa-trophy"></i>
              <span>Excellence</span>
            </div>
            <div>
              <i className="fas fa-shield-alt"></i>
              <span>Integrity</span>
            </div>
            <div>
              <i className="fas fa-hand-holding-heart"></i>
              <span>Empathy</span>
            </div>
            <div>
              <i className="fas fa-rocket"></i>
              <span>Innovation</span>
            </div>
            <div>
              <i className="fas fa-heart"></i>
              <span>Commitment</span>
            </div>
          </div>
        </div>

        <div className="section team">
          <h2>Meet Our Team</h2>
          <p>
            At Unibritend Ltd, our mission, vision, and values guide us in
            helping students turn their dreams into reality. We are proud to
            introduce our dedicated team, committed to supporting you every step
            of the way.
          </p>
          {/* Add team member images and descriptions here */}
        </div>

        <div className="section contact">
          <h2>Get in Touch</h2>
          <p>
            Want to learn more? <a href="#contact-form" className="custom-button">Contact Us</a>
          </p>
        </div>
      </section>
    </section>
  );
};

export default AboutPage;
