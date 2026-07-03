import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Café 98</h1>
        <p className="hero-tagline">Exceptional Hospitality, Crafted Coffee & Savory Moments in Kathmandu</p>
        <div className="hero-buttons">
          <a href="#reservation" className="btn btn-primary">Book A Table</a>
          <a href="#menu" className="btn btn-secondary">Explore Menu</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;