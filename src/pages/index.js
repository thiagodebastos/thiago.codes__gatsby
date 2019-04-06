import React from "react"
import { graphql, Link } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/Layout"
import PropTypes from "prop-types"

const tempSectionStyles = css`
  border: 1px dashed rebeccapurple;
  background: #ede7f6;
  padding: 1rem;
  &:not(:last-child) {
    margin-bottom: 40px;
  }
`

// TODO Programmatically create pages from data
// https://www.gatsbyjs.org/tutorial/part-seven/

export default function Home({ data: { allMarkdownRemark } }) {
  const posts = allMarkdownRemark.edges
  return (
    <Layout>
      <section css={tempSectionStyles}>
        <h2>Blog</h2>
        {posts.map(({ node: post }) => (
          <div
            css={css`
              background: white;
              padding: 1.5rem;
              border-radius: 0.5rem;
              &:not(:last-child) {
                margin-bottom: 40px;
              }
            `}
            key={post.id}
          >
            <Link
              to={post.frontmatter.slug}
              aria-label={`View ${post.frontmatter.title}`}
            >
              <h3>{post.frontmatter.title}</h3>
            </Link>
            <div>{post.excerpt}</div>
          </div>
        ))}
      </section>
      <section css={tempSectionStyles}>
        <h2> Projects</h2>
        <div>
          <h3>
            An epic use of <code>css-grid</code>
          </h3>
          <div
            css={css`
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
              grid-gap: 1rem;
            `}
          >
            {Array.from(Array(6), (_, i) => (
              <div
                css={css`
                  background: white;
                  padding: 1.5rem;
                  grid-column-start: span 1;
                  border-radius: 0.5rem;
                `}
              >
                Project {i + 1}
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer css={tempSectionStyles}>Footer section</footer>
    </Layout>
  )
}

Home.propTypes = {
  data: PropTypes.object,
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt(pruneLength: 130)
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            banner
            keywords
          }
        }
      }
    }
  }
`
