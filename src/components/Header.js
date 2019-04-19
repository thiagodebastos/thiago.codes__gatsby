import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import { underConstruction } from "../utils/globalStyles"

export default function Header({ data }) {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <header css={underConstruction}>
          <Link to="/">
            <h1>{data.site.siteMetadata.title}</h1>
          </Link>
        </header>
      )}
    />
  )
}

Header.propTypes = {
  data: PropTypes.object,
}
