import React from "react";
import "./Footer.css";  
// Create and style this CSS file as per your design

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://www.instagram.com" >
          <img src="./Assets/instagram.png" alt="Instagram" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="" alt="Facebook" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="twitter-icon.png" alt="Twitter" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="linkedin-icon.png" alt="LinkedIn" />
        </a>
        
      </div>
      <div className="footer-links">
        <a href="/accessibility">Accessibility</a>
        <a href="/data-protection">Data protection</a>
        <a href="/terms-of-use">Terms of use</a>
      </div>
      <div className="footer-bottom">
        <hr />
        <p>
          2024 © Unibritind Ltd. All Rights Reserved
          <br />
          The United Kingdom's international organisation for cultural relations and educational opportunities.
          <br />
         
        </p>
      </div>
    </footer>
  );
};

export default Footer;