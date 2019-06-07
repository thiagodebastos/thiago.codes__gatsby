import * as React from "react"
import { graphql, Link } from "gatsby"
import { Layout, HeroHeader } from "../components"
import { formatDate } from "../utils"
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
      <section id="writing" css={tw`mt-8 flex flex-auto px-8 justify-center`}>
        <div css={tw`max-w-xl flex-auto`}>
          {posts.map(({ node: post }) => (
            <div key={post.id}>
              <Link
                to={post.fields.slug}
                css={tw`text-gray-900 hover:text-gray no-underline`}
                aria-label={`View ${post.frontmatter.title}`}
              >
                <h3 css={tw`mb-0`}>{post.frontmatter.title}</h3>
              </Link>
              <div css={tw`hidden`}>
                <span css={tw`text-gray-400`}>
                  <small css={tw`text-xs`}>
                    {formatDate(post.fields.date)}
                  </small>{" "}
                  &middot;{" "}
                  <small css={tw`text-xs`}>
                    {post.fields.readingTime.text}
                  </small>
                </span>
                <div css={tw`text-sm text-gray`}>{post.excerpt}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
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
