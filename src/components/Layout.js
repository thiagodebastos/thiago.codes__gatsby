import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import Header from "./Header"
import { globalStyles } from "../utils"

function Layout({ children }) {
  return (
    <div>
      <Global styles={globalStyles} />
      <Header />
      <div>{children}</div>
    </div>
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
