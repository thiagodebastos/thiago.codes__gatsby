import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

interface NavData {
  site: {
    siteMetadata: {
      menuItems: Array<{ name: string; link: string }>
    }
  }
}

const Nav = styled.nav`
  ${tw`border-black border font-sans`}
`

const NavItemList = styled.ul`
  ${tw`list-none ml-auto flex flex-grow justify-around px-2 py-4 text-xs`}
`

const NavItem = styled.li``

const NavLink = styled.a`
  ${tw`hover:text-cyan no-underline font-bold text-black `}
  transition: color 0.25s;
`

const SiteNav: React.FunctionComponent = () => {
  const data: NavData = useStaticQuery(graphql`
    query SiteNavQuery {
      site {
        siteMetadata {
          menuItems {
            name
            link
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
          <NavItem key={el.name}>
            <NavLink href={el.link}>{el.name}</NavLink>
          </NavItem>
        ))}
      </NavItemList>
    </Nav>
  )
}

export default SiteNav
