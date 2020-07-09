import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/contact"
import About from "../components/about"
import Showcase from "../components/showcase"
import Projects from "../components/projects"

import "../css/bootstrap.css"
import "../css/style.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Showcase />
    <Projects />
    <About />
    <Contact />
  </Layout>
)

export default IndexPage