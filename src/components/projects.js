import React from "react"
import Relok from "./projects/relok"
import Skyview from "./projects/skyview"
import Bitcoin from "./projects/bitcoin"
import Floppredictor from "./projects/floppredictor"
import Planetcollider from "./projects/planetcollider"
import Solarsystem from "./projects/solarsystem"
import Eccentricity from "./projects/eccentricity"
import Lomb from "./projects/lomb"
import Filmbookmarker from "./projects/filmbookmarker"
// import Galaxy from "./projects/galaxy"
// import Gaia from "./projects/gaia"

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div>
          <h2 className="projects-heading">projects</h2>
        </div>
        <Relok />
        <Filmbookmarker />
        <Skyview />
        <Bitcoin />
        <Floppredictor />
        <Planetcollider />
        <Solarsystem />
        <Eccentricity />
        <Lomb />
        {/* <Galaxy /> */}
        {/* <Gaia /> */}
      </div>
    </section>
  )
}
