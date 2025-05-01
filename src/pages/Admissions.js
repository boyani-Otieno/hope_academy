import React from 'react';
import './Admissions.css';

const Admissions = () => {
  return (
    <section className="admissions">
      <div className="admissions-hero">
        <h1>Admissions</h1>
        <p>Welcome to Hope Academy! We're excited to guide you through our admission process.</p>
        <img src="/images/admin1.jpeg" alt="Happy students at Greenfield" className="hero-image" />
      </div>

      <div className="admissions-content">
        <section className="admissions-section">
          <div className="admissions-text">
            <h2>Why Choose Hope Academy?</h2>
            <p>
              At Hope Academy, we provide a well-rounded curriculum, modern facilities, experienced teachers, and
              a nurturing environment where every child thrives academically and socially.
            </p>
          </div>
          <img src="/images/class.jpg" alt="Students learning together" />
        </section>

        <section className="admissions-section reverse">
          <img src="/images/admin2.jpeg" alt="Student admission documents" />
          <div className="admissions-text">
            <h2>Admission Requirements</h2>
            <ul>
              <li>Completed admission form (available online or at the school office)</li>
              <li>Copy of birth certificate</li>
              <li>Previous school report (if transferring)</li>
              <li>Two recent passport-sized photos</li>
            </ul>
          </div>
        </section>

        <section className="admissions-section">
          <div className="admissions-text">
            <h2>Application Process</h2>
            <ol>
              <li>Fill out the application form online or pick up one at the front office.</li>
              <li>Submit required documents listed above.</li>
              <li>Schedule an interview and placement assessment.</li>
              <li>Await admission confirmation within 5 working days.</li>
            </ol>
          </div>
          <img src="/images/admin3.jpeg" alt="Interview and assessment" />
        </section>

        <section className="admissions-section reverse">
          <img src="/images/admin4.jpeg" alt="Admissions office contact" />
          <div className="admissions-text">
            <h2>Contact Admissions Office</h2>
            <p>
              <strong>Phone:</strong> +254 700 123 456<br />
              <strong>Email:</strong> admissions@hopeacademy.ac.ke<br />
              <strong>Office Hours:</strong> Monday – Friday, 8:00am – 4:30pm
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Admissions;
