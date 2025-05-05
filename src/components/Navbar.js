import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaSchool, FaBookOpen, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Hope Academy</div>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>
          <FaHome className="nav-icon" /> Home
        </Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>
          <FaInfoCircle className="nav-icon" /> About
        </Link>
        <Link to="/admissions" onClick={() => setIsOpen(false)}>
          <FaSchool className="nav-icon" /> Admissions
        </Link>
        <Link to="/academics" onClick={() => setIsOpen(false)}>
          <FaBookOpen className="nav-icon" /> Academics
        </Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>
          <FaEnvelope className="nav-icon" /> Contact
        </Link>
      </div>

      <div
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
