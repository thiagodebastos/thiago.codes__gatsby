import * as React from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

const Nav = styled.nav`
  ${tw`border-black border`}
`

const NavItemList = styled.ul`
  ${tw`list-none flex flex-grow justify-between px-2 py-4 text-xs`}
`

const NavItem = styled.li``

const NavLink = styled.a`
  ${tw`hover:text-cyan no-underline`}
  transition: color 0.25s;
`

const SiteNav: React.FunctionComponent = () => {
  return (
    <Nav>
      <NavItemList>
        <NavItem>
          <NavLink href="#">WORK</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">WRITING</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">HOBBIES</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">GITHUB</NavLink>
        </NavItem>
      </NavItemList>
    </Nav>
  )
}

export default SiteNav
