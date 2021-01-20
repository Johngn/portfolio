import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Showcase from "../components/showcase"
import Projects from "../components/projects"

import "../css/style.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Showcase />
    <Projects />
  </Layout>
)

export default IndexPage
