import * as React from "react"
import Markdown from "react-markdown"
import { graphql } from "gatsby"
import Img, { FluidObject } from "gatsby-image"
import Layout from "../components/Layout"
import { formatDate } from "../utils"

interface BlogPostWithData {
  children: React.ReactElement[]
  data: {
    markdownRemark: {
      html: string
      fields: {
        title: string
        date: string
        banner: {
          childImageSharp: {
            fluid: FluidObject
          }
        }
        bannerCredit: string
        description: string
        readingTime: {
          text: string
        }
      }
    }
  }
}

export default ({ data }: BlogPostWithData) => {
  const {
    html,
    fields: { title, date, banner, bannerCredit, description, readingTime },
  } = data.markdownRemark

  return (
    <Layout>
      <main>
        <article>
          <header>
            <h1>{title}</h1>
            <div>
              <small>{formatDate(date)}</small> &middot;{" "}
              <small>{readingTime.text}</small>
            </div>
            <div>{description && <small>{description}</small>}</div>
            <div>{banner && <Img fluid={banner.childImageSharp.fluid} />}</div>
            <div>{bannerCredit && <Markdown>{bannerCredit}</Markdown>}</div>
          </header>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <footer>article footer</footer>
        </article>
      </main>
      <aside>aside content...</aside>
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
