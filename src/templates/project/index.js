import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'
import { PageBanner, PostWrapper } from '../../components/containers'
import { LabelText, ColorText } from '../../components/Typography'
import { Container, Row, Col } from 'react-bootstrap'

export default function Project({data}) {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark

    //todo: add custom widget that lets me select a React component (i.e., a Font Awesome Icon) from a list

    console.log(frontmatter.stack)
    return (
      <Layout>
        <Link to="/projects">
          <LabelText className="text-center pt-4">Projects</LabelText>
        </Link>
        <PageBanner title={frontmatter.title} subtitle="" />
        <Container>
          <Row className="justify-content-center pb-2">
            {frontmatter.stack.map((platform, index) => (
              <Col xs={3} md={2} className="text-center">
                <ColorText className="text-center" key={index}>
                  {platform}
                </ColorText>
              </Col>
            ))}
          </Row>
        </Container>
        <PostWrapper html={html} img={frontmatter.thumbnail} />
      </Layout>
    )

}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        slug
        thumbnail
        title
        layout
        stack
      }
      html
    }
  }
`
