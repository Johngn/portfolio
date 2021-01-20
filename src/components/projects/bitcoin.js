import React from "react"
import styled from "styled-components"
import image from "../../images/bitcoin.png"

const ProjectContainer = styled.div`
  margin-top: 40px;
  display: flex;
  background-color: #fff;
  padding: 30px;
  margin-right: auto;
  max-width: 800px;
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

export default function Bitcoin() {
  return (
    <ProjectContainer>
      <TextContainer>
        <Heading>Bitcoin Profit Tracker</Heading>
        <p className="p-text">
          A bitcoin profit tracker that calculates profit or loss from trading
          bitcoin. It takes a date and the amount of bitcoins bought, and
          returns the percentage and the total dollar value. It can be seen{" "}
          <a
            href="https://silly-mcnulty-d65d60.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
        </p>
      </TextContainer>
      <ImageContainer>
        <Img src={image} alt="" />
      </ImageContainer>
    </ProjectContainer>
  )
}
