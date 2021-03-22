const path = require('path')
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const articleTemplate = require.resolve("./src/templates/article")
  const projectTemplate = require.resolve("./src/templates/project")
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
        filter: {frontmatter: {layout: {eq: "article"}}}
      ) {
        edges {
          node {
            excerpt(pruneLength: 250)
            htmlAst
            id
            frontmatter {
              date
              thumbnail
              title
              slug
              publicId
            }
          }
        }
      }
    }
    `)
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: path.join('articles', node.frontmatter.slug),
        component: articleTemplate,
        context: {
            slug: node.frontmatter.slug,
        },
      })
    })

    const project = await graphql(`
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
          filter: { frontmatter: { layout: { eq: "project" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 250)
              htmlAst
              id
              frontmatter {
                thumbnail
                title
                slug
                layout
                publicId
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
