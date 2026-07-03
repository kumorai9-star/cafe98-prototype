import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-grid">
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800" alt="Barista working at Café 98" />
        </div>
        <div className="about-content">
          <span className="about-tag">Our Story</span>
          <h2 className="about-heading">Vibrant Mornings & Soothing Days</h2>
          <p className="about-text">
            Nestled in the energetic lanes of Kathmandu, Café 98 is a premium sanctuary built for true coffee lovers and culinary enthusiasts. We unite world-class roasting techniques with unparalleled Nepalese hospitality.
          </p>
          <div className="about-features">
            <div className="feat-box">
              <h3>Premium Beans</h3>
              <p>Locally sourced and globally selected beans roasted to deep flavor profiles.</p>
            </div>
            <div className="feat-box">
              <h3>Homemade Sauces</h3>
              <p>Our signatures sandwiches feature culinary secrets made fresh daily from scratch.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;