import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

interface SiteHeaderData {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const SiteHeader: React.FunctionComponent = () => {
  const data: SiteHeaderData = useStaticQuery(graphql`
    query SiteHeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const {
    site: { siteMetadata: title },
  } = data

  return <h1>{data.site.siteMetadata.title}</h1>
}

export default SiteHeader
