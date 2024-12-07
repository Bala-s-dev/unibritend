import React, { useState } from "react";
import "../styles/Testimonials.css";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([
    {
      name: "Bala",
      review: "Unibritind transformed my academic journey. Highly recommended!",
      rating: 5,
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Leo",
      review: "Excellent support throughout the visa process. Thank you!",
      rating: 4,
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Das",
      review: "Excellent support throughout the visa process. Thank you!",
      rating: 4,
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  ]);

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    review: "",
    rating: 0,
    photo: "https://randomuser.me/api/portraits/lego/2.jpg", // Default photo for new testimonials
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTestimonial({ ...newTestimonial, [name]: value });
  };

  const handleRatingChange = (rating) => {
    setNewTestimonial({ ...newTestimonial, rating });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTestimonials([...testimonials, newTestimonial]);
    setNewTestimonial({ name: "", review: "", rating: 0, photo: "" });
    setIsFormVisible(false);
  };

  return (
    <section className="testimonials-section">
      <h2>What Our Students Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="card-front">
              <img
                src={testimonial.photo}
                alt={`${testimonial.name}'s profile`}
                className="testimonial-photo"
              />
              <h3>{testimonial.name}</h3>
              <div className="testimonial-rating">
                {Array.from({ length: 5 }, (_, starIndex) => (
                  <span
                    key={starIndex}
                    className={starIndex < testimonial.rating ? "star filled" : "star"}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
            <div className="card-back">
              <p className="testimonial-review">"{testimonial.review}"</p>
            </div>
          </div>
        ))}
      </div>

      {/* Add Testimonial Button */}
      <button className="add-testimonial-button" onClick={() => setIsFormVisible(true)}>
        Add Testimonial
      </button>

      {/* Add Testimonial Form */}
      {isFormVisible && (
        <div className="add-testimonial-form">
          <h3>Add Your Testimonial</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={newTestimonial.name}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="review"
              placeholder="Your Review"
              value={newTestimonial.review}
              onChange={handleInputChange}
              required
            ></textarea>
            <div className="rating-input">
              <label>Rating:</label>
              {Array.from({ length: 5 }, (_, index) => (
                <span
                  key={index}
                  className={index < newTestimonial.rating ? "star filled" : "star"}
                  onClick={() => handleRatingChange(index + 1)}
                >
                  ★
                </span>
              ))}
            </div>
            <button type="submit">Submit</button>
            <button type="button" className="cancel-button" onClick={() => setIsFormVisible(false)}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </section>
  );
};

export default Testimonials;