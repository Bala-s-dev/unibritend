import React, { useState } from 'react';
import '../styles/Testimonials.css';

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([
    {
      name: 'John Doe',
      profileImg: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 5,
      message: 'Great service! I highly recommend this platform for its excellent customer support and ease of use.',
    },
    {
      name: 'Jane Smith',
      profileImg: 'https://randomuser.me/api/portraits/women/32.jpg',
      rating: 4,
      message: 'The platform is good, but there is room for improvement in the UI design.',
    },
    {
      name: 'Mark Wilson',
      profileImg: 'https://randomuser.me/api/portraits/men/48.jpg',
      rating: 5,
      message: 'Absolutely amazing! The experience was seamless, and I loved the interface!',
    },
  ]);

  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    profileImg: '',
    rating: 0,
    message: '',
  });

  const [isAdding, setIsAdding] = useState(false); // Toggle between adding and displaying testimonials

  const handleAddTestimonial = () => {
    setIsAdding(true); // Show testimonial form
  };

  const handleSaveTestimonial = () => {
    if (newTestimonial.name && newTestimonial.rating && newTestimonial.message && newTestimonial.profileImg) {
      setTestimonials([...testimonials, newTestimonial]);
      setIsAdding(false); // Hide testimonial form after saving
      setNewTestimonial({ name: '', profileImg: '', rating: 0, message: '' }); // Reset form
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewTestimonial({ ...newTestimonial, profileImg: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="testimonial-container">
      <h2 className="testimonial-header">Customer Testimonials</h2>

      <div className="testimonial-carousel">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-item" key={index}>
            <div className="testimonial-profile">
              <img src={testimonial.profileImg} alt={testimonial.name} className="profile-icon" />
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < testimonial.rating ? 'star filled' : 'star'}>★</span>
                ))}
              </div>
            </div>
            <p className="testimonial-message">"{testimonial.message}"</p>
          </div>
        ))}
      </div>

      {!isAdding ? (
        <button className="add-button" onClick={handleAddTestimonial}>Add Testimonial</button>
      ) : (
        <div className="add-testimonial">
          <h3>Add Your Testimonial</h3>

          <input
            type="text"
            placeholder="Your name"
            value={newTestimonial.name}
            onChange={(e) => setNewTestimonial({ ...newTestimonial, name: e.target.value })}
            className="input-field"
          />

          <textarea
            value={newTestimonial.message}
            onChange={(e) => setNewTestimonial({ ...newTestimonial, message: e.target.value })}
            placeholder="Write your message..."
            rows="4"
            className="input-field"
          />

          <div className="rating-section">
            <label>Rating: </label>
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={i < newTestimonial.rating ? 'star filled' : 'star'}
                onClick={() => setNewTestimonial({ ...newTestimonial, rating: i + 1 })}
              >
                ★
              </span>
            ))}
          </div>

          <div className="upload-section">
            <label>Upload Profile Image:</label>
            <input
              type="file"
              onChange={handleProfileImageChange}
              accept="image/*"
            />
            {newTestimonial.profileImg && (
              <img src={newTestimonial.profileImg} alt="Profile Preview" className="profile-preview" />
            )}
          </div>

          <button className="save-button" onClick={handleSaveTestimonial}>Save Testimonial</button>
        </div>
      )}
    </div>
  );
};

export default Testimonial;
