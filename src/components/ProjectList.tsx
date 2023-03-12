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

const NoUnderlineLink = styled(Link)`
  text-decoration: none;
`

const ProjectArticle = styled.article`
  padding: ${props => props.theme.spacing[4]} ${props => props.theme.spacing[4]};
  border-radius: ${props => props.theme.borderRadii[2]};
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  background-color: ${props => props.theme.colors.lightTint};
`

const ProjectList = () => {
  const data = useStaticQuery<IProjectListQuery>(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { layout: { eq: "project" } } }
        sort: { frontmatter: { date: DESC }}
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
          <NoUnderlineLink to={`/projects/${project.node.frontmatter.slug}`} key={index}>
            <ProjectArticle>
              <ProjectHeader>
                <ColorHeader>{project.node.frontmatter.title}</ColorHeader>
                <StackList stack={project.node.frontmatter.stack} />
              </ProjectHeader>
              <BioText>{project.node.excerpt}</BioText>
            </ProjectArticle>
          </NoUnderlineLink>
        ))}
      </Container>
    )
}

export default ProjectList