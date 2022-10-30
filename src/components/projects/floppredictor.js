import React from "react"
import styled from "styled-components"
import image from "../../images/flopimg.png"

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

export default function Floppredictor() {
  return (
    <ProjectContainer>
      <ImageContainer>
        <a
          href="http://floppredictor.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <Img src={image} alt="" />
        </a>
      </ImageContainer>
      <TextContainer>
        <p className="p-text">
          Trained on data from IMDB, this app utilises machine learing to
          calculate the expected box office revenue for a film based on a number
          of inputs. The Flask server is hosted on Render with a React
          front-end.
        </p>
      </TextContainer>
    </ProjectContainer>
  )
}
