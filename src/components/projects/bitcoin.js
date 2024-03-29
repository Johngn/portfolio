import React from "react"
import styled from "styled-components"
import image from "../../images/bitcoin.png"

const ProjectContainer = styled.div`
  margin-top: 20px;
  display: flex;
  background-color: #fff;
  padding: 10px;
  margin-right: auto;
  max-width: 700px;
  border-radius: 5px;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
  justify-content: space-between;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`

const ImageContainer = styled.div`
  width: 45%;
  padding: 10px;

  @media (max-width: 700px) {
    width: 95%;
  }
`
const TextContainer = styled.div`
  width: 50%;
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

export default function Bitcoin() {
  return (
    <ProjectContainer className="project-container">
      <TextContainer className="full-width">
        <Heading className="full-width">Crypto profit tracker</Heading>
        <p className="p-text">
          A{" "}
          <a
            href="https://coinprofit.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            cryptocurrency profit tracker
          </a>{" "}
          that calculates profit or loss from trading bitcoin. It takes a date
          and the amount of bitcoins bought, and returns the percentage and the
          total dollar value. It can be seen{" "}
        </p>
      </TextContainer>
      <ImageContainer>
        <Img src={image} alt="" />
      </ImageContainer>
    </ProjectContainer>
  )
}
