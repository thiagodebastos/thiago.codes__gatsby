import * as React from "react"
import { Global } from "@emotion/core"
import Header from "./Header"
import { globalStyles } from "../utils"

const Layout: React.FunctionComponent = props => {
  return (
    <div>
      <Global styles={globalStyles} />
      <div>{props.children}</div>
    </div>
  )
}

export default Layout
