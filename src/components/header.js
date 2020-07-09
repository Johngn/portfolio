import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="pimg" id="home">
      <nav className="navbar navbar-expand fixed-top navbar-dark">
        <div className="container">
          <div style={{ width: "1180px" }}>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a id="homeLink" className="nav-link" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a id="portfolioLink" className="nav-link" href="#portfolio">
                    projects
                  </a>
                </li>
                <li className="nav-item">
                  <a id="aboutLink" className="nav-link" href="#about">
                    about
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a id="contactLink" className="nav-link" href="#contact">
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
