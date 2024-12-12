import React, { useState } from "react";
import axios from "axios";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "../styles/Contactpage..css"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      alert("Message sent successfully!");
    } catch (error) {
      alert("Error sending message.");
    }
  };

  return (
    <section className="cont-main">
        
         

      {/* Contact Information */}
      <div className="contact-info">
        <h2>Get in Touch</h2>
       
        <p> <FaPhoneAlt /> Phone:  +441234567890</p>
        <p> <FaEnvelope /> Email: info@masterstudiesuk.com  </p>
      </div>



    <div className="contact-page">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <input name="phone" placeholder="Phone" onChange={handleChange} required />
        <textarea name="message" placeholder="Message" onChange={handleChange} required />
        <button type="submit">Send Message</button>
      </form>
    </div>
    
    </section>
  );
};

export default ContactPage;
