import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css';

function EduReminderWriteUp() {
  return (
  <div className="project-page">
    <div className='page-contents'>

      <main>
        <header className='project-title'>
          <a href="https://c219-ca-2-frontend.vercel.app/student" target='_blank' rel='noreferrer'>
            <h1>C219 - EduReminder</h1>
            <img src='../projects/EduReminder/dashboard.png' alt="EduReminder Dashboard Screenshot" className="project-image-phone" />
          </a>
        </header>
      </main>
      
      <div className="project-summary">
        <p>
          "EduReminder" was made in collaboration with a team of 3 members, including myself. 
          Based on the idea that students struggle with keeping up with their academic schedules, 
          EduReminder allows users to track events by setting reminders. The app uses authentication, 
          authorization and a backend database to store event data.
        </p>
      </div>

      <footer>
        <Link to="/projects" className="back-link">← Back to Projects</Link>
      </footer>

    </div>
  </div>
  );
}

export default EduReminderWriteUp;  