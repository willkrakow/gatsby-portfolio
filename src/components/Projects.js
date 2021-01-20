import React from 'react';
import { Col, Row } from 'react-bootstrap';


import { FancyContainer } from './containers';
import { BioHeader, BioText, LabelText } from './Typography';
import ProjectList from './ProjectList';


const Projects = ({data}) => {
    
    return (
      <FancyContainer>
        <Row>
          <Col
            xs={{ span: 12, order: "first" }}
            md={{ span: 6, order: "first" }}
          >
            <LabelText>Projects</LabelText>
            <BioHeader>Personal and Otherwise</BioHeader>
            <BioText>
              I know that was lame but so am I. Anywho, here are some of the
              technologies I consider myself an expert in.
            </BioText>
          </Col>
          <Col
            xs={{ span: 12, order: "second" }}
            md={{ span: 6, order: "second" }}
          >
            <ProjectList />
          </Col>
        </Row>
      </FancyContainer>
    )
}

export default Projects