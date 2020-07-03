import React from "react"

export default function Webproject({ link, text, image }) {
  return (
    <div class="row">
      <div class="col-md-6">
        <div class="gutter-fix">
          <a href={link}>
            <img class="imgs" src={image} alt="" />
          </a>
        </div>
      </div>
      <div class="col-md-6">
        <p>{text}</p>
      </div>
    </div>
  )
}
