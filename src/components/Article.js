import React from "react"
import { Row, Col, Card } from "react-bootstrap"
import { ColorHeader, BioText, ColorLink } from "./Typography.js";
import { Link } from 'gatsby'
import { StackList } from './containers'
import styled from 'styled-components'

const CloudImage = styled.img`
max-width: 100%;
width: 100%;
display: flex;
margin: auto;
`

export default function Article({article, index, type}) {

  const dateParsed = new Date(article.node.frontmatter.date)

  return (
    <Card
      key={index}
      className="my-5 border border-bottom border-right-0 border-top-0 border-left-0"
    >
      <Row>
        <Col xs={12} md={4}>
          <CloudImage
            src={`https://res.cloudinary.com/djmk8xgrk/image/upload/c_lfill,g_auto,h_300,q_auto,w_480/v1616367352/Portfolio/${
              article.node.frontmatter.publicId || "dandelionandme_xb5bxm"
            }.png`}
            alt=""
            loading="lazy"
          />
        </Col>
        <Col xs={12} md={8}>
          <Card.Body className="pt-0 px-0">
            <Link to={`/${type}/${article.node.frontmatter.slug}`}>
              <ColorHeader>{article.node.frontmatter.title}</ColorHeader>
            </Link>
            <div className="w-100"></div>
            {type === "article" && (
              <BioText lighter>{dateParsed.toDateString()}</BioText>
            )}
            {article.node.frontmatter.stack && (
              <StackList stack={article.node.frontmatter.stack} />
            )}
            <BioText>{article.node.excerpt}</BioText>
            <ColorLink
              className="d-inline-block"
              to={`/${type}/${article.node.frontmatter.slug}`}
            >
              Read more
            </ColorLink>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}
