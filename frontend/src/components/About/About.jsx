import React from 'react';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import './About.css';
import slideImage from '../../assets/AboutUs.webp';
import storyImage from '../../assets/Services/investment advisory.jpg'; 
import missionIcon from '../../assets/missionIcon.png'; 
import visionIcon from '../../assets/vissionIcon.png'; 

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="header" style={{ backgroundImage: `url(${slideImage})` }}>
        <div className="overlay">
          <h1>Welcome to Shubhaarambh</h1>
          <p><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link> » About Us</p>
        </div>
      </div>
      <div className="content">
        <section className="story-section">
          <div className="story-image">
            <img src={storyImage} alt="Our Story" />
          </div>
          <div className="story-content">
            <h2>About Shubhaarambh</h2>
            <p>At Shubhaarambh, we turn fleeting moments into unforgettable memories. From intimate gatherings to grand weddings, our expert team ensures every detail is perfect.</p>
            <div className="sub-points">
              <div className="sub-point">
                <img src={missionIcon} alt="Mission Icon" />
                <div>
                  <h3>Our Mission</h3>
                  <p>To create uniquely beautiful and profoundly memorable events that exceed expectations every time.</p>
                </div>
              </div>
              <div className="sub-point">
                <img src={visionIcon} alt="Vision Icon" />
                <div>
                  <h3>Our Vision</h3>
                  <p>To be the premier choice for event planning, known for our creativity, dedication, and exceptional service.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="statistics">
          <div className="stat">
            <CountUp start={0} end={500} duration={3} />+
            <h3>Events Managed</h3>
          </div>
          <div className="stat">
            <CountUp start={0} end={200} duration={3} />+
            <h3>Happy Clients</h3>
          </div>
          <div className="stat">
            <CountUp start={0} end={15} duration={3} />+
            <h3>Years of Service</h3>
          </div>
          <div className="stat">
            <CountUp start={0} end={100} duration={3} />+
            <h3>Professional Planners</h3>
          </div>
        </section>
        <section className="team">
          <h2>Meet Our Planners</h2>
          <div className="team-members">
            <div className="team-member">
              <img src={storyImage} alt="Senior Planner" />
              <h3>Alice Johnson</h3>
              <p>Role: Senior Event Planner</p>
              <p>Background: Over 10 years in luxury event coordination</p>
            </div>
            <div className="team-member">
              <img src={storyImage} alt="Creative Director" />
              <h3>David Smith</h3>
              <p>Role: Creative Director</p>
              <p>Background: Specialist in bespoke event design</p>
            </div>
          </div>
        </section>
        <section className="approach-section">
          <div className="approach-content">
            <h2>Our Approach</h2>
            <blockquote>"The heart of every memorable event is personal touch."</blockquote>
            <div className="highlight">
              <p>Personalized service from start to finish.</p>
              <p>Innovative and custom event design.</p>
              <p>Attention to detail and passion for perfection.</p>
            </div>
            <p>At Shubhaarambh, our approach is to work closely with you to bring your vision to life, ensuring every event is as unique and special as our clients.</p>
          </div>
          <div className="approach-image">
            <img src={slideImage} alt="Approach" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
