import React from "react"
import styled from "styled-components"
import planetvideo1 from "../../videos/single_planet_1200.mp4"
import planetvideo2 from "../../videos/double_planet2_600.mp4"

const Container = styled.div`
  margin-top: 40px;
  display: flex;
  background-color: #fff;
  padding: 30px;
  margin-left: auto;
  max-width: 1000px;
  border-radius: 5px;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
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

export default function Planetcollider() {
  return (
    <Container>
      <Leftdiv>
        <Heading>Hydrodynamical Planet Simulation</Heading>
        <Video controls>
          <source src={planetvideo1} type="video/mp4" />
          <track default kind="captions" src={planetvideo1} />
        </Video>
        <p className="p-text">
          Hydrodynamical simulation of a planet spinning on its own axis
          (above), and two planets colliding (right). The planets are composed
          of 1200 particles, each with its own velocity, density, pressure and
          energy. The differential equations of state were integrated forward by
          steps to produce the results shown. The simulation relies on
          smoothed-particle hydrodynamics, which reduces the computational
          complexity of the task by restricting each particles influence to only
          those others that are closest to it. The code can be found at{" "}
          <a
            href="https://github.com/Johngn/planetcollider"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/Johngn/planetcollider
          </a>
        </p>
      </Leftdiv>
      <Rightdiv>
        <Video controls>
          <source src={planetvideo2} type="video/mp4" />
          <track default kind="captions" src={planetvideo2} />
        </Video>
      </Rightdiv>
    </Container>
  )
}
