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
  padding: 10px;
  text-align: center;
  font-weight: 100;
`

export default function Floppredictor() {
  return (
    <ProjectContainer>
      <ImageContainer>
        <Img src={image} alt="" />
      </ImageContainer>
      <TextContainer>
        <Heading>Box office predictions</Heading>
        <p className="p-text">
          A machine learing{" "}
          <a
            href="http://flop-predictor-client.s3-website-eu-west-1.amazonaws.com"
            target="_blank"
            rel="noreferrer"
          >
            app
          </a>{" "}
          trained on a dataset from IMDB to calculate the expected box office
          revenue for a film based on a number of inputs. The Flask server is
          hosted on Heroku with a React front-end.
        </p>
      </TextContainer>
    </ProjectContainer>
  )
}
