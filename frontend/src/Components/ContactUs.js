import React, { useState } from 'react';
import '../styles/ContactUs.css';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token=localStorage.getItem('jwtToken')
      const response = await axios.post('http://localhost:8080/api/contactus', formData, {
        method:'POST',
          headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${token}`,
          }
      });

      if (response.status === 200) {
        setSuccessMessage('Your message has been sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
        setErrorMessage('');
      }
    } catch (error) {
      setErrorMessage('There was an error sending your message. Please try again.');
      setSuccessMessage('');
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <main>
      <Header />
      <section className="contact-hero-section">
        <h2>Contact Us</h2>
        <p style={{ textAlign: 'center' }}>We're here to help you with any questions or concerns.</p>
      </section>
      <section className="contact-details-section">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Email: <a href="mailto:lifeensure@lifeinsurance.com">lifeensure@lifeinsurance.com</a></p>
          <p>Phone: <a href="tel:+919998979695">+91 9998979695</a></p>
          <p>Address: 123 Insurance St., Coimbatore, India</p>
        </div>
        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <label>
              Message:
              <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
            </label>
            <button type="submit">Submit</button>
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </form>
        </div>
      </section>
      <section className="contact-map-section">
        <h3>Our Location</h3>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509186!2d144.95373531531687!3d-37.81627927975198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5773f9a7d5677e1!2sEnvato!5e0!3m2!1sen!2sus!4v1634563930159!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Our Location"
          ></iframe>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ContactUs;
