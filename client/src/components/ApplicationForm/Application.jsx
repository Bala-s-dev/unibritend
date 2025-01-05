import React from 'react';
import './Application.css';

const Form = () => {
  return (
    <div className="form-container">
      <div className="info-section">
        <h1>𝐔𝐍𝐈𝐁𝐑𝐈𝐓𝐄𝐍𝐃 </h1>
        <h2>Build Your Dream Education Journey with Us</h2>
        <p>We give the best education opportunities in the UK to Indian students</p>
        <ul>
          <li>International education hub for more than 100 years</li>
          <li>Easy visa rules for international students</li>
          <li>Diverse range of courses</li>
          <li>No permission required from the job center for international students</li>
          <li>No IELTS Required</li>
        </ul>
      </div>
      <br />

      <div className="form-section">
        <h2>Book a Free Counseling</h2>
        <form>
          <input type="text" placeholder="Your Name*" required className="animated-input" />
          <input type="tel" placeholder="Phone*" required className="animated-input" />
          <input type="text" placeholder="Course*" required className="animated-input" />
          <input type="text" placeholder="Home Town*" required className="animated-input" />
          <button type="submit" className="submit-button">REGISTER NOW</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
