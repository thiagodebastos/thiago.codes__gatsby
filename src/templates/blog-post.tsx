import * as React from "react"
import Markdown from "react-markdown"
import { graphql } from "gatsby"
import Img, { FluidObject } from "gatsby-image"
import { Layout } from "../components"
import { formatDate } from "../utils"
import tw from "tailwind.macro"

type Banner = {
  extension: string
  publicURL: string
  childImageSharp: {
    fluid: FluidObject
  } | null
}

interface BlogPostWithData {
  children: React.ReactElement[]
  data: {
    markdownRemark: {
      html: string
      fields: {
        title: string
        date: string
        banner: Banner
        bannerCredit: string
        description: string
        readingTime: {
          text: string
        }
      }
    }
  }
}

export default ({ data }: BlogPostWithData): React.ReactNode => {
  const {
    html,
    fields: { title, date, banner, bannerCredit, description, readingTime },
  } = data.markdownRemark

  function renderBanner(banner: Banner): React.ReactNode {
    const { childImageSharp, publicURL, extension } = banner

    if (banner) {
      if (!childImageSharp && extension === "svg") {
        return <img src={publicURL} width="100%" />
      }
      if (childImageSharp) {
        return <Img fluid={childImageSharp.fluid} />
      }
    }
  }

  return (
    <Layout noBgColor>
      <main css={tw`flex flex-col flex-auto px-8 text-cyan-900`}>
        <article css={tw`max-w-xl self-center w-full leading-normal`}>
          <header>
            <h1 css={tw`text-3xl`}>{title}</h1>
            <div>
              <small>{formatDate(date)}</small> &middot;{" "}
              <small>{readingTime.text}</small>
            </div>
            <div>{description && <small>{description}</small>}</div>
            {renderBanner(banner)}
            <div>{bannerCredit && <Markdown>{bannerCredit}</Markdown>}</div>
          </header>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <footer>article footer</footer>
        </article>
      </main>
      <footer>blog post footer</footer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query blogPostQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      fields {
        title
        date
        description
        readingTime {
          text
        }
        bannerCredit
        banner {
          extension
          publicURL
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`
