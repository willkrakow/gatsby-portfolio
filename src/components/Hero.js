import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import { FancyContainer } from './containers';
import { BlackButton, WhiteButton, HeroHeader } from './Typography';
import { Link } from 'gatsby';


const HeroImg = styled.div`
  transform: rotate(12deg);
  transition: 0.3s;
  background: #fafafa;
  z-index: 1;
  margin: 2rem;
  padding: 1rem;
  box-shadow: 0px 5px 20px rgba(15,15,15,0.2);
  border: 1px solid rgba(3,120,152,0.1);
  &:hover {
    transform: rotate(0deg);
  }
  @media screen and (max-width: 575px) {
    margin-top: 3rem;
  }
`

const Hero = (props) => {
    return (
      <FancyContainer gradientbg="true">
        <Row className="justify-content-center align-items-center">
          <Col
            xs={10}
            md={7}
            className="text-center d-flex justify-content-center"
          >
            <HeroImg>
              <div style={{ zIndex: "10" }}>{props.children}</div>
            </HeroImg>
          </Col>
        </Row>
        <Row className="align-items-center justify-content-center">
          <Col xs={12} md={7} className="d-block text-center">
            <HeroHeader className="text-light d-block w-100 font-weight-bold display-3">
              William Krakow
            </HeroHeader>
            <h3 className="text-light font-weight-lighter d-inline">
              Dev | Designer | Writer
            </h3>
            <div className="d-flex w-100 align-center h-100 justify-content-center">
              <Link to="/projects" alt="Projects | William Krakow">
                <BlackButton className="align-self-start">Projects</BlackButton>
              </Link>
              <Link to="/contact" alt="Contact | William Krakow">
                <WhiteButton>Contact</WhiteButton>
              </Link>
            </div>
          </Col>
        </Row>
      </FancyContainer>
    )
}

export default Hero
