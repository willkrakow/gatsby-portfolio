import React from "react"
import { Row, Col } from "react-bootstrap"
import Layout from "../components/layout"
import Article from "../components/Article"
import { PageBanner, FancyContainer } from "../components/containers"
import { graphql } from "gatsby"


export default function Writing({ data }) {
  const { allMarkdownRemark } = data
  const { edges } = allMarkdownRemark

  return (
    <Layout>
      <PageBanner
        title="Projects"
        subtitle="Personal, professional, and more."
        nospan
      />
      <FancyContainer>
        <Row>
          <Col xs={12}>
            {edges.map((article, index) => (
              <Article index={index} article={article} type="projects" />
            ))}
          </Col>
        </Row>
      </FancyContainer>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(filter: { frontmatter: { layout: { eq: "project" } } }) {
      edges {
        node {
          frontmatter {
            title
            thumbnail
            slug
            date
            stack
          }
          html
          excerpt(format: PLAIN)
        }
      }
    }
  }
`