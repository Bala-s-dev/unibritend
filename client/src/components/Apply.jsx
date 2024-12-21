import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import '../styles/Apply.css';

const countryOptions = [
  { value: 'US', label: 'United States (+1)', code: '+1' },
  { value: 'IN', label: 'India (+91)', code: '+91' },
  { value: 'GB', label: 'United Kingdom (+44)', code: '+44' },
  { value: 'CA', label: 'Canada (+1)', code: '+1' },
  { value: 'AU', label: 'Australia (+61)', code: '+61' },
  // Add more countries as needed
];

const Apply = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    city: '',
    mobileNumber: '',
    location: '',
    countryCode: ''
  });
  const [showPopup, setShowPopup] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSelectChange = (selectedOption, action) => {
    setFormData({
      ...formData,
      [action.name]: selectedOption.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showPopup && (
        <div className="popup-overlay">
          <div className="apply-form-container">
            <span className="close-icon" onClick={handleClose}>&times;</span>
            <h2>Apply Now</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="course"
                placeholder="Course Name"
                value={formData.course}
                onChange={handleChange}
                required
              />

              <Select
                name="location"
                options={countryOptions}
                placeholder="Select Location"
                onChange={(selectedOption) => handleSelectChange(selectedOption, { name: 'location' })}
                isSearchable
              />

              <div className="city-mobile-container">
                <Select
                  name="countryCode"
                  options={countryOptions.map(({ code, label }) => ({ value: code, label }))}
                  placeholder="Country Code"
                  onChange={(selectedOption) => handleSelectChange(selectedOption, { name: 'countryCode' })}
                  isSearchable
                />
                <input
                  type="text"
                  name="mobileNumber"
                  placeholder="Mobile Number"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit">APPLY NOW</button>
            </form>
            <p>*All Fields are Mandatory</p>
          </div>
        </div>
      )}  
    </>
  );
};

export default Apply;
