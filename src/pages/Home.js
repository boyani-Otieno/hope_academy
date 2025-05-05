import React from 'react';
import './Home.css';
import './PageStyles.css'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="home">
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src="/videos/home2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay">
          <h1>Welcome to Hope Academy!</h1>
          <h6><i>Educating for Life and Eternity</i></h6>
          <p>Inspiring Excellence. Shaping Futures.</p>
          <Link to="/admissions" className="home-btn">Apply Now</Link>
        </div>
      </div>

      <div className="home-content">
        <section className="home-section">
          <h2>Our Mission</h2>
          <p>
            Hope Academy is dedicated to nurturing young minds through quality education, innovation,
            and holistic development. We empower students to be confident, compassionate, and responsible global citizens.
          </p>
        </section>

        <section className="home-section">
          <h2>Our Vision</h2>
          <p>
            To be a leading institution in academic excellence and character development, producing graduates
            who are leaders in every sphere of life.
          </p>
        </section>

        <section className="home-section">
          <h2>Academic Pathways</h2>
          <ul>
            <li><strong>STEM:</strong> Science, Technology, Engineering & Mathematics</li>
            <li><strong>Arts & Sports:</strong> Music, Dance, Physical Education</li>
            <li><strong>Social Sciences:</strong> History, Economics, Sociology</li>
          </ul>
        </section>

        <section className="home-section">
          <h2>Join Our Community</h2>
          <p>
            At Greenfield, education goes beyond the classroom. We provide a safe, inclusive, and
            stimulating environment for students to grow in knowledge, skill, and character.
          </p>
          <Link to="/about" className="home-btn secondary">Learn More About Us</Link>
        </section>
      </div>
    </section>
  );
};

export default Home;
