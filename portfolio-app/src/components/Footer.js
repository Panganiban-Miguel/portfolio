import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <nav className="footer-bar">
      <div className="footer-container">
          

          <Link to="/contact">Contact me.</Link>
      </div>
    </nav>
  );
}

export default Footer;
