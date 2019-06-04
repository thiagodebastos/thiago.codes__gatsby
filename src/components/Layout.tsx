import * as React from "react"
import { Global, css } from "@emotion/core"
import { SiteNav, SiteFooter } from "./"
import { globalStyles } from "../utils"
import tw from "tailwind.macro"

const Layout: React.FunctionComponent = props => {
  return (
    <div css={tw`min-h-screen flex flex-col`}>
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
