import React from "react"
import styled from "styled-components"
// import planetvideo1 from "../../videos/single_planet_1200.mp4"
import planetvideo2 from "../../videos/double_planet2_600.mp4"

const Container = styled.div`
  margin-top: 20px;
  background-color: #fff;
  padding: 10px;
  margin-right: auto;
  max-width: 700px;
  border-radius: 5px;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

// const Leftdiv = styled.div`
//   width: 40%;
//   display: flex;
//   align-items: center;
// `
const TextContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Rightdiv = styled.div`
  width: 50%;
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

export default function Planetcollider() {
  return (
    <Container>
      <FlexContainer>
        <TextContainer>
          <Heading>Hydrodynamical planet simulation</Heading>
          {/* <Video controls>
            <source src={planetvideo1} type="video/mp4" />
            <track default kind="captions" src={planetvideo1} />
          </Video> */}
          <p className="p-text">
            Hydrodynamical simulation of two planets colliding. The planets are
            composed of 1200 particles, each with its own velocity, density,
            pressure and energy. The simulation relies on smoothed-particle
            hydrodynamics, which reduces the computational complexity of the
            task by restricting each particles influence to only those others
            that are closest to it. The code can be found{" "}
            <a
              href="https://github.com/Johngn/planetcollider"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
          </p>
        </TextContainer>
        <Rightdiv>
          <Video controls>
            <source src={planetvideo2} type="video/mp4" />
            <track default kind="captions" src={planetvideo2} />
          </Video>
        </Rightdiv>
      </FlexContainer>
    </Container>
  )
}
