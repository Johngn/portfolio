import React from "react"
import styled from "styled-components"
import image from "../../images/skyview.png"

const ProjectContainer = styled.div`
  margin-top: 20px;
  display: flex;
  background-color: #fff;
  padding: 10px;
  margin-right: auto;
  max-width: 900px;
  border-radius: 5px;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
  justify-content: space-between;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`

const ImageContainer = styled.div`
  width: 50%;
  padding: 10px;

  @media (max-width: 700px) {
    width: 95%;
  }
`
const TextContainer = styled.div`
  width: 48%;
  display: flex;
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
  margin-bottom: 10px;
  text-align: center;
  font-weight: 100;
`

export default function Skyview() {
  return (
    <ProjectContainer>
      <ImageContainer>
        <a href="https://skyview.netlify.app/" target="_blank" rel="noreferrer">
          <Img src={image} alt="" />
        </a>
      </ImageContainer>
      <TextContainer>
        <p className="p-text">
          Designed for amateur astronomers, this app tells you if the weather
          conditions in your area are suitable for sky viewing. It gives a graph
          of cloud cover, humidity, and wind speed for the next 5 nights. Made
          with React and Chart.js, it also utilises the Google Maps API to
          autocomplete locations and to convert locations into latitude and
          longitude coordinates.
        </p>
      </TextContainer>
    </ProjectContainer>
  )
}
