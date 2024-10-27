import React from 'react';
import { Link } from 'react-router-dom';
import '../Components/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>My Website</h1>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/first-year">First Year Students</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;