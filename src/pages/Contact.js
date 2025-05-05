import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p><strong>Address:</strong> Greenfield School, Nairobi, Kenya</p>
          <p><strong>Phone:</strong> +254 712 345678</p>
          <p><strong>Email:</strong> info@greenfieldschool.ac.ke</p>

          <div className="map-container">
            <iframe
              title="School Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.801117359704!2d36.82194650000001!3d-1.2920658999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10db7f51eb5b%3A0x5281dbf61894edbb!2sNairobi!5e0!3m2!1sen!2ske!4v1715693893936!5m2!1sen!2ske"
              width="100%"
              height="250"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send a Message</h2>
          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <textarea rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
