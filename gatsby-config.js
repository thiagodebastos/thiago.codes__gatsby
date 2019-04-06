module.exports = {
  siteMetadata: {
    title: "thiago.codes",
    description: "My learnings as a software engineer",
    keywords: "",
    author: "Thiago de Bastos",
  },
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
      options: {
        name: "blog",
        path: `${__dirname}/content/blog`,
      },
    },
  ],
}
