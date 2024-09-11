import React from "react";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="top-bar-left">
          <span>
          Rohini, Delhi-110085
          </span>
        </div>
        <div className="top-bar-right">
          <i className="fas fa-mobile-alt contact-icon"></i>
          <a href="tel:+917827934789" className="contact-link">
            +91 7827-934-789
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
