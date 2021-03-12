import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {
  const [counter, setCounter] = React.useState(0)
  const [running, setRunning] = React.useState(true)

  React.useEffect(() => {
    let interval

    if (running) {
      interval = setInterval(() => setCounter(x => x + 1), 100)
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [running])
  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div style={{}}>
        <div
          style={{
            display: "flex",
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`,
          }}
        >
          <h1 style={{ margin: 0, marginRight: "1rem" }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
          </h1>
          <div style={{ display: "flex", alignItems: "center" }}>
            <button
              onClick={() => setRunning(x => !x)}
              style={{ marginRight: "1rem" }}
            >
              {running ? "Pause" : "Play"}
            </button>
            <div
              style={{
                display: "inline-block",

                color: "white",
                fontSize: 30,
                fontWeight: "bold",
              }}
            >
              {counter / 10}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
