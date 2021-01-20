import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-container">
          <div className="contact-row-item">
            <div className="contact-item-container">
              <FontAwesomeIcon icon={faEnvelope} className="fontawesome-icon" />
              jgillan@protonmail.com
            </div>
            <div className="contact-item-container">
              <FontAwesomeIcon icon={faPhoneAlt} className="fontawesome-icon" />
              +46 076 037 5553
            </div>
            <div className="contact-item-container">
              <FontAwesomeIcon icon={faLinkedin} className="fontawesome-icon" />
              <a
                className="font-icon-link"
                href="https://www.linkedin.com/in/john-gillan-0661aa1b2/"
              >
                Linkedin
              </a>
            </div>
            <div className="contact-item-container">
              <FontAwesomeIcon icon={faGithub} className="fontawesome-icon" />
              <a className="font-icon-link" href="https://github.com/Johngn">
                Github
              </a>
            </div>
          </div>

          <div className="contact-row-item">
            <p className="contact-form-text">Leave a message:</p>
            <form
              className="contact-form"
              data-netlify="true"
              name="contact"
              method="POST"
            >
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  placeholder="Name"
                  required
                />
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="Email"
                  required
                />
              </div>

              <textarea
                id="message"
                className="form-textarea"
                name="message"
                rows="3"
                placeholder="Your message"
                required
              ></textarea>

              <input
                id="btn"
                type="submit"
                name="submit"
                className="form-submit-button"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
