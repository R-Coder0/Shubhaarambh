import React from 'react';
import './Testimonial.css'; // Adjust path if needed
import review1 from '../../assets/Reviews/review1.webp'
import review2 from '../../assets/Reviews/review2.webp'
import review3 from '../../assets/Reviews/review3.webp'

const Testimonials = () => {
  const testimonialData = [
    {
      image: review1, // Ensure this path is correct
      feedback: "We had the pleasure of working with Shubhaarambh for our wedding. Every detail was handled impeccably, and our day was nothing short of magical. Their attention to detail and creative vision brought our dreams to life. We couldn't have asked for a better team to guide us through our special day.",
      name: "Sunny Kumar",
    },
    {
      image: review2,
      feedback: "Shubhaarambh transformed our annual corporate gathering into a spectacular event that was talked about within our industry for months. Their professionalism and ability to cater to our specific needs while keeping it within budget was truly commendable.",
      name: "Shruti Kashyap",
    },
    {
      image: review3,
      feedback: "Thank you, Shubhaarambh, for making our 25th wedding anniversary so special. From the stunning floral arrangements to the elegant setup, everything was flawless. Your team made sure that our celebration was a reflection of our journey together. We felt truly celebrated!" ,
      name: "Rakesh Sharma",
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="testimonials-page">
      <h1 className="testimonials-title">Client Testimonials</h1>
      <div className="testimonials-grid">
        {testimonialData.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div
              className="testimonial-image"
              style={{ backgroundImage: `url(${testimonial.image})` }}
            ></div>
            <div className="testimonial-content">
              <p className="testimonial-feedback">"{testimonial.feedback}"</p>
              <h3 className="testimonial-name">- {testimonial.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
