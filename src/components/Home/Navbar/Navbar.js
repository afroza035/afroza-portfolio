import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light container">
      <Link className="navbar-brand all-text-color" to="#">
        Afroza Akter Ruma
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto text-white">
          <li className="nav-item active">
            <Link className="nav-link ms-2 all-text-color" to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link ms-1 all-text-color" to="/aboutMe">
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link ms-1 all-text-color" to="/resume">
              Resume
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link ms-1 all-text-color" to="/blog">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link ms-1 all-text-color" to="/projects">
              Project
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link ms-1 all-text-color" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    );
};

export default Navbar;