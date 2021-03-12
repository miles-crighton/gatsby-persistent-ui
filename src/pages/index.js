import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"

const IndexPage = props => {
  const data = useStaticQuery(graphql`
    query SiteDescriptionQuery {
      site {
        siteMetadata {
          description
        }
      }
    }
  `)
  console.log(props, data)
  return (
    <>
      <h1>
        This is an example for <a>Persistent UI with Gatsby</a>
      </h1>
      <p>
        <Link to="/typed/">The TS page</Link> <br />
      </p>
    </>
  )
}

IndexPage.Layout = Layout

export default IndexPage
