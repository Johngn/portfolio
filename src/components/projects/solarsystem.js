import React from "react"
import styled from "styled-components"
import solarsystemvideo1 from "../../videos/solarsystemouter.mp4"
import solarsystemvideo2 from "../../videos/solarsysteminnerBH3D.mp4"

const Container = styled.div`
  margin-top: 20px;
  background-color: #fff;
  padding: 10px;
  margin-left: auto;
  max-width: 1000px;
  border-radius: 5px;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Leftdiv = styled.div`
  width: 40%;
`
const Rightdiv = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
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

export default function Solarsystem() {
  return (
    <Container>
      <Heading>N-body solar system simulation</Heading>
      <FlexContainer>
        <Leftdiv>
          <Video controls>
            <source src={solarsystemvideo1} type="video/mp4" />
            <track default kind="captions" src={solarsystemvideo1} />
          </Video>
          <p className="p-text">
            N-body simulation of the solar system. This was created using a
            custom made 4th order Runge-Kutta integrator. The initial positions
            and velocities of the solar system bodies were found with astropy.
            On the right the same N-body code is used to simulate the effect of
            a black hole flying through the inner solar system. Massive
            distruption is caused, including the ejection of Mars from the solar
            system. The code can be found at{" "}
            <a
              href="https://github.com/Johngn/solarsystem"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/Johngn/solarsystem
            </a>
          </p>
        </Leftdiv>
        <Rightdiv>
          <Video controls>
            <source src={solarsystemvideo2} type="video/mp4" />
            <track default kind="captions" src={solarsystemvideo2} />
          </Video>
        </Rightdiv>
      </FlexContainer>
    </Container>
  )
}
