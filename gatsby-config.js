const path = require("path")

module.exports = {
  siteMetadata: {
    title: "thiago.codes",
    subtitle: "My learnings as a software engineer",
    description: "My learnings as a software engineer",
    keywords: "",
    author: "Thiago de Bastos",
    menuItems: [
      {
        name: "WORK",
        link: "#",
      },
      {
        name: "WRITING",
        link: "#",
      },
      {
        name: "HOBBIES",
        link: "#",
      },
      {
        name: "GITHUB",
        link: "#",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-typescript",
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
              maxWidth: 1035,
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-reading-time",
        ],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-plugin-webpack-size",
      options: { development: true },
    },
  ],
}
