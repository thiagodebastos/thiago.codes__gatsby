import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/Layout"

export default function BlogPost({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <h1>{post.fields.title}</h1>
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
      }
    }
  }
`
