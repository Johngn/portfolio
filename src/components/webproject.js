import React from "react"

export default function Webproject({ link, text, image }) {
  return (
    <div className="project-container">
      <div className="project-row-item">
        <div className="">
          <a href={link}>
            <img className="project-img" src={image} alt="" />
          </a>
        </div>
      </div>
      <div className="project-row-item">
        <p className="p-text">{text}</p>
      </div>
    </div>
  )
}
