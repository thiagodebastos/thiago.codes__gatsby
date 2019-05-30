import * as React from "react"
import { graphql, Link } from "gatsby"
import { css } from "@emotion/core"
import { Layout, HeroHeader } from "../components"
import { formatDate } from "../utils"
import { CardGrid } from "../components"
import tw from "tailwind.macro"

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

const Home: React.FunctionComponent<PageData> = ({
  data: { allMarkdownRemark },
}) => {
  const posts = allMarkdownRemark.edges
  return (
    <Layout>
      <HeroHeader />
      <section>
        <header css={tw`bg-gray-pale py-2 px-8 mb-8`}>
          <h4>WORK</h4>
        </header>{" "}
        <CardGrid />
      </section>
      <section>
        <h4>Blog</h4>
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
      <footer>Footer section</footer>
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
