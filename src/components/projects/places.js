import React from "react"
import styled from "styled-components"
import image from "../../images/places.png"

const ProjectContainer = styled.div`
  margin-top: 20px;
  display: flex;
  background-color: #fff;
  padding: 10px;
  margin-left: auto;
  max-width: 700px;
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
  padding: 10px;
  flex-direction: column;
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
  padding-bottom: 10px;
  text-align: center;
  font-weight: 100;
`

export default function Places() {
  return (
    <ProjectContainer>
      <ImageContainer>
        <a
          href="https://places-chi.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <Img src={image} alt="" />
        </a>
      </ImageContainer>
      <TextContainer>
        <p className="p-text">
          Inspired by scratch maps, this Next app allows you to mark off
          countries that you've visited. The data is saved on a Planetscale
          MySQL database, with a backend hosted on Vercel. The map integration
          is handled with MapBox and the authentication uses Github OAuth.
        </p>
      </TextContainer>
    </ProjectContainer>
  )
}
