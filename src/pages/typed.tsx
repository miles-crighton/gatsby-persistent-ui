import * as React from "react"
import { graphql, Link, PageProps } from "gatsby"

import Layout from "../components/layout"

type DataProps = {
  site: {
    buildTime: string
  }
}

const IndexPage = ({ data, path }: PageProps<DataProps>) => {
  return (
    <>
      <h1>All Hail Typescript</h1>
      <p>
        You're currently on the page "{path}" which was built on{" "}
        {data.site.buildTime}.
      </p>
      <p>
        <Link to="/">Back to index</Link> <br />
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
