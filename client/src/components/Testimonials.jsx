import React from "react";
import "../styles/Testimonials.css";

const TestimonialsPreview = () => {
  const testimonials = [
    {
      name: "John Doe",
      review: "Unibritind made my application process seamless!",
    },
    {
      name: "Jane Smith",
      review: "Visa assistance was top-notch!",
    },
  ];

  return (
    <section className="testimonials-preview">
      <h2>What Students Say</h2>
      <div className="testimonial-cards">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <p>"{testimonial.review}"</p>
            <h4>- {testimonial.name}</h4>
          </div>
        ))}
      </div>
      <a href="/testimonials" className="read-more-link">
        Read More Testimonials
      </a>
    </section>
  );
};

export default TestimonialsPreview;
