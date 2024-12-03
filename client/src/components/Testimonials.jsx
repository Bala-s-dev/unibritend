import React from "react";
import "../styles/Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      review: "Unibritind made the entire application process seamless and stress-free.",
      rating: 5,
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Jane Smith",
      review: "The visa guidance was excellent. I couldn’t have done it without their support!",
      rating: 4,
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Emily Johnson",
      review: "Great support throughout my journey. Highly recommend them for UK study aspirants!",
      rating: 5,
      photo: "https://randomuser.me/api/portraits/women/45.jpg",
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < rating ? "star filled" : "star"}>
        ★
      </span>
    ));
  };

  return (
    <section className="testimonials-section">
      <h2>What Our Students Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img
              src={testimonial.photo}
              alt={`${testimonial.name}'s profile`}
              className="testimonial-photo"
            />
            <h3>{testimonial.name}</h3>
            <p className="testimonial-review">{testimonial.review}</p>
            <div className="testimonial-rating">{renderStars(testimonial.rating)}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
