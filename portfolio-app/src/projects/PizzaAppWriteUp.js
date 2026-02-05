import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css';

function PizzaAppWriteUp() {
  return (
  <div className="project-page">
    <main>
      <header className='project-title'>
        <h1>
          <a href="https://panganiban-miguel.github.io/pizza-app/" target='_blank' rel='noreferrer'>C219 - PizzaApp</a>
        </h1>
      </header>
        
    </main>
    <footer>
      <Link to="/projects" className="back-link">← Back to Projects</Link>
    </footer>
    </div>
  );
}

export default PizzaAppWriteUp;  