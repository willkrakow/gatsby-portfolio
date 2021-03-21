import React from 'react';
import { Col, Row } from 'react-bootstrap';


import { FancyContainer } from './containers';
import { BioHeader, BioText, LabelText } from './Typography';
import ProjectList from './ProjectList';


const Projects = ({data}) => {
    
    return (
      <FancyContainer>
        <Row className="justify-content-center">
          <Col
            xs={12}
            md={5}
          >
            <LabelText>Projects</LabelText>
            <BioHeader>Personal and Otherwise</BioHeader>
            <BioText>
              I primary work on the frontend, and have recently taken a liking
              to the JAMstack architecture. Nevertheless, I've also worked
              extensively in Node.js on projects large and small, for both
              complete servers and lambda functions. Beyond web dev, I like
              using Python for web scraping, data analytics, and machine
              learning via Tensorflow/Keras.
            </BioText>
          </Col>
          <Col
            xs={12}
            md={5}
            xl={3}
          >
            <ProjectList />
          </Col>
        </Row>
      </FancyContainer>
    )
}

export default Projects