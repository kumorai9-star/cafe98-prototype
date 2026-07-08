import React, { useState } from 'react';
import { createReservation } from '../services/api';
import './ReservationForm.css';

const ReservationForm = ({ notify }) => {
  const [formData, setFormData] = useState({
    customerName: '', email: '', phone: '', date: '', time: '', guests: 1, specialRequest: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await createReservation(formData);
      notify('Table Booked! Looking forward to your visit.', 'success');
      setFormData({ customerName: '', email: '', phone: '', date: '', time: '', guests: 2, specialRequest: '' });
    } catch (err) {
      notify(err.response?.data?.message || 'Booking fault occurred.', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="reservation" className="reservation-section">
      <div className="reservation-card">
        <h2 className="section-title" style={{color: 'var(--white)'}}>Book A Table</h2>
        <p className="section-subtitle" style={{color: 'var(--cream)'}}>Secure your exceptional dining slots seamlessly</p>
        
        <form onSubmit={handleSubmit} className="res-form">
          <div className="form-row">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" name="customerName" value={formData.customerName} onChange={handleChange} required placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="email@domain.com" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="98XXXXXXXX" />
            </div>
            <div className="form-group">
              <label>No. of Guests</label>
              <input type="number" name="guests" min="1" max="20" value={formData.guests} onChange={handleChange} required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Date</label>
              <input type="date" name="date" value={formData.date} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Time Slot</label>
              <input type="time" name="time" value={formData.time} onChange={handleChange} required />
            </div>
          </div>

          <div className="form-group">
            <label>Special Requests (Optional)</label>
            <textarea name="specialRequest" rows="3" value={formData.specialRequest} onChange={handleChange} placeholder="Allergies, preferences, structural seatings..."></textarea>
          </div>

          <button type="submit" disabled={submitting} className="submit-btn">
            {submitting ? 'Confirming Data...' : 'Confirm Reservation'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ReservationForm;