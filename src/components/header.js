import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header>
    <div className="" id="home">
      <nav className="navbar">
        <div className="container">
          <ul className="navbar-ul">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/about">About</Link>
            </li> */}
            <li className="nav-item">
              <Link to="/contact">Contact</Link>
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
