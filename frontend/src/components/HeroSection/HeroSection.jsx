import React from 'react';
import './HeroSection.css';


const HeroSection = () => {

  return (
    <div className="heroSection">
      <video className="heroVideo" autoPlay loop muted>
        <source src={require('../../assets/video/Hero.mp4')} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <div className="heroOverlay"></div>
      <div className="heroContent">
        <h1 className="hero-title">{currentText}</h1>
        <p className="hero-text">
          Plan and Celebrate with Shubhaarambh.
        </p>
        <button className="hero-button" onClick={handleGetStartedClick}>Get Started</button>
      </div>
      {isFormVisible && <EnquiryForm service="Event Management" closeForm={closeForm} />} */}
    </div>
  );
};

export default HeroSection;
