import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import tw from "tailwind.macro"

interface HeroHeaderData {
  site: {
    siteMetadata: {
      title: string
      description: string
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
        }
      }
    }
  `)

  const {
    site: {
      siteMetadata: { title, description },
    },
  } = data

  console.log(tw`bg-black`)
  return (
    <header css={tw`mx-auto bg-blue-pale px-12 py-20`}>
      <div>
        <h3>Thiago de Bastos. Developer in Sydney.</h3>
        <h1 css={tw`text-5xl`}>{description}</h1>
      </div>
    </header>
  )
}

export default HeroHeader
