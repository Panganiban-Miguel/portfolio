import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css';

function CardAppWriteUp() {
  return (
  <div className="project-page">
    <div className='page-contents'>

      <main>
        <header className='project-title'>
          <h1>C219 - CardApp</h1>
          {/* <img src={require('../projects/./.')} alt="" className="project-image" /> */}
        </header>
      </main>
      
      <div className="project-description">
        <p>
          This project was made for the purposes of learning about Frontend-Backend integration, 
          React Router and CRUD. It is a simple card management system that communicates with an 
          Express API backend to perform CRUD operations on a collection of cards.
        </p>
      </div>

      <footer>
        <Link to="/projects" className="back-link">← Back to Projects</Link>
      </footer>

    </div>
  </div>
  );
}

export default CardAppWriteUp;  