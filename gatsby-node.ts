import path from 'path';
import type { GatsbyNode } from 'gatsby';

interface MarkdownProject {
  node: {
    excerpt: string;
    htmlAst: string;
    id: string;
    frontmatter: {
      thumbnail: string;
      title: string;
      slug: string;
      layout: string;
      livesite: string;
      source: string;
      publicId: string;
      description: string;
    }
  }
}

interface MarkdownProjectQuery {
    allMarkdownRemark: {
      edges: MarkdownProject[]
    }
}
export const createPages: GatsbyNode['createPages'] = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const projectTemplate = path.resolve("./src/templates/project/index.js")

  const project = await graphql<MarkdownProjectQuery>(`
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
  project.data?.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: path.join("projects", node.frontmatter.slug),
      component: projectTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })

}