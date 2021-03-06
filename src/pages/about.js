import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"

import "../css/style.css"

const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <About />
  </Layout>
)

export default IndexPage
