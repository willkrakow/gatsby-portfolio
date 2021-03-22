import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import Layout from "../components/layout"
import Article from "../components/Article"
import { PageBanner } from "../components/containers"
import { graphql } from "gatsby"


export default function Writing({ data }) {
  const { allMarkdownRemark } = data
  const { edges } = allMarkdownRemark

  return (
    <Layout
      pageTitle="Projects"
      pageDescription="A collection of personal and professional development projects."
    >
      <PageBanner
        title="Projects"
        subtitle="Personal, professional, and more."
        nospan
      />
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10}>
            {edges.map((article, index) => (
              <Article
                index={index}
                key={index}
                article={article}
                type="projects"
              />
            ))}
          </Col>
        </Row>
      </Container>
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
            publicId
          }
          html
          excerpt(format: PLAIN)
        }
      }
    }
  }
`