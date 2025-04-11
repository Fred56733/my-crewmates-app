import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">Crew</div>
            <ul className="navbar-links">
                <li>
                    <Link to="/" className="navbar-link">Home</Link>
                </li>
                <li>
                    <Link to="/create" className="navbar-link">Create</Link>
                </li>
                <li>
                    <Link to="/gallery" className="navbar-link">Gallery</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
