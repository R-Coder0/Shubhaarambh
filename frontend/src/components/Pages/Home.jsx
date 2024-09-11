import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeroSection from "../HeroSection/HeroSection";
import Testimonials from "../Testimonial/Testimonials";
import Blogs1 from "../../assets/Blogs/blog1.webp";
import Blogs3 from "../../assets/Blogs/blog2.webp";
import Blogs2 from "../../assets/Blogs/blog3.webp";
import "./Home.css";
import Modal from "./Modal";

// Services Section for Event Management
const Services = () => {
  const services = [
    {
      title: "Event Planning",
      description: "Expert planning for all your special occasions.",
      icon: "fas fa-calendar-check",
    },
    {
      title: "Venue Decoration",
      description: "Transform spaces with our bespoke decoration services.",
      icon: "fas fa-archway",
    },
    {
      title: "Catering Services",
      description: "Delicious and customized catering options for every event.",
      icon: "fas fa-concierge-bell",
    },
  ];

  return (
    <section className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-container">
          {services.map((service, index) => (
            <div key={index} className="service">
              <i className={`service-icon ${service.icon}`}></i>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
// About Us Section
const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Shubhaarambh</h2>
            <p>
              At Shubhaarambh, we bring your dream events to life. From intimate
              gatherings to grand celebrations, our dedicated team ensures every
              detail is perfect.
            </p>
          </div>
              <video
                className="about-video"
                autoPlay
                loop
                muted
                src={require("../../assets/video/aboutus.mp4")}
                type="video/mp4"
                style={{ borderRadius: "20px" }}
              >
                Your browser does not support the video tag.
              </video>
        </div>
      </div>
    </section>
  );
};

// Call to Action (CTA) Section
const CallToAction = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <section className="call-to-action">
      <div className="container">
        <h2>Ready to Plan Your Next Event?</h2>
        <button onClick={handleContactClick}>Let's Get Started</button>
      </div>
    </section>
  );
};

// Blog Section
const BlogPreview = () => {
  const blogPosts = [
    {
      title: "Decor Trends for 2024 Events",
      content:
        "Discover the cutting-edge decor trends set to define 2024. From sustainable materials to innovative lighting designs, learn how these trends can transform any event into a memorable experience.",
      image: Blogs1,
    },
    {
      title: "Planning Your Dream Wedding",
      content:
        "Planning your dream wedding can be overwhelming, but with the right tips, it can also be a piece of cake. This guide will walk you through everything from selecting the perfect venue to choosing your wedding palette.",
      image: Blogs2,
    },
    {
      title: "Corporate Events Made Easy",
      content:
        "Corporate events don’t have to be dull. Learn how to spice up your corporate gatherings with our essential guide to event planning, featuring tips on everything from engaging activities to seamless logistics.",
      image: Blogs3,
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const openModal = (post) => {
    setSelectedPost(post);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="blog-preview">
      <div className="container">
        <h2>From Our Blog</h2>
        <div className="blog-container">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="blog-post"
              onClick={() => openModal(post)}
            >
              <div className="image-card">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="description-card">
                <h3>{post.title}</h3>
                <p>{post.snippet}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {modalOpen && <Modal post={selectedPost} closeModal={closeModal} />}
    </section>
  );
};

const Strip = () => {
  return (
    <div className="fairy-tale-strip">Let's Plan Your Fairytale Together!</div>
  );
};
const Home = () => {
  return (
    <div>
      <HeroSection />
      <Strip />
      <Services />
      <AboutUs />
      <CallToAction />
      <BlogPreview />
      <Testimonials />
    </div>
  );
};

export default Home;
