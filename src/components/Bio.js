import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import SocialLinks from './SocialLinks.js';
import { BioText, BioHeader } from './Typography'

export default function Bio() {
    return (
      <Container fluid className="p-3 p-md-5">
        <Row>
          <Col xs={12} md={6}>
            <BioHeader>Hi!<br/>Thanks for stopping by.</BioHeader>
            <BioText>
              Here is a little bit more so that you can get to know me thanks
              for reading.
            </BioText>
          </Col>
          <Col xs={12} md={6}>
            <SocialLinks />
          </Col>
        </Row>
      </Container>
    )
}