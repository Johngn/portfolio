import React from "react"
import styled from "styled-components"
import image1 from "../../images/hr.png"

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
`

const ImageContainer = styled.div`
  width: 55%;
  padding: 10px 0 10px 10px;
  flex-direction: column;
`
const TextContainer = styled.div`
  width: 45%;
  padding: 10px 10px 10px 0;
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

export default function Gaia() {
  return (
    <ProjectContainer>
      <ImageContainer>
        <Img src={image1} alt="" />
      </ImageContainer>
      <TextContainer>
        <Heading>Gaia spacecraft</Heading>
        <p className="p-text">
          <a
            href="https://en.wikipedia.org/wiki/Gaia_(spacecraft)"
            target="_blank"
            rel="noreferrer"
          >
            Gaia
          </a>{" "}
          is a space telescope specialising in extremely accurate measurements
          of the properties of stars in the Milky Way, including position,
          velocity, temperature and luminosity. It is in orbit around the{" "}
          <a
            href="https://en.wikipedia.org/wiki/Lagrange_point"
            target="_blank"
            rel="noreferrer"
          >
            L2 Lagrange point
          </a>{" "}
          of the Earth-Sun system which keeps it permanantly in the Earths
          shadow. The data is open source and is available from an SQL server
          run by the European Space Agency. This image is a{" "}
          <a
            href="https://en.wikipedia.org/wiki/Hertzsprung%E2%80%93Russell_diagram"
            target="_blank"
            rel="noreferrer"
          >
            Hertzsprung–Russell diagram
          </a>{" "}
          created from data from Gaia. It plots the temperature and luminosity
          of millions of stars and contains a lot of information about the
          life-cycle of stars.
        </p>
      </TextContainer>
    </ProjectContainer>
  )
}
