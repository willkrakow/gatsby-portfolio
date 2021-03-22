import React from 'react'
import { LabelText, BioText, BioHeader, BlackButton } from './Typography'
import { Container, Row, Col } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export default function TwoColumns (props) {
  const { children, textColumn, cta } = props
  return (
    <Container className="my-5">
      <Row className="justify-content-center align-items-center mx-md-n5">
        <Col xs={12} md={6} className="px-md-5">
          <LabelText>{textColumn.label}</LabelText>
          <BioHeader>{textColumn.title}</BioHeader>
          <BioText>{textColumn.description}</BioText>
          {cta !== null && (
            <Link to={cta.link} alt={cta.alt || "Learn more"}>
              <BlackButton>{cta.label}</BlackButton>
            </Link>
          )}
        </Col>
        <Col xs={12} md={6} className="px-md-5">
          {React.createElement(children)}
        </Col>
      </Row>
    </Container>
  )
}

TwoColumns.propTypes = {
  textColumn: PropTypes.shape({
    label: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
  cta: PropTypes.shape({
    label: PropTypes.string,
    link: PropTypes.string,
    alt: PropTypes.string,
  }),
}