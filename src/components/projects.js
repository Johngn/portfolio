import React from "react"
import Relok from "./projects/relok"
import Skyview from "./projects/skyview"
import Bitcoin from "./projects/bitcoin"
import Floppredictor from "./projects/floppredictor"
import Planetcollider from "./projects/planetcollider"
import Solarsystem from "./projects/solarsystem"

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div>
          <h2 className="projects-heading">projects</h2>
        </div>
        <Relok />
        <Skyview />
        <Bitcoin />
        <Floppredictor />
        <Planetcollider />
        <Solarsystem />
      </div>
    </section>
  )
}
