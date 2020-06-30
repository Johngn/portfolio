import React from "react"

export default function Scienceproject({ video1, video2, text1, text2 }) {
  return (
    <div class="row" style={{ margin: "50px 0" }}>
      <div class="col-md-6">
        <video style={{ width: "100%" }} controls>
          <source src={video1} type="video/mp4" />
          <track default kind="captions" srclang="en" src={video1} />
        </video>
        <p style={{ marginTop: "20px" }}>{text1}</p>
      </div>
      <div class="col-md-6">
        <video style={{ width: "100%" }} controls>
          <source src={video2} type="video/mp4" />
          <track default kind="captions" srclang="en" src={video2} />
        </video>
        <p style={{ marginTop: "20px" }}>{text2}</p>
      </div>
    </div>
  )
}
