import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faShopify, faNodeJs, faFigma, faCss3, faPython, faJs, faStackOverflow, faGoogle } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

const Icon = styled(FontAwesomeIcon)`
transition: 0.2s;
transition-timing-function: ease-out;
&:hover {
  transform: scale(1.3);
}
`

const SvgIcon = styled.svg`
transition: 0.2s;
transition-timing-function: ease-out;
&:hover {
  transform: scale(1.2);
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
    link: "https://nodejs.org",
  },
  {
    name: faJs,
    color: "#fcdc00",
    text: "Javascript",
    link: "https://javascript.com",
  },
  {
    name: faGoogle,
    color: "#4285f4",
    text: "Google",
    link: "https://google.com",
  },
  {
    name: faStackOverflow,
    color: "#F48024",
    text: "...StackOverflow.",
    link: "https://stackoverflow.com",
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
              <Col xs={6} md={3} className="d-flex justify-content-center flex-wrap p-3">
          <SvgIcon aria-label="Gatsby" viewBox="0 0 28 28" class="css-etwj4y" width="5rem"><g><g fill="#ffffff"><path d="M25,14h-7v2h4.8c-0.7,3-2.9,5.5-5.8,6.5L5.5,11c1.2-3.5,4.6-6,8.5-6c3,0,5.7,1.5,7.4,3.8l1.5-1.3 C20.9,4.8,17.7,3,14,3C8.8,3,4.4,6.7,3.3,11.6l13.2,13.2C21.3,23.6,25,19.2,25,14z"></path><path d="M3,14.1c0,2.8,1.1,5.5,3.2,7.6c2.1,2.1,4.9,3.2,7.6,3.2L3,14.1z"></path></g><path d="M14,0C6.3,0,0,6.3,0,14s6.3,14,14,14s14-6.3,14-14S21.7,0,14,0z M6.2,21.8c-2.1-2.1-3.2-4.9-3.2-7.6L13.9,25 C11.1,24.9,8.3,23.9,6.2,21.8z M16.4,24.7L3.3,11.6C4.4,6.7,8.8,3,14,3c3.7,0,6.9,1.8,8.9,4.5l-1.5,1.3C19.7,6.5,17,5,14,5 c-3.9,0-7.2,2.5-8.5,6L17,22.5c2.9-1,5.1-3.5,5.8-6.5H18v-2h7C25,19.2,21.3,23.6,16.4,24.7z" fill="#663399"></path></g></SvgIcon>              </Col>
            </Row>
          </Container>
  )
}

export default TechIcons