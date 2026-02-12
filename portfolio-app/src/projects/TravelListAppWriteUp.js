import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css';

function TravelListAppWriteUp() {
  return (
  <div className="project-page">
    <div className='page-contents'>

      <main>
        <header className='project-title'>
          <a href="https://panganiban-miguel.github.io/travel-list-app-starter/" target='_blank' rel='noreferrer'>
            <h1>C219 - Travel Packer List Application</h1>
            <img src='../projects/travellistapp/mainpage.png' alt="Travel List App Screenshot" className="project-image" />
          </a>
        </header>
      </main>
      
      <div className="project-summary">
        <p>
          "My Travel List" is an application made for learning react, 
          allowing users to track items that they need to pack for 
          their travels. Made during the course of C219 - Web App Development, 
          this project features things like event handling and list mapping.
        </p>
      </div>

      <footer>
        <Link to="/projects" className="back-link">← Back to Projects</Link>
      </footer>

    </div>
  </div>
  );
}

export default TravelListAppWriteUp;  