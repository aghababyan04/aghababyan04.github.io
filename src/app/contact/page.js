'use client';
import './globals.css'
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Branding Identity',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Այստեղ ապագայում կավելացնես նամակն ուղարկելու ֆունկցիոնալը
    alert(`Thank you, ${formData.name}. Your inquiry has been received.`);
  };

  return (
    <main className="contact-main">
      {/* Hero Header */}
      <section className="contact-hero">
        <span className="contact-sub-title">START A CONVERSATION</span>
        <h1 className="contact-main-title">Let’s Create Something Memorable</h1>
        <p className="contact-hero-description">
          Whether you have a fully formed vision or just the seed of an idea, we are here 
          to bring it to life. Fill out the form below, and we will get back to you within 48 hours.
        </p>
      </section>

      <hr className="contact-separator" />

      {/* Contact Content Grid */}
      <section className="contact-body-section">
        <div className="contact-grid">
          
          {/* Ձախ կողմ՝ Ինֆորմացիա */}
          <div className="contact-info-block">
            <div className="info-group">
              <span className="info-label">GENERAL INQUIRIES</span>
              <a href="mailto:hello@noestudio.com" className="info-link">hello@noestudio.com</a>
            </div>

            <div className="info-group">
              <span className="info-label">STUDIO HOURS</span>
              <p className="info-text">Mon — Fri: 10:00 AM — 6:00 PM (GMT+4)</p>
              <p className="info-text">Sat — Sun: Closed</p>
            </div>

            <div className="info-group">
              <span className="info-label">FOLLOW US</span>
              <div className="contact-socials">
                <a href="#" className="social-link">Instagram</a>
                <a href="#" className="social-link">Pinterest</a>
                <a href="#" className="social-link">LinkedIn</a>
              </div>
            </div>
          </div>

          {/* Աջ կողմ՝ Ֆորմա */}
          <div className="contact-form-block">
            <form onSubmit={handleSubmit} className="contact-form">
              
              <div className="form-field">
                <label htmlFor="name">YOUR NAME *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  value={formData.name} 
                  onChange={handleChange} 
                  placeholder="John Doe"
                />
              </div>

              <div className="form-field">
                <label htmlFor="email">EMAIL ADDRESS *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-field">
                <label htmlFor="service">WHAT SERVICE ARE YOU INTERESTED IN?</label>
                <select 
                  id="service" 
                  name="service" 
                  value={formData.service} 
                  onChange={handleChange}
                >
                  <option value="Branding Identity">Branding Identity</option>
                  <option value="Web Design (UI/UX)">Web Design (UI/UX)</option>
                  <option value="Full Digital Experience">Full Digital Experience</option>
                  <option value="Other Project">Other Project</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="message">ABOUT YOUR PROJECT *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  rows="5" 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="Tell us about your brand vision, goals, and timeline..."
                ></textarea>
              </div>

              <button type="submit" className="contact-submit-btn">SEND INQUIRY</button>
            </form>
          </div>

        </div>
      </section>
    </main>
  );
}