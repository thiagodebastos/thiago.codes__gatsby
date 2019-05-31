import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

interface MenuItem {
  name: string
  link: string
  external: boolean
}

interface NavData {
  site: {
    siteMetadata: {
      menuItems: Array<MenuItem>
    }
  }
}

const Nav = styled.nav`
  ${tw`border-black border font-sans`}
`

const NavItemList = styled.ul`
  ${tw`list-none ml-auto flex flex-grow justify-around px-2 py-4 text-xs`}
`

const linkStyles = css`
  ${tw`hover:text-cyan no-underline font-bold text-black`}
  transition: color 0.25s;
`

const NavItem: React.FunctionComponent<MenuItem> = ({
  name,
  link,
  external,
}) => (
  <li>
    {external ? (
      <a href={link} target="_blank" rel="noopener noreferrer" css={linkStyles}>
        {name}
      </a>
    ) : (
      <Link to={link} css={linkStyles}>
        {name}
      </Link>
    )}
  </li>
)

const SiteNav: React.FunctionComponent = () => {
  const data: NavData = useStaticQuery(graphql`
    query SiteNavQuery {
      site {
        siteMetadata {
          menuItems {
            name
            link
            external
          }
        }
      }
    }
  `)

  const {
    site: {
      siteMetadata: { menuItems },
    },
  } = data

  return (
    <Nav>
      <NavItemList>
        {menuItems.map(el => (
          <NavItem key={el.name} {...el} />
        ))}
      </NavItemList>
    </Nav>
  )
}

export default SiteNav
