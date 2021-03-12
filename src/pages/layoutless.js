import * as React from "react"
import { Link, graphql } from "gatsby"

const IndexPage = ({ data, path }) => {
  return (
    <>
      <h1>This page has no layout, boo shame.</h1>
      <p>
        <Link to="/">Back to index</Link> <br />
      </p>
      <p>
        You're currently on the page "{path}" which was built on{" "}
        {data.site.buildTime}.
      </p>
    </>
  )
}

export default IndexPage

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
