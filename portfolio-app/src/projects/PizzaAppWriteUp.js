import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css';

function PizzaAppWriteUp() {
  return (
  <div className="project-page">
    <div className='page-contents'>
      <main>
        <header className='project-title'>
          <h1>
            <a href="https://panganiban-miguel.github.io/pizza-app/" target='_blank' rel='noreferrer'>C219 - Fast React Pizza Co.</a>
          </h1>
        </header>
      </main>

      <div className="project-description">
        <p>
          Fast React Pizza Co. is a pizza ordering application built using React.
          
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