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
            <h1>C219 - Fast React Pizza Co.</h1>
            <img src='../projects/pizzaapp/main.png' alt="Fast React Pizza Co. Screenshot" className="project-image" />
          </a>
        </header>
      </main>

      <div className="project-description">
        <p>
          "Fast React Pizza Co." is an application made for learning react. 
          Made during the course of C219 - Web App Development, this project 
          is a pseudo-e-commerce application for ordering pizzas online. It 
          features things like conditional rendering, lists and keys and styling.
        </p>
      </div>

      <div className='project-section'>
        <div className='project-section-text'>
          <p>
            During the creation of the application, we learnt about conditional rendering. 
            The way we were told to implement it was to have the "closed" message replace 
            the "Order" button after a certain time.
          </p>
        </div>

        <img src='../projects/pizzaapp/main-closed.png' alt="Pizza App Screenshot (Closed)" className="project-section-image" />
      </div>
      <footer>
        <Link to="/projects" className="back-link">← Back to Projects</Link>
      </footer>

    </div>
  </div>
  );
}

export default PizzaAppWriteUp;  