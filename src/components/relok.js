import React from "react"
import relokvid from "../videos/relok.mp4"

export default function Relok() {
  return (
    <div class="row">
      <div class="col-md-6">
        <video class="relok-video" controls>
          <source src={relokvid} type="video/mp4" />
          <track default kind="captions" srclang="en" src={relokvid} />
        </video>
      </div>
      <div class="col-md-6">
        <p>
          Large B2B marketplace for construction companies in Germany. I was the
          sole front-end developer on this project, from design to launch.
        </p>
      </div>
    </div>
  )
}
