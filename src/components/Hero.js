import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import { FancyContainer } from './containers';
import { BlackButton, WhiteButton, HeroHeader } from './Typography';
import { Link,  } from 'gatsby';
import Img from 'gatsby-image';


const HeroImg = styled(Img)`
  display: block;
  height: 250px;
  width: 250px;
  border: 2vh solid #fafafa;
  box-shadow: 0px 5px 20px rgba(0, 29, 59, 0.4);
  transform: rotate(12deg);
  transition: 0.3s;
  margin: 2rem auto;
  overflow: hidden;
  &:hover {
    transform: rotate(0deg);
  }
  @media screen and (max-width: 575px) {
    margin-top: 3rem;
    width: 250px;
  }
`

const Hero = ({data}) => {
    return (
      <FancyContainer gradientbg="true">
        <Row className="justify-content-center align-items-center">
          <Col xs={10} md={7} className="text-center">
            <HeroImg fluid={data.file.childImageSharp.fluid} alt="William Krakow" />
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
            {/* <div className="w-100 d-flex justify-content-center align-items-center">
              <DownArrow>&#8964;</DownArrow>
            </div> */}
          </Col>
        </Row>
      </FancyContainer>
    )
}

export default Hero
