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
        Notice as you change routes with the link below, the timer in the header
        will persist.
      </h1>
      <p>
        <Link to="/typed/">The TypeScript implementation</Link> <br />
      </p>
    </>
  )
}

IndexPage.Layout = Layout

export default IndexPage
