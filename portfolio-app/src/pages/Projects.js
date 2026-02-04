import React from 'react';
import './Projects.css';
import ProjCard from "../components/ProjCard";
import { projectsData } from '../projects/projectsData';

function Projects() {
  return (
    <main>
      <header className="projects-page">
        <p>
          {projectsData.map((proj, index) => (
                      <ProjCard
                        key={index}
                        name={proj.name}
                        desc={proj.desc}
                        module={proj.module}
                        link={proj.link}
                        thumbnail={proj.thumbnail}
                      />
                      ))}
        </p>
      </header>
    </main>
  );
}

export default Projects;