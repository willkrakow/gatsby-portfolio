import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import { BioText } from "./Typography"
import PropTypes from 'prop-types'

export const FancyContainer = styled(Container)`
  background: ${props =>
    props.gradientbg === "true" ? "rgb(131, 58, 190)" : null};
  background: ${props =>
    props.gradientbg === "true"
      ? " linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)"
      : null};
`
FancyContainer.propTypes = {
  fluid: PropTypes.bool,
  className: PropTypes.string,
}

FancyContainer.defaultProps = {
  fluid: true,
  className: "p-3 mt-3 mb-5 p-md-5",
}

export const ProjectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 2em;
  margin-top: 1em;
`

export const FullContainer = styled(Container)`
  height: 85vh;
  justify-content: center;
  align-items: center;
`

FullContainer.propTypes = {
  fluid: PropTypes.bool,
}

FullContainer.defaultProps = {
  fluid: true,
}

const WrapperText = styled.span`
  opacity: 0.2;
`

WrapperText.propTypes = {
  className: PropTypes.string,
}

WrapperText.defaultProps = {
  className: "text-info"
}

export const PageBanner = ({ title, subtitle, nospan }) => (
  <Container fluid className="pt-5 pb-2">
    <Row>
      <Col xs={12} className="text-center">
        <h1 className="display-3 pt-2 pb-3">
          <WrapperText hidden={nospan} className="text-info">
            &#60;
          </WrapperText>
          {title}
          <WrapperText className="text-info" hidden={nospan}>
            {" "}
            /&#62;
          </WrapperText>
        </h1>
        <BioText>{subtitle}</BioText>
      </Col>
    </Row>
  </Container>
)

PageBanner.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  nospan: PropTypes.bool,
}

PageBanner.defaultProps = {
  title: "William Krakow",
  subtitle: "Developer, Designer, Writer",
  nospan: false,
}

const FeaturedImageCol = styled(Col).attrs(props => ({
  xs: 12,
  md: 8,
  className: "mb-5"
}))`
  background-image: url(${props => props.img});
  background-size: cover;
  min-height: ${props => props.img ? "300px" : "0"};
`
FeaturedImageCol.propTypes = {
  xs: PropTypes.number,
  md: PropTypes.number,
  img: PropTypes.string,
}


export const PostWrapper = ({ html, img }) => (
  <Container fluid>
    <Row className="justify-content-center">
      {img ? <FeaturedImageCol xs={12} md={8} img={img} /> : null}
      <Col xs={12} md={6}>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </Col>
    </Row>
  </Container>
)

PostWrapper.propTypes = {
  html: PropTypes.string,
  img: PropTypes.string,
}

PostWrapper.defaultProps = {
  html: "<p>Something went wrong. There's No content in this post yet.</p>",
  img:
    "https://images.pexels.com/photos/374918/pexels-photo-374918.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
}
