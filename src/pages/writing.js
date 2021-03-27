import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Layout from "../components/layout";
import Article from "../components/Article";
import { PageBanner } from "../components/containers";
import { graphql } from 'gatsby'

export default function Writing({data}) {
  const { allMarkdownRemark } = data
  const { edges } = allMarkdownRemark
  
    return (
      <Layout pageTitle="Writing" pageDescription="Articles about everything under the sun.">
        <PageBanner
          title="Writing"
          subtitle="Perhaps not relevant to web dev but I like to write so these are here."
          nospan
        />
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={10}>
              {edges.map((article, index) => (
                <Article index={index} key={index} article={article} />
              ))}
            </Col>
          </Row>
        </Container>
      </Layout>
    )
}


export const query = graphql`
  {
    allMarkdownRemark(filter: { frontmatter: { layout: { eq: "article" } } }) {
      edges {
        node {
          frontmatter {
            title
            thumbnail
            slug
            layout
            date
            publicId
            description
          }
          html
          excerpt(format: PLAIN)
        }
      }
    }
  }
`