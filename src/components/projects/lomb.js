import React from "react"
import styled from "styled-components"
import image1 from "../../images/lomb1.png"
import image2 from "../../images/lomb2.png"
// import pdf1 from "../../images/lomb.pdf"

const ProjectContainer = styled.div`
  margin-top: 20px;
  display: flex;
  background-color: #fff;
  padding: 10px;
  margin-left: auto;
  max-width: 800px;
  border-radius: 5px;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
  justify-content: space-between;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`

const ImageContainer = styled.div`
  width: 50%;
  // padding: 10px;
  flex-direction: column;

  @media (max-width: 700px) {
    width: 100%;
  }
`
const TextContainer = styled.div`
  width: 48%;
  // padding: 10px;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 700px) {
    width: 100%;
  }
`

const Img = styled.img`
  width: 100%;
`
const Heading = styled.h3`
  font-size: 24px;
  padding: 10px;
  text-align: center;
  font-weight: 100;
`

export default function Lomb() {
  return (
    <ProjectContainer>
      <ImageContainer>
        <Img src={image1} alt="" />
        <Img src={image2} alt="" />
      </ImageContainer>
      <TextContainer>
        <Heading>Exoplanet detection</Heading>
        <p className="p-text">
          One common method of planet detection is measuring the radial velocity
          of a star, deduced from the redshift of its emitted light. However
          incomplete data causes problems, a result of bad weather, the day
          night cycle, and downtime and maintenance on equipment. Statistical
          tools such as a Lomb-Scagle periodogram uneven time series like this.
          The figures show actual measurements over a period of about 10 years
          of{" "}
          <a
            href="https://en.wikipedia.org/wiki/HD_102117"
            target="_blank"
            rel="noreferrer"
          >
            HD 102117
          </a>{" "}
          (top), a star about 130 lightyears from Earth, and the resolved folded
          periodogram (bottom) showing that it hosts a close-in planet with an
          orbital period of 20 days.
          {/* Full description of the technique{" "} */}
          {/* <a href={pdf1}>here</a>. */}
        </p>
      </TextContainer>
    </ProjectContainer>
  )
}
