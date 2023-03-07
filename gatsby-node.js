const path = require('path')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const projectTemplate = require.resolve("./src/templates/project")

  const project = await graphql(`
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
          filter: { frontmatter: { layout: { eq: "project" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 300)
              htmlAst
              id
              frontmatter {
                thumbnail
                title
                slug
                layout
                livesite
                source
                publicId
                description
              }
            }
          }
        }
      }
    `)
  if (project.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  project.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: path.join("projects", node.frontmatter.slug),
      component: projectTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })

}