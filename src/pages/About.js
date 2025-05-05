import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="about-container">
      {/* Hero Section with Image */}
      <section className="hero-section">
        <div className="hero-text" data-aos="fade-right">
          <h1>About Hope Academy</h1>
          <p>Empowering young minds for a brighter tomorrow.</p>
        </div>
        <div className="hero-image" data-aos="fade-left">
          <img src="/images/class.jpg" alt="Hope Academy Students" />
        </div>
      </section>

      {/* Mission */}
      <section className="about-section" data-aos="fade-up">
        <h2>Our Mission</h2>
        <p>
          Hope Academy is dedicated to nurturing young minds through quality education, 
          innovation, and holistic development. We empower students to be confident, 
          compassionate, and responsible global citizens.
        </p>
      </section>

      {/* Vision */}
      <section className="about-section" data-aos="fade-up">
        <h2>Our Vision</h2>
        <p>
          To be a leading institution in academic excellence and character development, 
          producing graduates who are leaders in every sphere of life.
        </p>
      </section>

      {/* Academic Pathways */}
      <section className="about-section" data-aos="fade-up">
        <h2>Academic Pathways</h2>
        <ul>
          <li><strong>STEM:</strong> Science, Technology, Engineering & Mathematics</li>
          <li><strong>Arts & Sports:</strong> Music, Dance, Physical Education</li>
          <li><strong>Social Sciences:</strong> History, Economics, Sociology</li>
        </ul>
      </section>

      {/* Join Our Community */}
      <section className="about-section" data-aos="fade-up">
        <h2>Join Our Community</h2>
        <p>
          At Hope Academy, education goes beyond the classroom. We provide a safe, inclusive, 
          and stimulating environment for students to grow in knowledge, skill, and character. 
          Join us in shaping future leaders who will make a positive impact in the world.
        </p>
      </section>

      {/* Testimonials */}
      <section className="testimonials" data-aos="zoom-in">
        <h2>Teacher Spotlight</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <img src="/images/girl.jpg" alt="Ms. Achieng" />
            <h4>Ms. Achieng – Science Teacher</h4>
            <p>"Hope Academy encourages creativity and deep thinking. Watching students grow is my greatest joy."</p>
          </div>
          <div className="testimonial-card">
            <img src="/images/girl.jpg" alt="Mr. Otieno" />
            <h4>Mr. Otieno – Music Instructor</h4>
            <p>"The energy and passion our learners bring to music is unmatched. We inspire excellence every day."</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
