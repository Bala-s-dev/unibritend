import { useState, useEffect } from 'react';
import './Apply.css';


const Apply = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    city: '',
    mobileNumber: '',
    location: '',
    countryCode: '',
  });
  const [showPopup, setShowPopup] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
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
    console.log('Submitted Data:', formData);
    alert('Form Submitted Successfully!');
    setFormData({
      name: '',
      email: '',
      course: '',
      city: '',
      mobileNumber: '',
      location: '',
      countryCode: '',
    });
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
            <span className="close-icon" onClick={handleClose}>
              &times;
            </span>
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

              {/* Replace Dropdown with Manual Input for Location */}
              <input
                type="text"
                name="location"
                placeholder="Enter Location"
                value={formData.location}
                onChange={handleChange}
                required
              />
              <input
                type="phone"
                name="mobileNumber"
                placeholder="+44 Mobile Number"
                value={formData.mobileNumber}
                onChange={handleChange}
                style={{WebkitBoxDecorationBreak:'none'}}
                required
              />
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
