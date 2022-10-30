import React from "react"
import face from "../images/face.jpeg"

export default function Showcase() {
  return (
    <div className="pimg">
      <div className="face-image">
        <img src={face} alt="" />
      </div>
      <div className="ptext container">
        <div id="slidein">
          <h1 className="showcase-h1">John Gillan</h1>
          <h2 className="showcase-h2">Web development</h2>
        </div>
      </div>
    </div>
  )
}
