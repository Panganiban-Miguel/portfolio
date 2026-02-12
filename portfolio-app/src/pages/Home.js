import './Home.css';
import { skillsData } from '../data/skillsData';

function Home() {
  const { technical: technicalSkills, soft: softSkills  } = skillsData[0];
  
  return (
    <main className="home-page">
      <header className='header'>
        <h1>Panganiban Miguel</h1>
        <div className='subtitle'>
            <p>
            <span className='role-programmer'>Programmer</span> 
            <span className='slash'>/</span> 
            <span className='role-designer'>Designer</span>
            </p>
        </div>
      </header>
      
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