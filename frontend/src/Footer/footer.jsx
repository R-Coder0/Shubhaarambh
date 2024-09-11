// Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Import social media icons as needed
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <h3>Shubhaarambh</h3>
              <p>Your dream events, realized. From luxurious weddings to corporate events, Shubhaarambh is your dedicated partner in crafting unforgettable experiences that are as unique as your vision.</p>
            </div>
            <div className="footer-section">
              <h3>Services</h3>
              <ul>
                <li><Link to="/services">Property Rental</Link></li>
                <li><Link to="/services">Property Sale</Link></li>
                <li><Link to="/services">Property Management</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Navigation</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Contact</h3>
              <p><a href="mailto:info@shubhaarambhevent.in">info@shubhaarambhevent.in</a></p>
              <p><a href="tel:+917827934789">+91 7827-934-789</a></p>
              <p>Rohini, Delhi-110085</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="social-icons">
            <a href="/" className='FB'><FaFacebook /></a>
            <a href="/" className='Li'><FaLinkedin /></a>
            <a href="/" className='IG'><FaInstagram /></a>
          </div>
          <p>&copy; {new Date().getFullYear()} Shubhaarambh | All rights reserved. Powered by <strong>BUSINESSKARO.COM</strong></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
