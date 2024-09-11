import React, { useState } from "react";
import "./ServicePage.css";
import { Link } from 'react-router-dom';
import brideEntry from "../../assets/Services/Property management.jpeg.jpg";
import balloonDecoration from "../../assets/Services/commercial properties.jpg";
import flowerDecoration from "../../assets/Services/commercial rentals.jpg";
import haldiEvent from "../../assets/Services/investment advisory.jpg";
import brideMakeup from "../../assets/Services/law sevices.jpg";
import photography from "../../assets/Services/our story.jpg";
import videography from "../../assets/Services/residential properties.jpg";
import eventPlanner from "../../assets/Services/seo.jpg";
import EnquiryForm from "./Enquiry";
import HeroImage from "../../assets/Services/serviceshero.webp";

const ServicePage = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Bride/Groom Special Entry",
      description:
        "Make your entrance memorable with our special bride and groom entry services tailored to wow your guests.",
      image: brideEntry,
    },
    {
      id: 2,
      title: "Balloon Decoration",
      description:
        "Add a splash of color and fun to your events with our creative and beautiful balloon decorations.",
      image: balloonDecoration,
    },
    {
      id: 3,
      title: "Flower Decoration",
      description:
        "Our exquisite flower decorations will transform your event space into a stunning floral paradise.",
      image: flowerDecoration,
    },
    {
      id: 4,
      title: "Haldi/Mehandi Occasion",
      description:
        "Celebrate your Haldi and Mehandi with traditional and vibrant decor setups.",
      image: haldiEvent,
    },
    {
      id: 5,
      title: "Bride Makeup",
      description:
        "Look flawless on your big day with our professional bridal makeup services.",
      image: brideMakeup,
    },
    {
      id: 6,
      title: "Photography",
      description:
        "Capture the magical moments of your event with our expert photography services.",
      image: photography,
    },
    {
      id: 7,
      title: "Videography",
      description:
        "Relive your special moments through our professional videography services.",
      image: videography,
    },
    {
      id: 8,
      title: "All Type Events Planner",
      description:
        "From intimate gatherings to grand celebrations, we plan and execute all types of events to perfection.",
      image: eventPlanner,
    },
  ];

  const openForm = (service) => {
    setSelectedService(service);
  };

  const closeForm = () => {
    setSelectedService(null);
  };

  return (
    <>
      <div
        className="service-page-hero"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="service-hero-content">
          <h2>Our Services</h2>
          <p><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link> » Gallery</p>
        </div>
      </div>
      <div className="gallery-caption">
        <h2>"Elevate Your Events"</h2>
        <p style={{ color: "black" }}>
          "Creating unforgettable moments with elegance and precision."
        </p>
      </div>
      <div className="service-page">
        <div className="service-list">
          {services.map((service) => (
            <div key={service.id} className="service-item">
              <div className="service-item-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-item-content">
                <h2 className="service-item-title">{service.title}</h2>
                <p className="service-item-description">
                  {service.description}
                </p>
                <button
                  className="service-item-button"
                  onClick={() => openForm(service.title)}
                >
                  Enquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
        {selectedService && (
          <EnquiryForm service={selectedService} closeForm={closeForm} />
        )}
      </div>
    </>
  );
};

export default ServicePage;
