const path = require('path');

module.exports = {
  siteMetadata: {
    title: "William Krakow",
    description: "Wililam Krakow | Developer, Designer, Writer",
    siteUrl: "https://quirky-hawking-b6672a.netlify.app/",
    menuLinks: [
      {
        name: "home",
        link: "/",
      },
      {
        name: "projects",
        link: "/projects",
      },
      {
        name: "writing",
        link: "/writing",
      },
      {
        name: "contact",
        link: "/contact",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-antd",
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: path.join(__dirname, `_posts/projects`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: path.join(__dirname, `_posts/articles`),
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-twitter`,
  ],
}