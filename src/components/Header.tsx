import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import css from "@emotion/css"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

interface HeaderData {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

//const styles = css(tw`bg-indigo`)
const styles = css`
  border: 4px solid red;
`
const StyledHeader = styled.header`
  ${tw`bg-blue text-red`}
`

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
    <StyledHeader>
      test
      <div css={css(tw`bg-black`)}>BLUE</div>
      <Link to="/">
        <h1>{data.site.siteMetadata.title}</h1>
      </Link>
    </StyledHeader>
  )
}

export default Header
