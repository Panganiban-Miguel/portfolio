import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css';

function BaroWriteUp() {
  return (
  <div className="project-page">
    <div className='page-contents'>

      <main>
        <header className='project-title'>
          <h1>C337 - Depth and Pressure</h1>
          <img src='../projects/baro/baro.png' alt="Depth and Pressure Screenshot" className="project-image" />
        </header>
      </main>

      <div className="project-description">
        <p>
          This project is something I hold pretty close to my heart, 
          especially since it was made with the goal of creating a 
          "prototype" or envisioning of a retake of a 2D game that I 
          had, but in a completely different perspective. Although 
          the project could be polished further, I am somewhat proud 
          of how it turned out.
        </p>
      </div>

      <div className='project-section'>
        <div className='project-section-text'>
          <p>
          The moment I had started this project, I had the immediate idea 
          for how I wanted the puzzles to be. However, I quickly learnt that 
          I was growing too ambitious with my ideas, needing to tone down how 
          much I was going to include in the project if I wanted to get it done 
          in a timely fashion.
        </p>
        </div>
        
        <img src='../projects/baro/Flow-Chart 1 - Crew Area.jpg' alt="User Flow - 1" className="project-section-image" />
      </div>

      <footer>
        <Link to="/projects" className="back-link">← Back to Projects</Link>
      </footer>

    </div>
  </div>
  );
}

export default BaroWriteUp;  