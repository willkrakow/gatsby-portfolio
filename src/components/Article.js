import React from "react"
import { Row, Col, Card } from "react-bootstrap"
import { ColorHeader, BioText, ColorLink } from "./Typography.js";
import { Link } from 'gatsby'
import { StackList, ResponsiveImg } from './containers'

export default function Article({article, index, type}) {

  const dateParsed = new Date(article.node.frontmatter.date)

  return (
    <Card
      key={index}
      className="my-5 border border-bottom border-right-0 border-top-0 border-left-0"
    >
      <Row>
        <Col xs={{ span: 12, order: 2 }} md={8}>
          <Card.Body className="pt-0 px-0">
            <Link to={`/${type}/${article.node.frontmatter.slug}`}>
              <ColorHeader>{article.node.frontmatter.title}</ColorHeader>
            </Link>
            <div className="w-100"></div>
            {type === "article" && (
              <BioText lighter>{dateParsed.toDateString()}</BioText>
            )}
            {article.node.frontmatter.stack && <StackList stack={article.node.frontmatter.stack} />}
            <BioText>{article.node.excerpt}</BioText>
            <ColorLink
              className="d-inline-block"
              to={`/${type}/${article.node.frontmatter.slug}`}
            >
              Read more
            </ColorLink>
          </Card.Body>
        </Col>
        <Col xs={{ span: 12, order: 1 }} md={4}>
          <ResponsiveImg
            variant="top"
            src={`/${article.node.frontmatter.thumbnail}`}
          />
        </Col>
      </Row>
    </Card>
  )
}
