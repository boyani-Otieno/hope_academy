import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p><strong>Address:</strong> Hope Academy, Nairobi, Kenya</p>
          <p><strong>Phone:</strong> +254 726579395</p>
          <p><strong>Email:</strong> info@hopeacademy.ac.ke</p>

          <div className="map-container">              
            <iframe 
            title="School Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7616908432306!2d36.77742097411546!3d-1.3186575356605672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1bcfe08eaf57%3A0xa6a8344e0cf16726!2sHope%20Academy%20(Tumaini%20Hope%20Center)!5e0!3m2!1sen!2ske!4v1746445240171!5m2!1sen!2ske" 
            width="100%" 
            height="450"  
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"></iframe>
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
