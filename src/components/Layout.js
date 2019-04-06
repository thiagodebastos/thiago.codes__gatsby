import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import { Global, css } from "@emotion/core"
import PropTypes from "prop-types"
import Header from "./Header"

export const globalStyles = css`
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  }
`

function Layout({ data, frontmatter = {}, children }) {
  const {
    site: {
      siteMetadata,
      siteMetadata: { description: siteDescription, keywords: siteKeywords },
    },
  } = data

  const {
    keywords = siteKeywords,
    description = siteDescription,
    //title = config.siteTitle,
  } = frontmatter

  return (
    <>
      <Global styles={globalStyles} />
      <Header>Site header</Header>
      <main>{children}</main>
    </>
  )
}

export default function LayoutWithSiteData(props) {
  return (
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              title
              description
              keywords
            }
          }
        }
      `}
      render={data => <Layout data={data} {...props} />}
    />
  )
}

Layout.propTypes = {
  data: PropTypes.object,
  frontmatter: PropTypes.object,
}
