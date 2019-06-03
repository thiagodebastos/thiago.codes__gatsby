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
      <section id="work" css={tw`mb-8`}>
        <header css={tw`bg-cyan-pale py-2 px-8 mb-8`}>
          <h4>WORK</h4>
        </header>{" "}
        <CardGrid />
      </section>
      <section id="writing" css={tw`mb-8`}>
        <header css={tw`bg-cyan-pale py-2 px-8 mb-8`}>
          <h4>BLOG</h4>
        </header>{" "}
        {posts.map(({ node: post }) => (
          <div key={post.id} css={tw`px-8`}>
            <div css={tw`text-cyan-800`}>
              <Link
                to={post.fields.slug}
                css={tw`no-underline text-cyan-900 hover:text-cyan no-underline`}
                aria-label={`View ${post.frontmatter.title}`}
              >
                <h3>{post.frontmatter.title}</h3>
              </Link>
            </div>
            <div className="hidden-content" css={tw`hidden`}>
              <span css={tw`text-cyan-800`}>
                <small css={tw`text-xs`}>{formatDate(post.fields.date)}</small>{" "}
                &middot;{" "}
                <small css={tw`text-xs`}>{post.fields.readingTime.text}</small>
              </span>
              <div>{post.excerpt}</div>
            </div>
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
