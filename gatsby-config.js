/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require('path');

module.exports = {
  siteMetadata: {
    title: "Portfolio",
    description: "Wililam Krakow | Developer, Designer, Writer",
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
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
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
  ],
}