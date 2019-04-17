import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import { Global, css } from "@emotion/core"
import PropTypes from "prop-types"
import Header from "./Header"

export const globalStyles = css`
  html {
    font-size: 16px;
  }

  body {
    background-color: white;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    -moz-osx-font-smoothing: auto;
    -webkit-font-smoothing: auto;
    font-smooth: never;
    font-weight: 400;
    line-height: 1.45;
    color: #333;
  }

  p {
    margin-bottom: 1.25em;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.75rem 0 1rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    font-weight: 400;
    line-height: 1.15;
  }

  h1 {
    margin-top: 0;
    font-size: 2.488em;
  }

  h2 {
    font-size: 2.074em;
  }

  h3 {
    font-size: 1.728em;
  }

  h4 {
    font-size: 1.44em;
  }

  h5 {
    font-size: 1.2em;
  }

  small,
  .text_small {
    font-size: 0.833em;
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
