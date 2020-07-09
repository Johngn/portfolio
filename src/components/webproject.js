import React from "react"

export default function Webproject({ link, text, image }) {
  return (
    <div className="row" style={{ margin: "50px 0" }}>
      <div className="col-md-6">
        <div className="gutter-fix">
          <a href={link}>
            <img className="imgs" src={image} alt="" />
          </a>
        </div>
      </div>
      <div className="col-md-6">
        <p>{text}</p>
      </div>
    </div>
  )
}
