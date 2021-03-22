import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faShopify, faNodeJs, faFigma, faCss3, faPython, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

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
          <Container fluid>
            <Row className="justify-content-center">
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
  )
}

export default TechIcons