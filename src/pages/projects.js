import React from 'react'
import Layout from '../components/layout'
import { ProjectWrapper, FancyContainer, PageBanner } from '../components/containers'
import { BioText, ColorHeader, ColorLink, ColorURL, BlackButton  } from '../components/Typography'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faCode } from '@fortawesome/free-solid-svg-icons'
import { graphql } from 'gatsby'


const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  margin-top: 1em;
  margin-bottom: 1.5em;
`



export default function Projects({data}) {
  const { allMarkdownRemark } = data
  const { edges } = allMarkdownRemark
    return (
      <Layout>
        <PageBanner
          title="Projects"
          subtitle="A select choice of things I've built"
          icon={faCode}
        />
        <FancyContainer>
          <Row className="justify-content-center">
            <Col xs={{ span: 12 }} md={{ span: 8 }}>
              {edges.map((project, index) => (
                <ProjectWrapper key={index}>
                  <ColorHeader className="text-center px-5">
                    {project.node.frontmatter.title}
                  </ColorHeader>
                  <ProjectImage src={project.node.frontmatter.thumbnail} />
                  <BioText>{project.node.excerpt}</BioText>
                  <a className="d-block mx-auto" href="/">
                    <BlackButton className="btn-dark text-center">
                      Live site
                    </BlackButton>
                  </a>
                  <div className="w-100 d-flex justify-content-center">
                    <ColorLink
                      to={`/projects/${project.node.frontmatter.slug}`}
                    >
                      <FontAwesomeIcon icon={faEye} className="text-dark" />{" "}
                      Learn more
                    </ColorLink>
                    <ColorURL to={`/projects/${project.node.frontmatter.slug}`}>
                      <FontAwesomeIcon icon={faGithub} className="text-dark" />{" "}
                      View source
                    </ColorURL>
                  </div>
                </ProjectWrapper>
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
          }
          rawMarkdownBody
          html
          excerpt(format: PLAIN)
        }
      }
    }
  }
`