import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        backgroundColor: "#222",
        color: "#fff",
        padding: "80px 0 150px 0",
      }}
    >
      <div className="container">
        <h1
          style={{
            padding: "40px 0 50px 0",
            textAlign: "center",
            textTransform: "uppercase",
          }}
          className="contact-header"
        >
          Contact
        </h1>

        <div className="row">
          <div className="col-md-6">
            <div>
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ marginRight: "20px", fontSize: "23px" }}
              />
              jgillan@protonmail.com
            </div>

            <div>
              <FontAwesomeIcon
                icon={faPhoneAlt}
                style={{
                  marginRight: "20px",
                  fontSize: "23px",
                  marginTop: "20px",
                }}
              />
              +46 076 037 5553
            </div>

            <div>
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{
                  marginRight: "20px",
                  fontSize: "23px",
                  marginTop: "20px",
                }}
              />
              <a
                className="font-icon-link"
                href="https://www.linkedin.com/in/john-gillan-0661aa1b2/"
              >
                Linkedin
              </a>
            </div>

            <div>
              <FontAwesomeIcon
                icon={faGithub}
                style={{
                  marginRight: "20px",
                  fontSize: "23px",
                  marginTop: "20px",
                }}
              />
              <a className="font-icon-link" href="https://github.com/Johngn">
                Github
              </a>
            </div>

            {/* <a
              href="https://github.com/Johngn"
              style={{ textDecoration: "none" }}
            >
              <FontAwesomeIcon icon={faGithub} className="font-icon-link" />
            </a>

            <a href="https://www.linkedin.com/in/john-gillan-0661aa1b2/">
              <FontAwesomeIcon icon={faLinkedin} className="font-icon-link" />
            </a> */}
          </div>

          <div className="col-md-6">
            <p>Leave a message:</p>
            <form data-netlify="true" name="contact" method="POST">
              <div className="form-row">
                <div className="col">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="col">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <br />
              <div className="form-group">
                <textarea
                  id="message"
                  className="form-control"
                  name="message"
                  rows="3"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              <input
                id="btn"
                type="submit"
                name="submit"
                className="btn btn-dark"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
