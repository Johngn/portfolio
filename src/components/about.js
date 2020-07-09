import React from "react"

import face from "../images/face.jpeg"

export default function About() {
  return (
    <section id="about" class="container">
      <h1>About</h1>
      <div class="row">
        <div class="col-md-6">
          <div class="face-image">
            <img src={face} alt="" />
          </div>
        </div>
        <div class="col-md-6">
          <p>
            My educational background is in physics and astronomy. I have a BSc
            in Astronomy and Planetary science from the Open University, and an
            MSc in Astrophysics from Lund University. I can work with React,
            Vue, HTML/CSS, SASS, Bootstrap, JavaScript and Git.
          </p>
        </div>
      </div>
    </section>
  )
}