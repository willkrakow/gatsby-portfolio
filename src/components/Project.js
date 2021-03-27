import React from "react"
import { Row, Col, Card } from "react-bootstrap"
import { BioText, ColorLink, ColorURL, BioHeader } from "./Typography.js"
import { Link } from "gatsby"
import { StackList } from "./containers"
import styled, { keyframes } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEye } from "@fortawesome/free-solid-svg-icons"

const cardAnimation = keyframes`
0% {
  transform: translateY(20px);
  opacity: 0.0
}

100% {
  transform: translateY(0);
  opacity: 1.0;
}
`

const AniCard = styled(Card)`
  transform: translateY(0);
  animation: 0.3s ${cardAnimation} ease-in;
  box-shadow: 0px 4px 8px 1px rgba(10, 20, 30, 0.2);
  margin: 8px 0;
  padding: 8px;
`

export default function Project({ article, index }) {

  const { slug, stack, source, title, livesite, description } = article.node.frontmatter;

  return (
    <article>
      <AniCard
        key={index}
        className="border border-bottom border-right-0 border-top-0 border-left-0"
      >
        <Row>
          <Col xs={12}>
            <Card.Body className="px-2 pb-0">
              <Link to={`/projects/${slug}`}>
                <BioHeader>{title}</BioHeader>
              </Link>
              <div className="w-100"></div>
              {stack && <StackList stack={stack} />}
              <BioText>{description}</BioText>
            </Card.Body>
            <Card.Footer>
              <ColorLink
                className="d-inline-block text-dark"
                to={`/projects/${slug}`}
              >
                Read more
              </ColorLink>
              {source && (
                <ColorURL
                  href={source}
                  alt={`${title} | GitHub`}
                  className="d-inline-block text-dark"
                >
                  <FontAwesomeIcon icon={faGithub} />
                  &nbsp; View source
                </ColorURL>
              )}
              {livesite && (
                <ColorURL
                  href={livesite}
                  alt={title}
                  className="d-inline-block text-dark"
                >
                  <FontAwesomeIcon icon={faEye} />
                  &nbsp; Live site
                </ColorURL>
              )}
            </Card.Footer>
          </Col>
        </Row>
      </AniCard>
    </article>
  )
}
