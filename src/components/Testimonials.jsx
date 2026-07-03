import React from 'react';
import { FaStar } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    { name: 'Aayush Shrestha', text: 'The chicken sandwich with their signature homemade sauce is unparalleled. The best espresso variant in Kathmandu hands down.', rating: 5 },
    { name: 'Pooja Thapa', text: 'Stunning premium atmosphere, quiet workspace ambiance, and exceptional hospitality. My daily morning pitstop!', rating: 5 },
    { name: 'Niranjan Adhikari', text: 'Exceptional 4.6 star rating well earned. Fresh nachos loaded with premium layers pair beautifully with cold coffee variants.', rating: 5 }
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <h2 className="section-title">Client Appreciations</h2>
      <p className="section-subtitle">Real experiences shared by our visitors</p>
      <div className="testimonials-grid">
        {reviews.map((r, idx) => (
          <div className="review-card" key={idx}>
            <div className="stars">
              {[...Array(r.rating)].map((_, i) => <FaStar key={i} className="star-icon" />)}
            </div>
            <p className="review-text">"{r.text}"</p>
            <h4 className="reviewer-name">- {r.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;