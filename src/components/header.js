import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo-wami-light-blue.png"

const Header = ({ siteTitle }) => (
  <div className= "Header">
    <div className= "HeaderGroup">
       <Link to="/"><image src="{logo}" width="30"/> </Link>
       <Link to="#brand-character">Brand Character™</Link>
       <Link to="#design-system">UX/UI Design System</Link>
       <Link to="#product-ux-ui-design">Product Design</Link>
       <Link to="#portfolio">Portfolio</Link>
       <Link to="#contact-form"><button>Let´s Connect</button></Link>
    </div>
    
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
