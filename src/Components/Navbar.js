import React from 'react';
import { Link } from 'react-scroll';
import '../App.css'

const Navbar = () => (
  <header className="navbar">
    <nav>
      <ul>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="nav-button"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="nav-button"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="nav-button"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
