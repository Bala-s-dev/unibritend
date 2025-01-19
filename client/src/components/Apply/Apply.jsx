import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Import the default styles
import "./Apply.css";
import { db } from "../../config/firebase"; // Import Firestore
import { addDoc, collection } from "firebase/firestore";

const Apply = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    city: "",
    location: "",
    mobileNumber: "",
  });
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      mobileNumber: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format.";
    if (!formData.course.trim()) newErrors.course = "Course name is required.";
    if (!formData.location.trim())
      newErrors.location = "Location is required.";
    if (!formData.mobileNumber || formData.mobileNumber.length < 10) {
      newErrors.mobileNumber = "Valid phone number is required.";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        await addDoc(collection(db, "applications"), formData); // Save to Firestore
        alert("Form Submitted Successfully!");
        setFormData({
          name: "",
          email: "",
          course: "",
          city: "",
          location: "",
          mobileNumber: "",
        });
        setErrors({});
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Failed to submit form. Please try again later.");
      }
    }
  };

  const handleClose = () => setShowPopup(false);

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
            <span
              className="close-icon"
              onClick={handleClose}
              aria-label="Close form"
            >
              &times;
            </span>
            <h2>Apply Now</h2>
            <form onSubmit={handleSubmit} noValidate>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && <p className="error">{errors.name}</p>}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <p className="error">{errors.email}</p>}
              <input
                type="text"
                name="course"
                placeholder="Course Name"
                value={formData.course}
                onChange={handleChange}
                required
              />
              {errors.course && <p className="error">{errors.course}</p>}
              <input
                type="text"
                name="location"
                placeholder="Enter Location"
                value={formData.location}
                onChange={handleChange}
                required
              />
              {errors.location && <p className="error">{errors.location}</p>}
              <PhoneInput
                className="phone-input"
                country={"in"} // Default country
                value={formData.mobileNumber}
                onChange={handlePhoneChange}
                inputProps={{
                  name: "mobileNumber",
                  required: true,
                }}
                placeholder="Enter Mobile Number"
              />
              {errors.mobileNumber && (
                <p className="error">{errors.mobileNumber}</p>
              )}
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
