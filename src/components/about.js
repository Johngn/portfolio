import React from "react"

import face from "../images/face.jpeg"

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-container">
          <div className="about-image-container">
            <div className="face-image">
              <img src={face} alt="" />
            </div>
          </div>
          <div className="about-row-item">
            <p className="p-text">
              My educational background is in physics and astronomy. I have a
              BSc in Astronomy and Planetary science from the Open University,
              and an MSc in Astrophysics from Lund University. I have experience
              using HTML/CSS, JavaScript, Python, C/C++, R.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
