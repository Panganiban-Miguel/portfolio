import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css';

function PizzaAppWriteUp() {
  return (
  <div className="project-page">
    <div className='page-contents'>

      <main>
        <header className='project-title'>
          <a href="https://panganiban-miguel.github.io/pizza-app/" target='_blank' rel='noreferrer'>
            {/* <img src='../projects/./.' alt="" className="project-image" /> */}
            <h1>C219 - Fast React Pizza Co.</h1>
          </a>
        </header>
      </main>

      <div className="project-description">
        <p>
          "Fast React Pizza Co." is an application made for learning react. 
          Made during the course of C219 - Web App Development, this project 
          features things like conditional rendering, lists and keys and styling.
        </p>
      </div>
      
      <footer>
        <Link to="/projects" className="back-link">← Back to Projects</Link>
      </footer>

    </div>
  </div>
  );
}

export default PizzaAppWriteUp;  