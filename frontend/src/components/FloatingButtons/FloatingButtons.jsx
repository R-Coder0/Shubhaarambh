import React from "react";
import "./FloatingButtons.css";

const FloatingButtons = () => {
  return (
    <>
      <a href="tel:+917827934789" className="floating-button call-button">
        <i className="fas fa-phone"></i>
      </a>
      <a href="https://wa.me/+917827934789" className="floating-button whatsapp-button" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
      </a>
      <a href="https://www.instagram.com/shubhaarambh2021?igsh=MXdmcTdpbHRrZjV4NQ==" className="floating-button instagram-button" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
      </a>
    </>
  );
};

export default FloatingButtons;
