import * as React from "react"
import { Link, PageProps } from "gatsby"

import Layout from "../components/layout"

type FCWithLayout<T> = React.FC<T> & { Layout: React.FC<PageProps> }

interface IndexPageProps extends PageProps {
  funky: boolean
}

const IndexPage: FCWithLayout<IndexPageProps> = props => {
  return (
    <>
      <p>All Hail Typescript</p>
      <p>
        <Link to="/">Back to index</Link> <br />
      </p>
    </>
  )
}

IndexPage.Layout = Layout

export default IndexPage
