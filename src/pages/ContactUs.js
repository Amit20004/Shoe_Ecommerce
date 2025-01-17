// src/ContactUs.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css'
import Navbar from '../components/Navbar';
const ContactUs = () => {
  return (
    <>
        <Navbar/>
 
    <div className="contact-us-container">
      <div className="contact-us-card">
        <h2 className="contact-us-title">Contact Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              className="form-control"
              id="subject"
              placeholder="Enter subject"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              id="message"
              rows="5"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-block contact-us-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default ContactUs;