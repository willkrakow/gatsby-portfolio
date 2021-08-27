import React from 'react'
import { BioText } from './Typography'
import { Row, Col, Container } from 'react-bootstrap'


export default function Footer() {
 return (
   <footer className="footer">  
     <Container fluid>
       <Row className="justify-content-center py-5">
         <Col xs={12}>
           <BioText className="text-center text-muted">
             Copyright William Krakow 2020
           </BioText>
         </Col>
       </Row>
     </Container>
   </footer>
 )}
