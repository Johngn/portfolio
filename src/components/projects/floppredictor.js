import React from "react"
import styled from "styled-components"
import image from "../../images/flopimg.png"

const ProjectContainer = styled.div`
  margin-top: 20px;
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

export default function Floppredictor() {
  return (
    <ProjectContainer>
      <ImageContainer>
        <Img src={image} alt="" />
      </ImageContainer>
      <TextContainer>
        <Heading>Box office predictions</Heading>
        <p className="p-text">
          Machine learing algorithm trained on a dataset from IMDB to calculate
          the expected box office revenue for a film based on a number of
          inputs. The original data was cleaned and the possible actors and
          directors that the user can choose was restricted to the 500 of each
          category that have been involved with the most films. The model was
          trained with LinearRegression from sklearn.linear_model. The Flask
          server is hosted on Heroku with a React front-end. Viewable{" "}
          <a
            href="http://flop-predictor-client.s3-website-eu-west-1.amazonaws.com"
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
