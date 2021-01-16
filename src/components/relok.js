import React from "react"
import relokvid from "../videos/relok.mp4"

export default function Relok() {
  return (
    <div className="project-container">
      <div className="project-row-item">
        <video className="relok-video" controls>
          <source src={relokvid} />
          <track default kind="captions" src={relokvid} />
        </video>
      </div>
      <div className="project-row-item">
        <p className="p-text">
          Large B2B marketplace for construction companies in Germany. I was the
          lead front-end developer on this project, from design to launch.
        </p>
      </div>
    </div>
  )
}
