import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/contact"

import "../css/style.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Contact />
  </Layout>
)

export default IndexPage
