import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && <div className="overlay" onClick={closeMenu}></div>}
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/" onClick={closeMenu} style={{textDecoration:'none'}}> 
            <h1 className="navbar-logo-text">Shubh aarambh Events</h1>
          </Link>
        </div>
        <div className={`navbar-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <ul className={`navbar-nav ${isOpen ? 'open' : ''}`}>
          <li className="menu-header">
            Menu
            <span className="close-icon" onClick={closeMenu}>X</span>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link" onClick={closeMenu}>Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-link" onClick={closeMenu}>Gallery</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={closeMenu}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact Us</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
