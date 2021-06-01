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

const LeftDiv = styled.div`
  width: 50%;
  padding: 10px;
  flex-direction: column;
`
const RightDiv = styled.div`
  width: 48%;
  padding: 10px;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default function Intro() {
  return (
    <IntroContainer>
      <div className="container">
        <LeftDiv></LeftDiv>
        <RightDiv>{/* <Heading>Exoplanet detection</Heading> */}</RightDiv>
        <p className="p-text">
          My educational background is in physics and astronomy. I have a BSc in
          Astronomy and Planetary science from the Open University, and an MSc
          in Astrophysics from Lund University. My masters thesis is titled "The
          Effect of Gravitational Encounters on Binary Planetestimals", and can
          be read <a href={pdf1}>here</a>. I have experience using HTML/CSS,
          JavaScript, Python. I have spent time in the web development industry,
          and some of my previous work and other projects can be seen below.
        </p>
      </div>
    </IntroContainer>
  )
}
