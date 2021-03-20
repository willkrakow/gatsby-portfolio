import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faShopify, faNodeJs, faFigma, faCss3, faPython, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
import { BioText, BioHeader, LabelText } from './Typography'
import { FancyContainer } from './containers'

const Icon = styled(FontAwesomeIcon)`
transition: 0.2s;
transition-timing-function: ease-out;
&:hover {
  transform: scale(1.3)
}
`

const icons = [
  {
    name: faReact,
    color: "#61DBFB",
    text: "React",
    link: "https://reactjs.org",
  },
  {
    name: faShopify,
    color: "#95BF47",
    text: "Shopify",
    link: "https://shopify.com",
  },
  {
    name: faPython,
    color: "#4B8BBE",
    text: "Python",
    link: "https://python.org",
  },
  {
    name: faFigma,
    color: "#f24e1e",
    text: "Figma",
    link: "https://figma.com",
  },
  {
    name: faCss3,
    color: "#1680C0",
    text: "CSS",
    link: "https://https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: faNodeJs,
    color: "#3c873a",
    text: "Node.JS",
    link: "https://nodejs.org"
  },
  {
    name: faStackOverflow,
    color: "#F48024",
    text: "...StackOverflow.",
    link: "https://stackoverflow.com"
  },
]


const TechIcons = () => {

  return (
    <FancyContainer>
      <Row>
        <Col xs={12} md={4} xl={3}>
          <Container fluid>
            <Row
              className="justify-content-center"
            >
              {icons.map((icon, index) => (
                <Col
                  key={index}
                  xs={6}
                  md={3}
                  className="d-flex justify-content-center flex-wrap p-3"
                >
                  <Icon
                    icon={icon.name}
                    size="6x"
                    color={icon.color}
                    className="d-block w-100 p-2"
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </Col>
        <Col
          xs={{ span: 12, order: "first" }}
          md={{ span: 4, order: "second" }}
          xl={{ span: 3, order: "second"}}
        >
          <LabelText>Skillset</LabelText>
          <BioHeader>Stacks? I've got 'em.</BioHeader>
          <BioText>
            I know that was lame but so am I. Anywho, here's a brief list of the
            technologies I've worked with the most.
          </BioText>
        </Col>
      </Row>
    </FancyContainer>
  )
}

export default TechIcons