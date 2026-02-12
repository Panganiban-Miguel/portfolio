import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css';

function WasteWiseWriteUp() {
  return (
  <div className="project-page">
    <div className='page-contents'>

      <main>
        <header className='project-title'>
          <h1>C346 - WasteWise</h1>
          <img src='../projects/wastewise/Homepage.jpeg' alt="WasteWise Screenshot" className="project-image-phone" />
        </header>
      </main>
      
      <div className="project-summary">
        <p>
          "WasteWise" was made in collaboration with a team of four members, including myself. 
          It allows users to track their actions with Singapore's SG Green Plan in mind, 
          including a "points" system to encourage users to perform more eco-friendly actions 
          by allowing them to actively monitor their own progress, framed as levels towards "tiers" 
          within the app that represent their contributions to the environment.
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