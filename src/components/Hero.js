import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import { FancyContainer } from './containers';
import { BlackButton, WhiteButton } from './Typography';
import { Link } from 'gatsby';


const Img = styled.img`
  display: block;
  height: auto;
  width: 60%;
  border: 2vh solid #fafafa;
  box-shadow: 0px 5px 20px rgba(0, 29, 59, 0.4);
  transform: rotate(12deg);
  transition: 0.3s;
  margin: auto;
  overflow: hidden;
  &:hover {
    transform: rotate(0deg);
  }
  @media screen and (max-width: 575px) {
    margin-top: 3em;
    width: 100%;
  }
`


const Hero = () => {

    return (
      <FancyContainer gradientbg="true">
        <Row className="align-items-center justify-content-center">
          <Col xs={12} md={5} className="d-block">
            <h1 className="text-light d-block w-100 font-weight-bold display-3">
              William Krakow
            </h1>
            <h3 className="text-light font-weight-lighter d-inline">
              Dev | Designer | Writer
            </h3>
            <div className="d-flex w-100 align-center h-100">
              <Link to="/projects" alt="Projects | William Krakow">
                <BlackButton className="align-self-start">Projects</BlackButton>
              </Link>
              <Link to="/contact" alt="Contact | William Krakow">
                <WhiteButton>Contact</WhiteButton>
              </Link>
            </div>
          </Col>
          <Col xs={12} md={7} className="overflow-hidden">
            <Img src={'/images/me.png'} alt="William Krakow" />
          </Col>
        </Row>
      </FancyContainer>
    )
}

export default Hero
