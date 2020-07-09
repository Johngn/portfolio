import React from "react"
import relokvid from "../videos/relok.mp4"

export default function Relok() {
  return (
    <div className="row" style={{ margin: "50px 0" }}>
      <div className="col-md-6">
        <video className="relok-video" controls>
          <source src={relokvid} />
          <track default kind="captions" src={relokvid} />
        </video>
      </div>
      <div className="col-md-6">
        <p>
          Large B2B marketplace for construction companies in Germany. I was the
          sole front-end developer on this project, from design to launch.
        </p>
      </div>
    </div>
  )
}
