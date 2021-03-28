require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "William Krakow",
    titleTemplate: "%s | William Krakow",
    description: "Wililam Krakow | Developer, Designer, Writer",
    siteUrl: "https://williamkrakow.dev/",
    image: "static/images/me.png",
    menuLinks: [
      {
        name: "home",
        link: "/",
        pageTitle: "Home",
        pageDescription: "Developer Portfolio",
      },
      {
        name: "projects",
        link: "/projects",
        pageTitle: "Projects",
        pageDescription: "Professional and personal development and design",
      },
      {
        name: "writing",
        link: "/writing",
        pageTitle: "Writing",
        pageDescription:
          "Articles published and unpublished about everything under the sun.",
      },
      {
        name: "contact",
        link: "/contact",
        pageTitle: "Contact",
        pageDescription: "Let's chat",
      },
      {
        name: "resume",
        link: "/resume",
        pageTitle: "resume",
        pageDescription: "Experience, education, and skills",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `William Krakow | Developer, Designer, Writer`,
        short_name: `William Krakow`,
        start_url: `/`,
        background_color: `#fffafc`,
        theme_color: `#002c86`,
        display: `browser`,
        icon: `static/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/_posts/projects`,
        name: `projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/_posts/articles`,
        name: `articles`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Lato\:400,600`, `Open Sans\:300,500`, "Playball"],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-transition-link`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
      },
    },
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
  ],
}
