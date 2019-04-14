import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/Layout"

export default function Project({ data }) {
  return <Layout>Project</Layout>
}

const ProjectQuery = graphql(`
  query {
    allMarkdownRemark {
      node {
        edges {
          id
        }
      }
    }
  }
`)

Project.propTypes = {
  data: PropTypes.object,
}
