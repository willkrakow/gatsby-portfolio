import React from "react"
import { Row, Col, Card } from "react-bootstrap"
import styled from "styled-components"
import { ColorHeader, BioText, ColorLink, NoUnderline } from "./Typography.js";

const ResponsiveImg = styled(Card.Img)`
  max-height: 300px;
  max-width: 100%;
  width: auto;
  padding-top: 0;
  padding-bottom: 1.5em;
  padding-left: 0;
  padding-right: 0;
`
export default function Article(props) {
  const index = props.index
  const article = props.article

  return (
    <section id={`section-${index}`} key={index}>
      <Card className="my-5 border border-bottom border-right-0 border-top-0 border-left-0">
        <Row>
          <Col xs={{ span: 12, order: 2 }} md={8}>
            <Card.Body className="pt-0">
              <ColorHeader>{article.name}</ColorHeader>
              <BioText lighter>{article.date}</BioText>
              <BioText className="pt-4">{article.preview}</BioText>
              {/* <ArticleModal article={article}/> */}
              <NoUnderline
                href={article.link || "/"}
                alt={article.name}
                className="text-dark"
              >
                <ColorLink iconIsActive={"true"}>
                  Read more
                </ColorLink>
              </NoUnderline>
            </Card.Body>
          </Col>
          <Col xs={{ span: 12, order: 1 }} md={4}>
            <ResponsiveImg
              variant="top"
              src="https://images.pexels.com/photos/2832061/pexels-photo-2832061.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
          </Col>
        </Row>
      </Card>
    </section>
  )
}
