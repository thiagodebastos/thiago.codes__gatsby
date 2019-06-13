import * as React from "react"
import { Global, css } from "@emotion/core"
import { SiteNav, SiteFooter } from "./"
import { globalStyles } from "../utils"
import tw from "tailwind.macro"

interface LayoutProps {
  noBgColor?: true
}

const Layout: React.FunctionComponent<LayoutProps> = props => {
  return (
    <div
      css={[
        tw`min-h-screen flex flex-col`,
        !props.noBgColor && tw`bg-gray-100`,
      ]}
    >
      <Global
        styles={css`
          ${globalStyles}
        `}
      />
      <SiteNav />
      {props.children}
      <SiteFooter />
    </div>
  )
}

export default Layout
