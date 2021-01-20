import React from 'react';
import styled from 'styled-components';
import Me from '../images/me.png';
import { Row, Col, Button } from 'react-bootstrap';
import { FancyContainer } from './containers';


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
              <Button variant="info d-block align-self-start mr-4 my-4">
                Projects
              </Button>
              <Button variant="outline-light mr-4 my-4">Contact</Button>
            </div>
          </Col>
          <Col xs={12} md={7}>
            <Img src={Me} alt="William Krakow" />
          </Col>
        </Row>
      </FancyContainer>
    )
}

export default Hero