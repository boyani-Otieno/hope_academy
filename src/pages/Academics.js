import React from 'react';
import './Academics.css';
import coreImg from '../assets/Core-Subjects-Banner.jpg';
import pathwaysImg from '../assets/subject1.jpeg';
import additionalImg from '../assets/subject2.jpeg';

const Academics = () => {
  return (
    <section className="subjects">
        <h1>ACADEMICS</h1>
      <div className="subjects-section">
        <img src={coreImg} alt="Core Subjects" />
        <div>
          <h2>Core Subjects (Compulsory for all)</h2>
          <ul>
            <li><strong>English:</strong> Language and communication skills.</li>
            <li><strong>Kiswahili/Kenya Sign Language:</strong> Language and communication skills.</li>
            <li><strong>Community Service Learning:</strong> Focuses on values and community engagement.</li>
            <li><strong>Physical Education:</strong> Focuses on physical well-being and sports.</li>
          </ul>
        </div>
      </div>

      <div className="subjects-section reverse">
        <img src={pathwaysImg} alt="Pathways" />
        <div>
          <h2>Pathways (Students choose one)</h2>
          <ul>
            <li><strong>Arts and Sports:</strong> Focuses on creative arts, music, dance, and physical education.</li>
            <li><strong>Social Sciences:</strong> Focuses on history, geography, economics, sociology, and philosophy.</li>
            <li><strong>STEM:</strong> Focuses on science, technology, engineering, and mathematics.</li>
          </ul>
        </div>
      </div>

      <div className="subjects-section">
        <img src={additionalImg} alt="Additional Subjects" />
        <div>
          <h2>Additional Subjects (Depending on chosen pathway)</h2>
          <ul>
            <li><strong>Social Studies:</strong> Combines social studies and life skills.</li>
            <li><strong>Religious Education (CRE/IRE/HRE):</strong> Focuses on religious studies.</li>
            <li><strong>Science and Technology:</strong> Includes scientific concepts and technology.</li>
            <li><strong>Agriculture and Nutrition:</strong> Focuses on agriculture, nutrition, and related topics.</li>
            <li><strong>Creative Arts:</strong> Includes visual arts, music, and other creative expressions.</li>
            <li><strong>Foreign Languages (Optional):</strong> Includes languages other than English and Kiswahili.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Academics;
