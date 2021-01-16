import React from "react"

export default function Scienceproject({ video1, video2, text1, text2 }) {
  return (
    <div className="project-container">
      <div className="project-row-item">
        <video className="scienceproject-video" controls>
          <source src={video1} type="video/mp4" />
          <track default kind="captions" src={video1} />
        </video>
        <p className="p-text">{text1}</p>
      </div>
      <div className="project-row-item">
        <video className="scienceproject-video" controls>
          <source src={video2} type="video/mp4" />
          <track default kind="captions" src={video2} />
        </video>
        <p className="p-text">{text2}</p>
      </div>
    </div>
  )
}
