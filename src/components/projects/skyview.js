import React from "react"
import styled from "styled-components"
import skyviewimage from "../../images/skyview2.png"

const ProjectContainer = styled.div`
  margin-top: 40px;
  display: flex;
  background-color: #fff;
  padding: 30px;
  margin-left: auto;
  max-width: 900px;
  border-radius: 5px;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
  justify-content: space-between;
`

const ImageContainer = styled.div`
  width: 50%;
  padding: 10px;
  flex-direction: column;
`
const TextContainer = styled.div`
  width: 40%;
  padding: 10px;
  flex-direction: column;
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

export default function Skyview() {
  return (
    <ProjectContainer>
      <ImageContainer>
        <Img src={skyviewimage} alt="" />
      </ImageContainer>
      <TextContainer>
        <Heading>SkyView</Heading>
        <p className="p-text">
          An app for amateur astronomers that tells you if the weather
          conditions in your area are suitable for sky viewing. It gives a graph
          of cloud cover, humidity, and wind speed for the next 5 nights. It can
          be viewed{" "}
          <a
            href="https://silly-mcnulty-d65d60.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
        </p>
      </TextContainer>
    </ProjectContainer>
  )
}
