import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

const IndexPage = ({ data, path }) => {
  return (
    <>
      <h1>
        Notice as you change routes with the link below, the timer in the header
        will persist.
      </h1>
      <p>
        <Link to="/typed/">The TypeScript Page</Link> <br />
      </p>
      <p>
        You're currently on the page "{path}" which was built on{" "}
        {data.site.buildTime}.
      </p>
    </>
  )
}

IndexPage.Layout = Layout

export default IndexPage

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
