import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { ColorHeader, BioText } from './Typography'
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components'


const ProjectWrapper = styled.article`
  box-shadow: 0px 4px 8px 1px rgba(10, 20, 30, 0.2);
`

const ProjectList = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { layout: { eq: "project" } } }
        limit: 3
      ) {
        edges {
          node {
            frontmatter {
              title
              slug
              stack
            }
            html
            excerpt(format: PLAIN, pruneLength: 100)
          }
        }
      }
    }
  `)

    return (
      <ProjectWrapper>
        <ListGroup>
          {data.allMarkdownRemark.edges.map((project, index) => (
            <Link to={`/projects/${project.node.frontmatter.slug}`} key={index}>
              <ListGroupItem>
                <ColorHeader>{project.node.frontmatter.title}</ColorHeader>
                <BioText className="pl-3" gray>
                  {project.node.excerpt}
                </BioText>
              </ListGroupItem>
            </Link>
          ))}
        </ListGroup>
      </ProjectWrapper>
    )
}

export default ProjectList