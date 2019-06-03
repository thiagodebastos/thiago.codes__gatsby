import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import tw from "tailwind.macro"

interface HeroHeaderData {
  site: {
    siteMetadata: {
      title: string
      description: string
      author: string
    }
  }
}

const HeroHeader: React.FunctionComponent = () => {
  const data: HeroHeaderData = useStaticQuery(graphql`
    query HeroHeaderQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  const {
    site: {
      siteMetadata: { title, description, author },
    },
  } = data

  return (
    <header css={tw`bg-cyan text-cyan-pale px-8 py-40`}>
      <div>
        <h3>{author}. Developer in Sydney.</h3>
        <h1 css={tw`text-3xl md:text-5xl`}>{description}</h1>
      </div>
    </header>
  )
}

export default HeroHeader
