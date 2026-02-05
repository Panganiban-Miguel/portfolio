import React from 'react';
import './Projects.css';
import ProjCard from "../components/ProjCard";
import { projectsData } from '../components/projectsData';

function Projects() {
  return (
    <main className="projects-page">
      <header>
        <h2 className='large-header'>/projects</h2>
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