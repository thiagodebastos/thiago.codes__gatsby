const path = require("path")

module.exports = {
  siteMetadata: {
    title: "thiago.codes",
    subtitle: "Serving knowledge back to the community.",
    description: "Serving knowledge back to the community.",
    keywords: "",
    author: "Thiago de Bastos",
    github: "https://github.com/thiagodebastos",
    menuItems: [
      {
        name: "HOME",
        link: "/",
        external: false,
      },
      {
        name: "WRITING",
        link: "/#writing",
        external: false,
      },
      {
        name: "GITHUB",
        link: "https://github.com/thiagodebastos",
        external: true,
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
