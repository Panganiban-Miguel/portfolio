import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css';

function BaroWriteUp() {
  return (
  <div className="project-page">
    <div className='page-contents'>

      <main>
        <header className='project-title'>
          <img src='../projects/baro/mainpage.png' alt="Barotrauma (3D VR) Screenshot" className="project-image" />
          <h1>C337 - Barotrauma (3D VR)</h1>
        </header>
      </main>

      <div className="project-description">
        <p>
          This project is something I hold pretty close to my heart, 
          especially since it was made with the goal of creating a 
          "prototype" or envisioning of a retake of a 2D game that I 
          had, but in a completely different perspective.
        </p>
      </div>
      
      <footer>
        <Link to="/projects" className="back-link">← Back to Projects</Link>
      </footer>

    </div>
  </div>
  );
}

export default BaroWriteUp;  