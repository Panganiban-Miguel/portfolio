import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css';

function BaroWriteUp() {
  return (
  <div className="project-page">
    <div className='page-contents'>
      <main>
        <header className='project-title'>
          <h1>
            C337 - Barotrauma (3D VR)
          </h1>
        </header>
        
      </main>
      <footer>
        <Link to="/projects" className="back-link">← Back to Projects</Link>
      </footer>
    </div>
  </div>
  );
}

export default BaroWriteUp;  