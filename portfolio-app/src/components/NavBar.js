import React from 'react';
import './NavBar.css';
import PDLogo from '../Brand Logo.png';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="nav-container">
          <Link to="/" className="nav-brand-link">
            <img src={PDLogo} alt="Portfolio Logo" className="nav-logo" />
          </Link>
        <ul className="nav-links">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><a href="#projects">Projects</a></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
