import React from "react"

export default function Webproject({ text, image }) {
  return (
    <div class="row">
      <div class="col-md-6">
        <div class="gutter-fix">
          <img class="imgs" src={image} alt="" />
        </div>
      </div>
      <div class="col-md-6">
        <p>{text}</p>
      </div>
    </div>
  )
}
