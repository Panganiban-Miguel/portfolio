import React from 'react';
import './NavBar.css';
import PDLogo from '../Brand Logo.png';
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="nav-container">
          <Link to="/" className="nav-brand-link">
            <img src={PDLogo} alt="Portfolio Logo" className="nav-logo" />
          </Link>
        <ul className="nav-links">
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
