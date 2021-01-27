import React from "react"
import styled from "styled-components"
import image1 from "../../images/spectrum.jpg"
import image2 from "../../images/cauchy.jpg"
import pdf1 from "../../images/quasar.pdf"

const ProjectContainer = styled.div`
  margin-top: 20px;
  background-color: #fff;
  padding: 10px;
  margin-right: auto;
  max-width: 600px;
  border-radius: 5px;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
`

const Flexcontainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const ImageContainer = styled.div`
  width: 50%;
  padding: 10px;
  flex-direction: column;
`
const TextContainer = styled.div`
  width: 48%;
  padding: 10px;
  flex-direction: column;
`

const Img = styled.img`
  width: 100%;
`

const Img2 = styled.img`
  max-width: 95%;
  //   margin: 100px;
`

const Heading = styled.h3`
  font-size: 24px;
  padding: 10px;
  text-align: center;
  font-weight: 100;
`

export default function Galaxy() {
  return (
    <ProjectContainer>
      <Heading>Measuring the expansion of the universe</Heading>
      <Img2 src={image1} alt="" />
      <Flexcontainer>
        <ImageContainer>
          <Img src={image2} alt="" />
        </ImageContainer>
        <TextContainer>
          <p className="p-text">
            This spectrum is of a{" "}
            <a
              href="https://en.wikipedia.org/wiki/Quasar"
              target="_blank"
              rel="noreferrer"
            >
              quasar
            </a>{" "}
            detected by the Sloan Digital Sky Survey. The expansion of the
            universe can be determined from measurements of the spectra of
            quasars. The further away they are the faster they recede from us,
            indicating that the universe is expanding uniformly in all
            directions. Spectral features such as the MgII line in the spectrum
            shown here can be used to calculate the redshift, and hence speed of
            the galaxy. Measurements of their redshift require some statistical
            analysis to accurately locate the peak of the spectral feature.
            Several optimization techniques and Monte Carlo simulations were
            carried out to reduce the errors in the redshift. Full description{" "}
            <a href={pdf1}>here</a>.
          </p>
        </TextContainer>
      </Flexcontainer>
    </ProjectContainer>
  )
}
