import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import tw from "tailwind.macro"

type SiteFooterDataProps = {
  site: {
    siteMetadata: {
      github: string
    }
  }
}

const SiteFooter: React.FunctionComponent = props => {
  const data: SiteFooterDataProps = useStaticQuery(graphql`
    query SiteFooterQuery {
      site {
        siteMetadata {
          github
        }
      }
    }
  `)

  const {
    site: {
      siteMetadata: { github },
    },
  } = data

  return (
    <footer css={tw`bg-gray-100 mt-12 py-12`}>
      <div css={tw`max-w-lg mx-auto flex justify-end`}>
        <a
          css={tw`text-black font-bold no-underline`}
          href={github}
          target="_blank"
          rel="noopen nofollow"
        >
          Github
        </a>
      </div>
    </footer>
  )
}

export default SiteFooter
