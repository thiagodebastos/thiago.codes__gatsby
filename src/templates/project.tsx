import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

interface ProjectData {
  data: {
    allMarkdownRemark: {
      node: {
        edges: {
          id: string
        }
      }
    }
  }
}

const Project: React.FunctionComponent<ProjectData> = () => {
  return <Layout>Project</Layout>
}

const ProjectQuery = graphql`
  query {
    allMarkdownRemark {
      node {
        edges {
          id
        }
      }
    }
  }
`
export default Project
