import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link for internal routing
import "./Footer.css";

const Footer = () => {
 const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p className="contact-us">
            <FaEnvelope /> email@example.com
          </p>
          <p className="contact-us">
            <FaPhone /> +1 234 567 890
          </p>
        </div>

        <div className="social-media">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/about-us" className="footer-link">About Us</Link>
            </li>
            <li>
              <Link to="/services" className="footer-link">Services</Link>
            </li>
            <li>
              <Link to="/contact" className="footer-link">Contact</Link>
            </li>
            <li>
              <Link to="/faq" className="footer-link">FAQ</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
         <h3 className="terms-condition"> <a href="">Terms & Conditions</a></h3>
          <h4>
            By using this website, you agree to our <Link to="/terms" className="footer-link">Terms and Conditions</Link>.
          </h4>
         <h3>&copy; {currentYear} Unibritend. All rights reserved.</h3>
        </div>
    </footer>
  );
};

export default Footer;
