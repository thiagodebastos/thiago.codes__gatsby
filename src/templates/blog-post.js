import React from "react"
import Markdown from "react-markdown"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import Layout from "../components/Layout"
import formatDate from "../utils/formatDate"

export default function BlogPost({ data }) {
  const {
    html,
    fields: { title, date, banner, bannerCredit, description },
  } = data.markdownRemark

  return (
    <Layout>
      <header>
        <h1>{title}</h1>
        <div>
          <h3>{formatDate(date)}</h3>
        </div>
        {banner && <Img fluid={banner.childImageSharp.fluid} />}
        {bannerCredit && <Markdown>{bannerCredit}</Markdown>}
        {description && <Markdown>{description}</Markdown>}
      </header>
      <div dangerouslySetInnerHTML={{ __html: html }} />
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
