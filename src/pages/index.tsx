import * as React from "react"
import { graphql, Link } from "gatsby"
import { css } from "@emotion/core"
import { Layout, SiteHeader } from "../components"
import { formatDate } from "../utils"
import { underConstruction } from "../utils/globalStyles"

interface PageData {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
    allMarkdownRemark: {
      edges: Array<{
        node: {
          id: string
          excerpt: string
          frontmatter: {
            title: string
          }
          fields: {
            slug: string
            date: string
            readingTime: {
              text: string
            }
          }
        }
      }>
    }
  }
}

const tempSectionStyles = css`
  padding: 1rem;
  &:not(:last-child) {
    margin-bottom: 40px;
  }
`

const Home: React.FunctionComponent<PageData> = ({
  data: { allMarkdownRemark },
}) => {
  const posts = allMarkdownRemark.edges
  return (
    <Layout>
      <SiteHeader />
      <section css={[tempSectionStyles, underConstruction]}>
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
              to={post.fields.slug}
              aria-label={`View ${post.frontmatter.title}`}
            >
              <h3>{post.frontmatter.title}</h3>
            </Link>
            <div>
              <small>{formatDate(post.fields.date)}</small> &middot;{" "}
              <small>{post.fields.readingTime.text}</small>
            </div>
            <div>{post.excerpt}</div>
          </div>
        ))}
      </section>
      <section css={[tempSectionStyles, underConstruction]}>
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
                key={i}
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
      <footer css={[tempSectionStyles, underConstruction]}>
        Footer section
      </footer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          fields {
            title
            slug
            date
            readingTime {
              text
            }
            banner {
              childImageSharp {
                fluid {
                  tracedSVG
                }
              }
            }
          }
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
            keywords
          }
        }
      }
    }
  }
`
export default Home
