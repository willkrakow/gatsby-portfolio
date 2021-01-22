import React from "react"
import { Row, Col, Card } from "react-bootstrap"
import styled from "styled-components"
import { ColorHeader, BioText, ColorLink } from "./Typography.js";
import { Link } from 'gatsby'

const ResponsiveImg = styled(Card.Img)`
  position: relative;
  left: 0;
  width: 100%;
  padding-top: 0;
  padding-bottom: 1.5em;
  padding-left: 0;
  padding-right: 0;
`
export default function Article({article, index}) {

  const dateParsed = new Date(article.node.frontmatter.date)

  return (
    <Card
      key={index}
      className="my-5 border border-bottom border-right-0 border-top-0 border-left-0"
    >
      <Row>
        <Col xs={{ span: 12, order: 2 }} md={8}>
          <Card.Body className="pt-0">
            <Link to={`/articles/${article.node.frontmatter.slug}`}>
              <ColorHeader>{article.node.frontmatter.title}</ColorHeader>
            </Link>
  <BioText className="font-weight-bold mb-0">The Trek</BioText>
            <BioText lighter>{dateParsed.toDateString()}</BioText>
            <BioText className="pt-4">{article.node.excerpt}</BioText>
            <ColorLink className="d-inline-block" to={`/articles/${article.node.frontmatter.slug}`}>
              Read more
            </ColorLink>
          </Card.Body>
        </Col>
        <Col xs={{ span: 12, order: 1 }} md={4}>
          <ResponsiveImg
            variant="top"
            src={article.node.frontmatter.thumbnail}
          />
        </Col>
      </Row>
    </Card>
  )
}
