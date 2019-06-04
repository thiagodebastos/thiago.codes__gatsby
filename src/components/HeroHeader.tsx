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
    <header
      css={tw`bg-gray-100 text-gray-900 px-8 py-4 md:py-32 flex justify-center`}
    >
      <div css={tw`max-w-lg`}>
        <h4 css={tw`w-48 md:w-auto`}>{author}. Developer in Sydney.</h4>
        <h1 css={tw`text-3xl md:text-5xl`}>{description}</h1>
      </div>
    </header>
  )
}

export default HeroHeader
