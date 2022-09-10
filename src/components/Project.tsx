import React from "react"
import { BioText, BioHeader, BlackButton, ColorHeader } from "./Typography"
import { Link } from "gatsby"
import { StackList } from "./containers"
import styled from "styled-components"
import { IProjectFrontmatter } from "../types"


const ProjectCard = styled.article`
padding: ${props => props.theme.spacing[3]};
background-color: ${props => props.theme.colors.lightTint};
border-radius: ${props => props.theme.borderRadii[2]};
display: flex;
flex-direction: column;
gap: ${props => props.theme.spacing[2]};
box-shadow:0 2px 8px rgba(0,0,0,0.1);
`

interface IProjectComponent {
  article: {
    node: {
      frontmatter: Pick<
        IProjectFrontmatter,
        "title" | "slug" | "description" | "stack"
      >
    }
  }
  index: number
}
export default function Project({ article, index }: IProjectComponent) {
  const { slug, stack, title, description } = article.node.frontmatter

  return (
    <ProjectCard>
          <ColorHeader>{title}</ColorHeader>
        {stack && <StackList stack={stack} />}
        <BioText>{description}</BioText>
        <Link to={`/projects/${slug}`}>
          <BlackButton>Read more</BlackButton>
        </Link>
    </ProjectCard>
  )
}
