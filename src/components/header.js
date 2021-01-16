import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="pimg" id="home">
      <nav className="navbar">
        <div className="container">
          <ul className="navbar-ul">
            <li className="nav-item">
              <a id="portfolioLink" className="nav-link" href="#projects">
                projects
              </a>
            </li>
            <li className="nav-item">
              <a id="aboutLink" className="nav-link" href="#about">
                about
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                contact
              </a>
            </li>
          </ul>
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
