import React from 'react';
import { FaCoffee } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2><FaCoffee /> Café 98</h2>
          <p>A vibrant place to start your morning and spend your day.</p>
        </div>
        <div className="footer-meta">
          <p>&copy; {new Date().getFullYear()} Café 98, Kathmandu, Nepal. All Rights Reserved.</p>
          <p style={{fontSize: '0.8rem', color: 'var(--cream)', marginTop: '5px'}}>Price Range: Rs 1–500 | Rating: 4.6★</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;