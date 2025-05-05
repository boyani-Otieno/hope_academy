import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Logo & Mission */}
        <div className="footer-section">
          <h2 className="footer-logo">Hope Academy</h2>
          <p>
            Nurturing young minds through education, innovation, and character.
            Join us in shaping tomorrow’s leaders.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/academics">Academics</a></li>
            <li><a href="/admissions">Admissions</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@hopeacademy.org</p>
          <p>Phone: +254 700 123 456</p>
          <p>Address: Greenfield Road, Nairobi, Kenya</p>
          <div className="social-icons">
            <a href="#"><img src="/icons/facebook.svg" alt="Facebook" /></a>
            <a href="#"><img src="/icons/twitter.svg" alt="Twitter" /></a>
            <a href="#"><img src="/icons/instagram.svg" alt="Instagram" /></a>
          </div>
        </div>

        {/* Column 4: Newsletter */}
        <div className="footer-section">
          <h3>Stay Updated</h3>
          <p>Subscribe to our newsletter to receive updates and news.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your Email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Hope Academy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
