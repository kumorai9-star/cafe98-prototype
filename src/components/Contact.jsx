import React, { useState } from 'react';
import { submitContactForm } from '../services/api';
import { FaMapMarkerAlt, FaPhoneAlt, FaRegClock, FaInstagram } from 'react-icons/fa';
import './Contact.css';

const Contact = ({ notify }) => {
  const [fields, setFields] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitContactForm(fields);
      notify('Message processed! We will get back to you shortly.', 'success');
      setFields({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      notify(err.response?.data?.message || 'Error executing action.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Connect with us</h2>
      <p className="section-subtitle">Drop by or reach out instantly online</p>

      <div className="contact-grid">
        <div className="contact-info">
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h3>Our Location</h3>
              <p>P84H+6VH, Kathmandu 44600, Nepal</p>
            </div>
          </div>
          <div className="info-item">
            <FaPhoneAlt className="info-icon" />
            <div>
              <h3>Hotlines</h3>
              <p>9860805359</p>
            </div>
          </div>
          <div className="info-item">
            <FaRegClock className="info-icon" />
            <div>
              <h3>Opening Windows</h3>
              <p>Monday - Sunday (Until 7:00 PM)</p>
              <p style={{fontSize: '0.85rem', color: 'var(--text-muted)'}}>Takeout valid until 6:00 PM</p>
            </div>
          </div>
          <div className="info-item">
            <FaInstagram className="info-icon" />
            <div>
              <h3>Social Pulse</h3>
              <p><a href="https://instagram.com" target="_blank" rel="noreferrer" className="insta-anchor">@Cafe98_Kathmandu</a></p>
            </div>
          </div>
        </div>

        <form onSubmit={handleContactSubmit} className="contact-form">
          <div className="input-box">
            <input type="text" name="name" value={fields.name} onChange={handleInputChange} required placeholder="Your Name" />
          </div>
          <div className="input-box">
            <input type="email" name="email" value={fields.email} onChange={handleInputChange} required placeholder="Your Email" />
          </div>
          <div className="input-box">
            <input type="text" name="subject" value={fields.subject} onChange={handleInputChange} required placeholder="Subject Matter" />
          </div>
          <div className="input-box">
            <textarea name="message" rows="5" value={fields.message} onChange={handleInputChange} required placeholder="Your Message..."></textarea>
          </div>
          <button type="submit" className="contact-btn" disabled={loading}>
            {loading ? 'Sending message...' : 'Send Message'}
          </button>
        </form>
      </div>

      <div className="map-wrapper">
        <iframe 
          title="Cafe 98 Kathmandu Map View Location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3532.5359325605!2d85.3302503!3d27.7000213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1710000000000!5m2!1sen!2snp" 
          width="100%" 
          height="400" 
          style={{ border: 0, borderRadius: '16px' }} 
          allowFullScreen="" 
          loading="lazy">
        </iframe>
      </div>
    </section>
  );
};

export default Contact;