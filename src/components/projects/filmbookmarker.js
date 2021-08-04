import React from "react"
import styled from "styled-components"
import image from "../../images/filmbookmarker.png"

const ProjectContainer = styled.div`
  margin-top: 20px;
  display: flex;
  background-color: #fff;
  padding: 10px;
  margin-left: auto;
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
  flex-direction: column;

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

export default function Filmbookmarker() {
  return (
    <ProjectContainer>
      <ImageContainer>
        <Img src={image} alt="" />
      </ImageContainer>
      <TextContainer>
        <Heading>Film Watchlist</Heading>
        <p className="p-text">
          Fullstack{" "}
          <a
            href="https://www.film-marker.com/"
            target="_blank"
            rel="noreferrer"
          >
            Film watchlist app
          </a>{" "}
          which lets you search for and save your favourite films. React
          frontend connected to a Node backend and a MongoDB NoSQL database.
          Search uses an external API to fetch details and posters for films.
          Authentication allows different users to have their own lists.
        </p>
      </TextContainer>
    </ProjectContainer>
  )
}
