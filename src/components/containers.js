import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import { BioText, BioHeader } from "./Typography"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"
import RehypeReact from "rehype-react"
import { UnorderedList, OrderedList, BlockQuote } from "../templates/article/MarkdownComponents"

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
  className: "text-info",
}

export const PageBanner = ({ title, subtitle, nospan }) => (
  <Container fluid className="pt-5 pb-2">
    <Row>
      <Col xs={12} className="text-center">
        <h1 className="display-3 pt-2 pb-3 text-dark">
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


export const PostBanner = ({ title, date, timeToRead, backLink }) => (
  <Container fluid className="pt-5 pb-2">
    <Row className="justify-content-center">
      <Col xs={12} md={8} lg={6}>
        <Link to={backLink} className="text-secondary">
          <FontAwesomeIcon icon={faArrowLeft} className="text-info" />
          &nbsp;All {backLink.slice(1)}
        </Link>
        <h1 className="display-4 pt-2 pb-3 text-dark text-left">{title}</h1>
        <BioText className="text-secondary">{date}</BioText>
        <BioText lighter>{timeToRead} min read</BioText>
      </Col>
    </Row>
  </Container>
)

PostBanner.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  timeToRead: PropTypes.string,
  backLink: PropTypes.string,
}

PostBanner.defaultProps = {
  title: "New post",
  timeToRead: "4",
  backLink: "/projects",
}

const FeaturedImageCol = styled(Col).attrs(props => ({
  xs: 12,
  className: "mb-5",
}))`
  background-image: url(${props => props.img});
  background-size: cover;
  min-height: ${props => (props.img ? "400px" : "0")};
  background-position: ${props => props.bgposition || "center"};
`

FeaturedImageCol.propTypes = {
  xs: PropTypes.number,
  md: PropTypes.number,
  img: PropTypes.string,
}

const PostImage = styled.img`
max-width: 500px;
height: auto;
margin: 2em auto;
`

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    h3: BioHeader,
    p: BioText,
    ul: UnorderedList,
    ol: OrderedList,
    blockquote: BlockQuote,
    img: PostImage,
  },
}).Compiler

export const PostWrapper = ({ htmlAst, img }) => (
  <Container fluid>
    <Row className="justify-content-center">
      {img ? <FeaturedImageCol img={img} /> : null}
      <Col xs={12} md={8} lg={6}>
        {renderAst(htmlAst)}
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
