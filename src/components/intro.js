import React from "react"
import styled from "styled-components"

import pdf1 from "../images/thesis.pdf"

const IntroContainer = styled.div`
  max-width: 900px;
  margin: auto;
  display: flex;
  padding: 10px;
  justify-content: space-between;
`

// const LeftDiv = styled.div`
//   width: 50%;
//   padding: 10px;
//   flex-direction: column;
// `
// const RightDiv = styled.div`
//   width: 48%;
//   padding: 10px;
//   flex-direction: column;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `

export default function Intro() {
  return (
    <IntroContainer>
      <div className="container">
        <p className="p-text intro-text">
          I am a web developer with an educational background in physics and
          astronomy. I have an MSc in Astrophysics from Lund University and a
          BSc in Astronomy and Planetary science from the Open University. My
          masters thesis is titled "The Effect of Gravitational Encounters on
          Binary Planetestimals", and can be read <a href={pdf1}>here</a>. I
          have experience using HTML/CSS, JavaScript, Python, React/Redux, and
          many other web technologies. Some of my previous work and other
          projects can be seen here:
        </p>
      </div>
    </IntroContainer>
  )
}
