import React from 'react';
import './About.css';

function About() {
  return (
    <main id="about" className="about-page">
      <div className="about-container">
        <div className="about-content">
          <h2 className='large-about'>/about</h2>
          <div className="about-text">
            <p className='short-about'>I'm a student studying at <span className='RP-mentioned'><span className='R'>Republic</span> <span className='P'>Polytechnic</span></span>.</p>
            <p>For as long as I can remember, I'd always loved all things technology. The idea that so much goes behind rendering <i>thousands</i> of pixels on a monitor, each lighting up a certain way, at specific timings, all to produce moving images up to <i>hundreds</i> of times per second and such had always fascinated me.</p>
          </div>
        </div>

        <aside className="about-aside" aria-hidden="true">
          <img src="temp" alt="About visual placeholder" className="about-image" />
        </aside>
      </div>
    </main>
  );
}

export default About;
