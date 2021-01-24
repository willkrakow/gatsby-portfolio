import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import { PostBanner, PostWrapper } from '../../components/containers'
import { ColorText } from '../../components/Typography'
import { Container, Row, Col } from 'react-bootstrap'

export default function Project({data}) {
    const { markdownRemark } = data
    const { frontmatter, htmlAst, timeToRead } = markdownRemark

    //todo: add custom widget that lets me select a React component (i.e., a Font Awesome Icon) from a list

    console.log(frontmatter.stack)
    return (
      <Layout>
          <PostBanner
            title={frontmatter.title}
            date={""}
            backLink="/projects"
            timeToRead={timeToRead.toString()}
          />
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
          <PostWrapper htmlAst={htmlAst} img={frontmatter.thumbnail} />
      </Layout>
    )

}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      timeToRead
      frontmatter {
        slug
        thumbnail
        title
        layout
        stack
      }
      htmlAst
    }
  }
`
