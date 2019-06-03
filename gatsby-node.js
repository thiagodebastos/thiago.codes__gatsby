const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
const slugify = require("@sindresorhus/slugify")
const isEmpty = require("lodash/isEmpty")
const remark = require("remark")
const stripMarkdownPlugin = require("strip-markdown")

function stripMarkdown(markdownString) {
  return remark()
    .use(stripMarkdownPlugin)
    .processSync(markdownString)
    .toString()
}

function createPosts(createPage, edges) {
  edges.forEach(({ node }, i) => {
    const prev = i === 0 ? null : edges[i - 1].node
    const next = i === edges.length - 1 ? null : edges[i + 1].node
    const pagePath = node.fields.slug

    createPage({
      path: pagePath,
      component: path.resolve(`./src/templates/blog-post.tsx`),
      context: {
        id: node.id,
        prev,
        next,
      },
    })
  })
}

function createBlogPages({ blogPath, data, actions }) {
  if (isEmpty(data.edges)) {
    throw new Error("There are no posts!")
  }

  const { edges } = data
  const { createPage } = actions
  createPosts(createPage, edges)
  return null
}

exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const { data, errors } = await graphql(`
    fragment PostDetails on MarkdownRemark {
      fileAbsolutePath
      id
      parent {
        ... on File {
          name
          sourceInstanceName
        }
      }
      excerpt(pruneLength: 250)
      fields {
        id
        title
        slug
        description
        date
        banner {
          childImageSharp {
            fluid {
              tracedSVG
            }
          }
        }
      }
    }
    query BlogPostQuery {
      blog: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "//content/blog//" } }
      ) {
        edges {
          node {
            ...PostDetails
          }
        }
      }
    }
  `)

  if (errors) return Promise.reject(errors)

  const { blog } = data

  createBlogPages({
    blogPath: "/blog",
    data: blog,
    actions,
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const parent = getNode(node.parent)

    let slug =
      node.frontmatter.slug ||
      createFilePath({ node, getNode, basePath: `pages` })

    let isScheduled = false

    if (node.fileAbsolutePath.includes("content/blog/")) {
      slug = `/blog/${node.frontmatter.slug || slugify(parent.name)}`
    }

    createNodeField({
      name: "id",
      node,
      value: node.id,
    })

    createNodeField({
      name: "published",
      node,
      value: node.frontmatter.published,
    })

    createNodeField({
      name: "title",
      node,
      value: node.frontmatter.title,
    })

    createNodeField({
      name: "author",
      node,
      value: node.frontmatter.author || "Thiago de Bastos",
    })

    createNodeField({
      name: "description",
      node,
      value: node.frontmatter.description,
    })

    createNodeField({
      name: "plainTextDescription",
      node,
      value: stripMarkdown(node.frontmatter.description),
    })

    createNodeField({
      name: "slug",
      node,
      value: slug,
    })

    createNodeField({
      name: "date",
      node,
      value: node.frontmatter.date ? node.frontmatter.date.split(" ")[0] : "",
    })

    createNodeField({
      name: "banner",
      node,
      value: node.frontmatter.banner,
    })

    createNodeField({
      name: "bannerCredit",
      node,
      value: node.frontmatter.bannerCredit,
    })

    createNodeField({
      name: "categories",
      node,
      value: node.frontmatter.categories || [],
    })

    createNodeField({
      name: "keywords",
      node,
      value: node.frontmatter.keywords || [],
    })

    createNodeField({
      name: "editLink",
      node,
      value: `https://github.com/thiagodebastos/thiago.codes/edit/master${node.fileAbsolutePath.replace(
        __dirname,
        ""
      )}`,
    })

    createNodeField({
      name: "noFooter",
      node,
      value: node.frontmatter.noFooter || false,
    })

    createNodeField({
      name: "isScheduled",
      node,
      value: isScheduled,
    })
  }
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}
