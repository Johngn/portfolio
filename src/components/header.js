import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div class="pimg" id="home">
      <nav class="navbar navbar-expand fixed-top navbar-dark">
        <div class="container">
          <div style={{ width: "1180px" }}>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                  <a id="homeLink" class="nav-link" href="#home">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a id="portfolioLink" class="nav-link" href="#portfolio">
                    projects
                  </a>
                </li>
                <li class="nav-item">
                  <a id="aboutLink" class="nav-link" href="#about">
                    about
                  </a>
                </li>
                {/* <li class="nav-item">
                  <a id="contactLink" class="nav-link" href="#contact">
                    contact
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
