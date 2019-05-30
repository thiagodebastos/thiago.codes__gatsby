import * as React from "react"
import { SiteNav } from "./"

const Layout: React.FunctionComponent = props => {
  return (
    <div>
      <SiteNav />
      <div>{props.children}</div>
    </div>
  )
}

export default Layout
