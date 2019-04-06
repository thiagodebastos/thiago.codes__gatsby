import React from "react"
import { StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

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
        <header>
          <h1>{data.site.siteMetadata.title}</h1>
        </header>
      )}
    />
  )
}

Header.propTypes = {
  data: PropTypes.object,
}
