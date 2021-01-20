import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import { BioText } from './Typography'

export const FancyContainer = styled(Container).attrs(props => ({
  className: "p-3 p-md-5",
  fluid: true,
}))`
  background: ${props =>
    props.gradientbg === "true" ? "rgb(131, 58, 190)" : null};
  background: ${props =>
    props.gradientbg === "true"
      ? " linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)"
      : null};
`

export const ProjectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 2em;
  margin-top: 1em;
`

export const FullContainer = styled(Container).attrs(props => ({
  fluid: true,
}))`
  height: 85vh;
  justify-content: center;
  align-items: center;
`

const WrapperText = styled.span.attrs(props => ({
  className: 'text-info'
}))`
opacity: 0.2;
`

export const PageBanner = ({ title, subtitle, icon }) => (
  <Container fluid className="pt-5 pb-3">
    <Row>
      <Col xs={12} className="text-center">
        <h1 className="display-3 pt-2 pb-3">
          <WrapperText className="text-info">&#60;</WrapperText>
          {title}
          <WrapperText className="text-info" > /&#62;</WrapperText>
        </h1>
        <BioText>{subtitle}</BioText>
      </Col>
    </Row>
  </Container>
)

