import React, { useState } from 'react';
import { ReactComponent as EmailIcon } from '../envelope.svg';
import { ReactComponent as PhoneIcon } from '../phone.svg';
import './Contact.css';

function Contact() {
  const [showFallback, setShowFallback] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const subject = encodeURIComponent("Portfolio Contact");
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n\n` +
      message
    );

    const mailtoUrl =
      `mailto:example@email.com?subject=${subject}&body=${body}`;

    // Attempt to open email client
    window.location.href = mailtoUrl;

    // UI feedback
    setShowFallback(true);

    form.reset();
  }

  return (
    <section id="contact" className="contact-page">
      <div className="contact-container">
        <div className="contact-content">
          <h2 className="contact-title">/contact</h2>
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

        <section className="contact-card" aria-label="Contact form">
          <div className="contact-form">
            <div className="contact-form-inner">
              <div className="contact-form-title">Talk to me.</div>
              <p className="contact-form-text">I'll get back to you.</p>

              <form onSubmit={handleSubmit}  className="contact-form-fields" >
                <div className="form-grid">

                  <div className="form-left">

                    <label className="form-row">

                      <span className="form-label">Name</span>

                      <input name="name"
                      type="text"
                      className="form-input"
                      placeholder="Your name"
                      required />

                    </label>


                    <label className="form-row">

                      <span className="form-label">Email</span>

                      <input name="email"
                      type="email"
                      className="form-input"
                      placeholder="you@example.com"
                      required />

                    </label>


                    <div className="form-actions">
                      
                      <button type="submit" className="btn-submit">Send message</button>

                      {showFallback && (
                        <span className="form-sent">
                          Email draft opened.
                          <br />
                          <span className="sent-note">
                            If nothing happened, you can email me directly at{" "}
                            <a
                              href="mailto:migchaud007@gmail.com"
                              className="sent-link"
                            >
                              migchaud007@gmail.com
                            </a>
                          </span>
                        </span>
                      )}

                    </div>


                  </div>

                  <div className="form-right">

                    <label className="form-row">

                      <span className="form-label">Message</span>

                      <textarea name="message"
                      rows="10"
                      className="form-textarea"
                      placeholder="Write your message..."
                      required />

                    </label>
                    
                  </div>
                  
                </div>
              </form>

            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Contact;
