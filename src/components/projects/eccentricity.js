import React from "react"
import styled from "styled-components"
import genga1 from "../../videos/genga1.mp4"
import gengapdf from "../../images/ecc1.pdf"

const Container = styled.div`
  margin-top: 20px;
  background-color: #fff;
  padding: 10px;
  margin-right: auto;
  max-width: 800px;
  border-radius: 5px;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 700px) {
    flex-direction: column;
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

const Rightdiv = styled.div`
  width: 60%;
  display: flex;
  align-items: center;

  @media (max-width: 700px) {
    width: 100%;
  }
`

const Video = styled.video`
  margin: 0 auto 20px auto;
  width: 90%;
  display: flex;
`

const Heading = styled.h3`
  font-size: 24px;
  padding: 10px;
  text-align: center;
  font-weight: 100;
`

export default function Eccentricity() {
  return (
    <Container>
      <FlexContainer>
        <TextContainer>
          <Heading>Planets in a gas disc</Heading>
          <p className="p-text">
            This project was carried out at Lund University in the summer of
            2020 in collaboration with Michiel Lambrechts and Sebastian Lorek.
            We were investigating eccentricity damping in the early solar system
            by simulating Mars sized bodies interacting with each other in orbit
            around the Sun. Code is based on{" "}
            <a
              href="https://bitbucket.org/sigrimm/genga/src/master/"
              target="_blank"
              rel="noreferrer"
            >
              Genga
            </a>{" "}
            which is a GPU implementation of an N-body integrator written in
            CUDA C and designed to run on NVIDIA GPUs. We compared two
            prescriptions from the literature designed to mimic the effects of
            tidal forces from the gas disc on the orbital evolution of the
            planets. More information <a href={gengapdf}>here</a>.
          </p>
        </TextContainer>
        <Rightdiv>
          <Video controls>
            <source src={genga1} type="video/mp4" />
            <track default kind="captions" src={genga1} />
          </Video>
        </Rightdiv>
      </FlexContainer>
    </Container>
  )
}
