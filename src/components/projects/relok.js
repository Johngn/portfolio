import React from "react"
import styled from "styled-components"
import relokvid from "../../videos/relok.mp4"
import relokimg from "../../images/relok.jpg"

const RelokContainer = styled.div`
  @media (max-width: 700px) {
    flex-direction: column;
  }

  margin-top: 20px;
  display: flex;
  background-color: #fff;
  padding: 10px;
  margin-right: auto;
  max-width: 900px;
  border-radius: 5px;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
  justify-content: space-between;
`

const VideoContainer = styled.div`
  width: 70%;

  @media (max-width: 700px) {
    width: 100%;
  }
`

const TextContainer = styled.div`
  width: 28%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 700px) {
    width: 100%;
  }
`

const Heading = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
  font-weight: 100;
`

const Video = styled.video`
  width: 100%;
  height: 100%;
`

export default function Relok() {
  return (
    <RelokContainer>
      <TextContainer>
        <Heading>Relok</Heading>
        <p className="p-text">
          Large B2B marketplace for construction companies in Germany. I was the
          lead front-end developer on this project, from design to launch. The
          app is currently behind a paywall, but a demo can be requested{" "}
          <a href="https://www.relok.de" target="_blank" rel="noreferrer">
            here
          </a>
          .
        </p>
      </TextContainer>
      <VideoContainer>
        <Video className="relok-video" poster={relokimg} controls muted>
          <source src={relokvid} />
          <track default kind="captions" src={relokvid} />
        </Video>
      </VideoContainer>
    </RelokContainer>
  )
}
