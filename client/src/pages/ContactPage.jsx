import React, { useState } from "react";
import '../styles/ContactPage.css';
import axios from "axios";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";


const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-info">
        <h2>Feel free to contact us</h2>
        <p>Start working with Us. We guarantee that you’ll be able to have any issue resolved within 24 hours.</p>
        <div className="contact-details">
          <div className="contact-item">
            <span className="icon">📍</span>
            <div>
              <h3>Our head office address</h3>
              <p>Address here, 208 Trainer Avenue street, Illinois, UK - 62617.</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="icon">📞</span>
            <div>
              <h3>Call for help</h3>
              <p>+(21) 255 999 8888</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="icon">📧</span>
            <div>
              <h3>Contact with our support</h3>
              <p>coursing@mail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <h2>Write to us</h2>
        <form>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="text" name="subject" placeholder="Subject" />
          <textarea name="message" placeholder="Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
