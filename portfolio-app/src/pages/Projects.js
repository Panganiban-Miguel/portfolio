import React from 'react';
import './Projects.css';
import ProjCard from "../components/ProjCard";
import { projectsData } from '../data/projectsData';

function Projects() {
  return (
    <main className="projects-page">
      <header className='header'>
        <h2 className='large-header'>/projects</h2>
        <p>A collection of things I've worked on during my time in <span className='R'>Republic</span> <span className='P'>Polytechnic</span>.</p>
      </header>
      <section className="project-list">
          {projectsData.map((proj, index) => (
                      <ProjCard
                        key={index}
                        name={proj.name}
                        desc={proj.desc}
                        module={proj.module}
                        path={proj.path}
                        thumbnail={proj.thumbnail}
                      />
                      ))} 
        </section>
    </main>
  );
}

export default Projects;