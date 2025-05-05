import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <section className="hero-section">
        <h1>About Hope Academy</h1>
        <p>Educating for Life and Eternity</p>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          Hope Academy is dedicated to nurturing young minds through quality education, 
          innovation, and holistic development. We empower students to be confident, 
          compassionate, and responsible global citizens.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Vision</h2>
        <p>
          To be a leading institution in academic excellence and character development, 
          producing graduates who are leaders in every sphere of life.
        </p>
      </section>

      <section className="about-section">
        <h2>Academic Pathways</h2>
        <ul>
          <li><strong>STEM:</strong> Science, Technology, Engineering & Mathematics</li>
          <li><strong>Arts & Sports:</strong> Music, Dance, Physical Education</li>
          <li><strong>Social Sciences:</strong> History, Economics, Sociology</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Join Our Community</h2>
        <p>
          At Hope Academy, education goes beyond the classroom. We provide a safe, inclusive, 
          and stimulating environment for students to grow in knowledge, skill, and character. 
          Join us in shaping future leaders who will make a positive impact in the world.
        </p>
      </section>
    </div>
  );
};

export default About;
