import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { underConstruction } from "../utils/globalStyles"

interface HeaderData {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const Header: React.FunctionComponent = () => {
  const data: HeaderData = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header css={underConstruction}>
      <Link to="/">
        <h1>{data.site.siteMetadata.title}</h1>
      </Link>
    </header>
  )
}

export default Header
