import React from 'react';
import '../Components/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const contacts = [
  {
    name: 'GitHub',
    icon: faGithub,
    link: 'https://github.com/isslxm',
  },
  {
    name: 'LinkedIn',
    icon: faLinkedin,
    link: 'https://linkedin.com/in/yourusername',
  },
  {
    name: 'Twitter',
    icon: faTwitter,
    link: 'https://twitter.com/yourusername',
  },
];

const Contact = () => (
  <section id="contact" className="contact-section">
    <h1>Contact Me</h1>
    <div className="contact-container">
      {contacts.map((contact, index) => (
        <a
          key={index}
          href={contact.link}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <div className="contact-info">{contact.name}</div>
          <div className="contact-icon">
            <FontAwesomeIcon icon={contact.icon} size="2x" />
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default Contact;
