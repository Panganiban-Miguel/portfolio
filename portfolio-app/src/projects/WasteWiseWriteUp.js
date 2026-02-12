import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css';

function WasteWiseWriteUp() {
  return (
  <div className="project-page">
    <div className='page-contents'>

      <main>
        <header className='project-title'>
          {/* <img src={require('../projects/./.')} alt="" className="project-image" /> */}
          <h1>C346 - WasteWise</h1>
        </header>
      </main>
      
      <div className="project-description">
        <p>
          
        </p>
      </div>
      
      <footer>
        <Link to="/projects" className="back-link">← Back to Projects</Link>
      </footer>

    </div>
  </div>
  );
}

export default WasteWiseWriteUp;  