import * as React from "react"
import { Global, css } from "@emotion/core"
import { SiteNav } from "./"
import { globalStyles } from "../utils"

const Layout: React.FunctionComponent = props => {
  return (
    <div>
      <Global
        styles={css`
          ${globalStyles}
        `}
      />
      <SiteNav />
      <div>{props.children}</div>
    </div>
  )
}

export default Layout
