import React from "react"
import { Container, Row, Col } from "bootstrap"
import styled from "styled-components"
import { BioHeader, ColorSpan } from "./Typography"

const FancyCard = styled(Col).attrs(props => ({
  xs: 12,
  md: 6,
  lg: 4,
}))`
  background: linear-gradient(
    -45deg,
    rgba(247, 179, 116, 0.2),
    rgba(207, 34, 34, 0.2)
  );
`

const CardImageSection = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`

const CardLogo = styled.img`
  display: block;
  padding: 12px;
  flex-basis: 100%;
`

export default function ProjectCard({ data }) {
  const { frontmatter } = data
  return (
    <Col xs={12} md={6} lg={4}>
      <CardImageSection>
        <CardLogo
          src={`https://res.cloudinary.com/djmk8xgrk/image/upload/c_lfill,g_auto,h_300,q_auto,w_480/v1616367352/Portfolio/${
            frontmatter.publicId || "jslogo_biew16"
          }`}
          alt={frontmatter.title || "Project"}
        />
      </CardImageSection>
      <CardText>
        <BioHeader>{frontmatter.title}</BioHeader>
        <BioText>{frontmatter.excerpt}</BioText>
        <Link to={`/projects/${frontmatter.slug}`}>
          <ColorSpan>View project</ColorSpan>
        </Link>
        {frontmatter.liveUrl && (
          <a href={frontmatter.liveUrl} alt={frontmatter.title}>
            <ColorSpan>View live site</ColorSpan>
          </a>
        )}
      </CardText>
    </Col>
  )
}
