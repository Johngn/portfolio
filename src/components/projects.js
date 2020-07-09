import React from "react"
import Relok from "./relok"
import Webproject from "./webproject"
import bitcoinimage from "../images/bitcoin.jpg"
import skyviewimage from "../images/skyview.jpg"
import Scienceproject from "./scienceproject"
import planetvideo1 from "../videos/single_planet_1200.mp4"
import planetvideo2 from "../videos/double_planet2_600.mp4"
import solarsystemvideo1 from "../videos/solarsystemouter.mp4"
import solarsystemvideo2 from "../videos/solarsysteminnerBH3D.mp4"

export default function Projects() {
  return (
    <section id="portfolio">
      <div className="container">
        <div className="heading">
          <h1>projects</h1>
        </div>
        <Relok />
        <hr />
        <Webproject
          link={"https://johngn.github.io/skyview/"}
          image={skyviewimage}
          text="An app for amateur astronomers that tells you if the weather
          conditions in your area are suitable for sky viewing. It gives a graph
          of cloud cover, humidity, and wind speed for the next 5 nights."
        />
        <hr />
        <Webproject
          link={"https://silly-mcnulty-d65d60.netlify.app/"}
          image={bitcoinimage}
          text="A React app that calculates profit or loss from trading bitcoin. It
          takes a date and the amount of bitcions bought, and returns the
          percentage and the total dollar value."
        />
        <hr />
        <Scienceproject
          video1={planetvideo1}
          text1="Hydrodynamical simulation of a planet spinning on its own axis. The planet is composed of 1200 particles, each with its own velocity, density, pressure and energy. The differential equations of state were integrated forward by steps to produce the results shown. The simulation relies on smoothed-particle hydrodynamics, which reduces the computational complexity of the task by restricting each particles influence to only those others that are closest to it. The code can be found at"
          video2={planetvideo2}
          text2="In this case the same technique was used to simulate two planets colliding. Each planet consists of 600 particles each acting under the influece of those closest to it. A nearest neighbour search was done before a cubic-spine smoothing function weighted the influence of each particle depending on which conditions were satisfied."
        />
        <hr />
        <Scienceproject
          video1={solarsystemvideo1}
          text1="N-body simulation of the solar system. This was created using a custom made 4th order Runge-Kutta integrator. The initial positions and velocities of the solar system bodies were found with astropy. The code can be found at "
          video2={solarsystemvideo2}
          text2="The same N-body code used to simulate the effect of a 0.5 solar mass black hole flying through the inner solar system. Massive distruption is caused, including the ejection of Mars from the solar system."
        />
      </div>
    </section>
  )
}
