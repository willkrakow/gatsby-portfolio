import React from "react"
import { BioText, BioHeader, BlackButton } from "./Typography"
import { Link } from "gatsby"
import { StackList } from "./containers"
import styled from "styled-components"
import { IProjectFrontmatter } from "../types"


const ProjectCard = styled.article`
margin-bottom: ${props => props.theme.spacing[4]};
padding: ${props => props.theme.spacing[4]} ${props => props.theme.spacing[5]};
background-color: ${props => props.theme.colors.light};
border-radius: ${props => props.theme.borderRadii[2]};
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
          <BioHeader>{title}</BioHeader>
        {stack && <StackList stack={stack} />}
        <BioText>{description}</BioText>
        <Link to={`/projects/${slug}`}>
          <BlackButton>Read more</BlackButton>
        </Link>
    </ProjectCard>
  )
}
