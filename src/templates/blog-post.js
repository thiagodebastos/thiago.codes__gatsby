import React from "react"
import Markdown from "react-markdown"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import Layout from "../components/Layout"
import { formatDate } from "../utils"

export default function BlogPost({ data }) {
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

BlogPost.propTypes = {
  data: PropTypes.object,
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
