import React from 'react';
import { ReactComponent as EmailIcon } from '../envelope.svg';
import { ReactComponent as PhoneIcon } from '../phone.svg';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-page">
      <div className="contact-container">
        <div className="contact-content">
          <h2 className="contact-title">Contact</h2>
          <p className="contact-lead">I always look forward to taking criticism and feedback to improve the next thing I do.</p>

          <ul className="contact-list">
            <li>
              <EmailIcon className="icon" fill="#c864ff" aria-hidden="true" />
              <div>
                <div className="contact-label">Email</div>
                <div className="contact-value">migchaud007@gmail.com</div>
                <div className="contact-value">24022674@myrp.edu.sg</div>
              </div>
            </li>

            <li>
              <PhoneIcon className="icon" fill="#c864ff" aria-hidden="true" />
              <div>
                <div className="contact-label">Phone</div>
                <div className="contact-value">(+65) 8569 - 0679</div>
              </div>
            </li>
          </ul>
        </div>

        <section className="contact-card" aria-hidden="true">
          <div className="contact-form">
            <div className="contact-form-inner">
              <div className="contact-form-title">Send a message</div>
              <p className="contact-form-text">Placeholder contact form will go here. Replace with your form or mailto link.</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Contact;
