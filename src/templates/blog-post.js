import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import Layout from "../components/Layout"

export default function BlogPost({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <h1>{post.fields.title}</h1>
      <header>
        by {post.fields.author}
        <Img src={post.frontmatter.image.childImageSharp.fluid} />
      </header>
      <article
        dangerouslySetInnerHTML={{
          __html: post.html,
        }}
      />
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
        author
        banner {
          childImageSharp {
            resize(width: 1500, height: 1500) {
              src
            }
            fluid(maxWidth: 786) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
