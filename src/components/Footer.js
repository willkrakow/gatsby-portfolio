import React from 'react'
import { FancyContainer } from './containers'
import { BioText } from './Typography'
import { Row, Col } from 'react-bootstrap'


export default function Footer() {
 return( <FancyContainer fluid>
    <Row className="justify-content-center">
      <Col xs={12}>
        <BioText className="text-center text-muted">Copyright William Krakow 2020</BioText>
      </Col>
    </Row>
  </FancyContainer>
 )}
