const path = require("path")

module.exports = {
  siteMetadata: {
    title: "thiago.codes",
    description: "My learnings as a software engineer",
    keywords: "",
    author: "Thiago de Bastos",
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              backgroundColor: "#fafafa",
              maxWidth: 590,
              showCaptions: true,
              tracedSVG: true,
            },
          },
        ],
      },
    },
  ],
}
