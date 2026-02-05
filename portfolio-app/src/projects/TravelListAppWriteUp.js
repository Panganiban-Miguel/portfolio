import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css';

function TravelListAppWriteUp() {
  return (
  <div className="project-page">
    <main>
      <header className='project-title'>
        <h1>
          <a href="https://panganiban-miguel.github.io/travel-list-app-starter/" target='_blank' rel='noreferrer'>C219 - Travel Packer List Application</a>
        </h1>
      </header>
      
    </main>
    <footer>
      <Link to="/projects" className="back-link">← Back to Projects</Link>
    </footer>
  </div>
  );
}

export default TravelListAppWriteUp;  