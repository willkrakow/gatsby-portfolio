import React from "react"
import { Row, Col, Card } from "react-bootstrap"
import { ColorHeader, BioText, ColorLink } from "./Typography.js";
import { Link } from 'gatsby'
import styled, { keyframes } from 'styled-components'

const backgroundShift = keyframes`
0% {
  background-position: left top;
}

25% {
  background-position: right bottom;
}

50% {
  background-position: right top;
}

75% {
  background-position: left bottom;
}

100% {
  background-position: left top;
}
`

const CloudImage = styled.img`
max-width: 100%;
width: 100%;
display: flex;
margin: auto;
background: linear-gradient(to bottom right, rgba(4, 13, 20, 0.5), rgba(4,13,20,0.9), rgba(4, 13, 20, 0.5));
background-size: 400%;
background-position: left top;
animation: 1s ${backgroundShift} ease-in infinite;
`

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



export default function Article({article, index}) {


  const { slug, title, date, publicId, description} = article.node.frontmatter
  const dateParsed = new Date(date)

  return (
    <article>
      <AniCard
        key={index}
        className="border border-bottom border-right-0 border-top-0 border-left-0"
      >
        <Row>
            <Col xs={12} md={4} className="d-flex align-items-center">
              <CloudImage
                src={`https://res.cloudinary.com/djmk8xgrk/image/upload/c_lfill,g_auto,h_480,q_auto,w_480/v1616367352/Portfolio/${
                  publicId || "dandelionandme_xb5bxm"
                }.png`}
                alt=""
                loading="lazy"
              />
            </Col>
          <Col xs={12} md={8}>
            <Card.Body className="px-2">
              <Link to={`/articles/${slug}`}>
                <ColorHeader>{title}</ColorHeader>
              </Link>
              <div className="w-100"></div>
              <BioText lighter>{dateParsed.toDateString()}</BioText>
              <BioText>{description}</BioText>
              <ColorLink
              className="d-inline-block"
              style={{ margin: "auto -1em auto auto"}}
              to={`/articles/${slug}`}
            >
              Read more
            </ColorLink>
            </Card.Body>
          </Col>
        </Row>
      </AniCard>
    </article>
  )
}
