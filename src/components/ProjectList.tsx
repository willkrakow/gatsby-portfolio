import React from 'react';
import { ColorHeader, BioText } from './Typography'
import { useStaticQuery, graphql, Link } from 'gatsby';
import type {IProjectFrontmatter} from '../types';
import { StackList } from './containers';
import styled from 'styled-components';


const ProjectHeader = styled.div`
margin-bottom: ${props => props.theme.spacing[3]};
`

const Container = styled.section`
display: flex;
flex-direction: column;
gap: ${props => props.theme.spacing[4]};
`
interface IProjectListItem {
  excerpt: string;
  frontmatter: Pick<IProjectFrontmatter, 'title' | 'slug' | 'stack'>
}
interface IProjectListQuery {
  allMarkdownRemark: {
    edges: {
      node: IProjectListItem;
    }[]
  }
}

const ProjectList = () => {
  const data = useStaticQuery<IProjectListQuery>(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { layout: { eq: "project" } } }
        sort: {fields: frontmatter___date, order: DESC}
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
      <Container>
        {data.allMarkdownRemark.edges.map((project, index) => (
          <Link to={`/projects/${project.node.frontmatter.slug}`} key={index}>
            <article>
              <ProjectHeader>
                <ColorHeader>{project.node.frontmatter.title}</ColorHeader>
                <StackList stack={project.node.frontmatter.stack} />
              </ProjectHeader>
              <BioText>{project.node.excerpt}</BioText>
            </article>
          </Link>
        ))}
      </Container>
    )
}

export default ProjectList