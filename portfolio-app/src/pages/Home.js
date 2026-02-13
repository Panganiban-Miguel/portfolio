import './Home.css';
import { Link } from 'react-router-dom';
import { skillsData } from '../data/skillsData';

function Home() {
  const { technical: technicalSkills, soft: softSkills  } = skillsData[0];
  
  return (
    <main className="home-page">
      <header className='header'>
        <h1>Panganiban Miguel</h1>
        <div className='role'>
            <p>
            <span className='programmer'>Learner</span>
            <span className='slash'> / </span>
            <span className='designer'>Creator</span>
            </p>
        </div>

        <div className='subtitle'>
          <p>
            A student under Republic Polytechnic's Diploma in Digital Design & Development 
            with a passion for learning and creating.
          </p>
        </div>
      </header>
      
      <section className="projects">
        <h2 className="projects-title">Projects</h2>

        <div className="project-list">
          <div className="proj-card">
            <Link to="/projects/baro" className="proj-path">
              <div className="proj-image" aria-hidden="true">
                <img src={process.env.PUBLIC_URL + "/projects/baro/baro.png"} alt="Depth and Pressure" />
              </div>

              <div className="proj-body">
                <div className="proj-name">Depth and Pressure</div>
                <div className="proj-desc">C337 • A 3D VR Puzzle game made in Unity.</div>
              </div>
            </Link>
          </div>

          <div className="proj-card">
            <Link to="/projects/EduReminder" className="proj-path">
              <div className="proj-image" aria-hidden="true">
                <img src={process.env.PUBLIC_URL + "/projects/edureminder/dashboard.png"} alt="EduReminder" />
              </div>

              <div className="proj-body">
                <div className="proj-name">EduReminder</div>
                <div className="proj-desc">C219 • An application to help students with time management, task tracking, and study planning.</div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      <section className='certifications'>
        <h3 className="cert-title">Certifications</h3>
          
          <div className="cert-grid">
    
          <article className="cert-card">
            <a
              href="https://www.hackerrank.com/certificates/b906ca054a36"
              target="_blank"
              rel="noopener noreferrer"
              className="cert-link"
            >
              <div className="cert-icon" aria-hidden="true">
                <img src={process.env.PUBLIC_URL + "/certificates/python_basic%20certificate.png"} alt="Certificate of Accomplishment - Python (Basic)" />
              </div>

              <div className="cert-body">
                <div className="cert-name">Certificate of Accomplishment - Python (Basic)</div>
                <div className="cert-issuer">
                  HackerRank • 2025
                </div>
              </div>
            </a>
          </article>

          <article className="cert-card">
            <a
              href="https://www.hackerrank.com/certificates/4510f195e711"
              target="_blank"
              rel="noopener noreferrer"
              className="cert-link"
            >
              <div className="cert-icon" aria-hidden="true">
                <img src={process.env.PUBLIC_URL + "/certificates/react_basic%20certificate.png"} alt="React (Basic) Certificate" />
              </div>

              <div className="cert-body">
                <div className="cert-name">React (Basic) Certificate</div>
                <div className="cert-issuer">
                  HackerRank • 2026
                </div>
              </div>
            </a>
          </article>
    
        </div>
        
      </section>

      <section className="skills-section">
        <div className="skills-container">
            <h1 className="skills-title">Skills</h1>
            <div className="skills-columns">
              
              <div className="skills-column technical-skills">
                <h2>Technical Skills</h2>
                
                <ul>
                  {technicalSkills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>

              <div className="skills-column soft-skills">
                <h2>Soft Skills</h2>
                
                <ul>
                  {softSkills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>

            </div>
        </div>
      </section>

    </main>
  );
}

export default Home;