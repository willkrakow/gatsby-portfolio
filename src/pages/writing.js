import React from "react";
import { Row, Col } from "react-bootstrap";
import Layout from "../components/layout";
import Article from "../components/Article";
import { PageBanner, FancyContainer } from "../components/containers";
import { graphql } from 'gatsby'

export default function Writing({data}) {
  const { allMarkdownRemark } = data
  const { edges } = allMarkdownRemark

    return (
      <Layout>
        <PageBanner
          title="Writing"
          subtitle="Perhaps not relevant to web dev but I like to write so these are here."
          nospan
        />
        <FancyContainer>
          <Row>
            <Col xs={12}>
              {edges.map((article, index) => (
                <Article index={index} article={article} />
              ))}
            </Col>
          </Row>
        </FancyContainer>
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
            date
          }
          html
          excerpt(format: PLAIN)
        }
      }
    }
  }
`