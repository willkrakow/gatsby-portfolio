import React from 'react'
import { Row, Col } from 'react-bootstrap';
import SocialLinks from './SocialLinks.js';
import { BioText, BioHeader } from './Typography'
import { FancyContainer } from './containers'

export default function Bio() {
    return (
      <FancyContainer>
        <Row className="justify-content-center align-items-center">
          <Col xs={12} md={5} >
            <BioHeader>Hi there!</BioHeader>
            <BioText>
              My name's Will. I'm a developer with a background in mathematics and an affection for intuitive, original designs. Currently, I work at <a href="https://plantpurenation.com/" alt="PlantPure Nation | Home">PlantPure</a>, a plant-based food and education company where my job duties range from web development to copywriting and market research. In my spare time I like to hike, ride bikes, and play around with new Javascript libraries. Anyways, enough of the dating-profile-esque intro. Keep reading to learn more about me and my work.
            </BioText>
          </Col>
          <Col xs={12} md={5} >
            <SocialLinks />
          </Col>
        </Row>
      </FancyContainer>
    )
}