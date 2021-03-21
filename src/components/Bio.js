import React from 'react'
import { Row, Col } from 'react-bootstrap';
import SocialLinks from './SocialLinks.js';
import { BioText, BioHeader } from './Typography'
import { FancyContainer } from './containers'

export default function Bio() {
    return (
      <FancyContainer>
        <Row className="justify-content-center">
          <Col xs={12} md={5} >
            <BioHeader>Hi there!</BioHeader>
            <BioText>
              Here's a little bit more so that you can get to know me thanks
              for reading.
            </BioText>
          </Col>
          <Col xs={12} md={5} >
            <SocialLinks />
          </Col>
        </Row>
      </FancyContainer>
    )
}