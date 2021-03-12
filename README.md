This code accompanies the article []() demonstrating use of Gatsby's `wrapPageElement` for persisting components across routes.

[Live Demo](https://miles-crighton.github.io/gatsby-persistent-ui/)

# Quick Implementation

Assign a React Component to the static `Layout` property on a page component. This will be the persistent component, make sure it renders its children.

```jsx
import Layout from "../components/layout"

const IndexPage = () => {
  return ...
}

IndexPage.Layout = Layout
export default IndexPage
```

Add the code below to your `gatsby-browser.js` and `gatsby-ssr.js`

```jsx
export function wrapPageElement({ element, props }) {
  const Layout = element.type.Layout ?? React.Fragment
  return <Layout {...props}>{element}</Layout>
}
```

## Module Summaries

[src/components/header.js](https://github.com/miles-crighton/gatsby-persistent-ui/blob/master/src/components/header.js) -- Includes a timer implementation to show how the component's state is consistent across routes

[src/components/layout.js](https://github.com/miles-crighton/gatsby-persistent-ui/blob/master/src/components/layout.js) -- Gatsby's starter layout that wraps children in a header and footer.

[src/pages/index.js](https://github.com/miles-crighton/gatsby-persistent-ui/blob/master/src/pages/index.js) -- The primary page containing a graphql query, revealing that props are correctly added to page components

[src/pages/typed.tsx](https://github.com/miles-crighton/gatsby-persistent-ui/blob/master/src/pages/typed.tsx) -- Similar to index but adds some page prop types
