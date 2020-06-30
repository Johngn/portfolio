import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default function Contact() {
  return (
    <section
      style={{
        backgroundColor: "#222",
        color: "#fff",
        padding: "80px 0 150px 0",
      }}
    >
      <div class="container">
        <h1
          style={{
            padding: "40px 0 50px 0",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          Contact
        </h1>

        <div class="row">
          <div class="col-md-6">
            <div>
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ marginRight: "20px", fontSize: "23px" }}
              />
              jgillan@protonmail.com
            </div>
            <p>
              <FontAwesomeIcon
                icon={faPhoneAlt}
                style={{
                  marginRight: "20px",
                  fontSize: "23px",
                  marginTop: "20px",
                }}
              />
              +46 076 037 5553
            </p>

            <div>
              <a class="brand-icon" href="https://github.com/Johngn">
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{
                    color: "#fff",
                    fontSize: "35px",
                    marginRight: "20px",
                  }}
                />
              </a>

              <a href="https://www.linkedin.com/in/john-gillan-a7682a151/">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ color: "#fff", fontSize: "35px" }}
                />
              </a>
            </div>
          </div>

          <div class="col-md-6">
            <p>Leave a message:</p>
            <form data-netlify="true" name="contact" method="POST">
              <div class="form-row">
                <div class="col">
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    placeholder="Name"
                    required
                  />
                </div>
                <div class="col">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    class="form-control"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <br />
              <div class="form-group">
                <textarea
                  id="message"
                  class="form-control"
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
                class="btn btn-dark"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
