import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';
import clientImage from '../../assets/pics/pic12.jpg'; // Ensure correct image path
import clientImage1 from '../../assets/pics/pic10.jpg'; // Ensure correct image path
import clientImage2 from '../../assets/pics/pic11.jpg'; // Ensure correct image path

const GallerySection = ({ title, images }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex + images.length - 1) % images.length);
  };

  return (
    <div className="gallery-section">
      <h2>{title}</h2>
      <div className="image-grid">
        {images.map((image, index) => (
          <div key={index} className="image-card" onClick={() => openModal(index)}>
            <img src={image.url} alt={image.alt} />
          </div>
        ))}
      </div>
      {modalOpen && (
        <div className="gallery-modal-backdrop">
          <div className="gallery-modal-content">
            <button onClick={closeModal} className="gallery-modal-close-btn">✖</button>
            <button onClick={prevImage} className="gallery-modal-nav-btn-prevbtn">〈</button>
            <img src={images[currentIndex].url} alt={images[currentIndex].alt} className="gallery-modal-image" />
            <button onClick={nextImage} className="gallery-modal-nav-btn-nextbtn">〉</button>
          </div>
        </div>
      )}
    </div>
  );
};

const GalleryHero = () => {
  const receptionImages = [
    { url: clientImage, alt: 'Reception Image 1' },
    { url: clientImage1, alt: 'Reception Image 2' },
  ];

  const haldiImages = [
    { url: clientImage2, alt: 'Haldi Image 1' },
    { url: clientImage, alt: 'Haldi Image 2' },
  ];

  return (
    <>
      <div className="gallery-hero">
        <div className="gallery-hero-content">
          <h1>Our Work</h1>
          <p><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link> » Gallery</p>
        </div>
      </div>
      <div className="gallery-caption">
        <h2>"Captivating Moments"</h2>
        <p style={{color:'black'}}>"Embark on a visual journey through our Shaandaar Events Gallery, where we unveil a collection 
          <br />of captivating and unforgettable experiences as the best wedding planner."</p>
      </div>
      <GallerySection title="Reception" images={receptionImages} />
      <GallerySection title="Haldi" images={haldiImages} />
    </>
  );
};

export default GalleryHero;
