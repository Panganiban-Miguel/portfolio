import React from 'react';
import './About.css';
import CertCard from "../components/CertCard";
import { certificates } from '../data/Certificates';

function About() {


  return (
    <div id="about" className="about-page">
    <main>
      <div className="about-container">
        <div className="about-content">
          <h2 className='large-about'>/about</h2>
          <div className="about-text">
            <p className='short-about'>I'm a student studying at <span className='RP-mentioned'><span className='R'>Republic</span> <span className='P'>Polytechnic</span></span>.</p>
            <p>
              For as long as I can remember, I'd always loved all things technology. 
              The idea that so much goes behind rendering <i>thousands</i> of pixels 
              on a monitor, each lighting up a certain way, at specific timings, all 
              to produce moving images up to <i>hundreds</i> of times per second and 
              such had always fascinated me.
            </p>
            <p>
              I only started programming when I entered Polytechnic, and since then, 
              I've only continued to grow a fondness for it. I love the process of 
              creating something from nothing but lines of code, and seeing it come 
              to life. It's a magical experience that never gets old. I love learning 
              more and more about programming and software development, and I hope to 
              continue doing so for the rest of my life.
            </p>
            <br/>
            <h2 style={{textAlign: "center"}}>Interests</h2>
            <p>
              I love a good video game, whether it's an open-world RPG, a fast-paced 
              shooter, a challenging puzzle game or a sandbox, gaming has always been 
              a big part of my life. I often wonder what goes on behind the scenes, 
              thinking about the design and mechanics of these games, how they work 
              and the code behind each and every little thing. I aspire to one day 
              maybe even create my own games, combining my passion for programming 
              and gaming into one.
            </p>
          </div>
        </div>
        
        <aside className="about-aside" aria-hidden="true">
          <img src="temp" alt="About" className="about-image" />
        </aside>
      </div>
    </main>
    
      <section className='certifications'>
        <h3 className="cert-title">Certifications</h3>
        
        <div className='cert-scroll'>
          
          <div className="cert-grid">

            {certificates.map((cert, index) => (
            <CertCard
              key={index}
              name={cert.name}
              issuer={cert.issuer}
              year={cert.year}
              link={cert.link}
              thumbnail={cert.thumbnail}
            />
            ))}

          </div>

        </div>
        
      </section>
    </div>
  );
}

export default About;
