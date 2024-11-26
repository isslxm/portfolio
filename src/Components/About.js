import React from 'react';
import '../Components/About.css';
import myPhoto from '../assets/myicon.jpg'

const About = () => (
  <section id="about" className="about-section">
    <div className="about-container">
      <div className="about-photo">
        <img src={myPhoto} alt="" />
      </div>
      <div className="about-info">
        <h1>About me</h1>
        <p>
          Hello! My name is Islam, my nickname is shxrken. I'm a passionate developer with experience in web
          development, React, and creating innovative solutions. I enjoy working
          on challenging projects and learning new technologies.
        </p>
        <p>
          When I'm not coding, I love exploring nature, reading, and sharing
          knowledge with others.
        </p>
      </div>
    </div>
  </section>
);

export default About;
