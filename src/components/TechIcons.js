import React from 'react';
import Block from '../components/Block.js';
import { Row, Col } from 'react-bootstrap';
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
    name:    faReact,
    color: "#61DBFB"
  },
  {
    name:    faShopify,
    color: "#95BF47"
  },
  {
    name:    faPython,
    color: "#4B8BBE"
  },
  {
    name:    faFigma,
    color: "#f24e1e"
  },
  {
    name:    faCss3,
    color: "#1680C0"
  },
  {
    name:    faNodeJs,
    color: "#3c873a"
  },
  {
    name:    faStackOverflow,
    color: "#F48024"
  },
]

const TechIcons = () => {
  return (
    <Block>
      <Row className="justify-content-center" >
        {icons.map((icon, index) => (
          <Col key={index} md={3} sm={6}>
            <Icon icon={icon.name} className="w-100 mx-auto" size="6x" color={icon.color} />
          </Col>
        ))}
      </Row>
    </Block>
  )
}

export default TechIcons