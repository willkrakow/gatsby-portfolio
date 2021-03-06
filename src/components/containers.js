import React from "react"
import styled, { keyframes } from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import { BioText, BioHeader, ColorURL, } from "./Typography"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faEye } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from "gatsby"
import RehypeReact from "rehype-react"
import { UnorderedList, OrderedList, BlockQuote, CodeBlock } from "../templates/article/MarkdownComponents"

const bgAnimation = keyframes`
0% {
  background-position: top left;
}

25% {
  background-position: top right;
}

50% {
  background-position: bottom right;
}

75% {
  background-position: bottom left;
}

100% {
  background-position: top left;
}
`

export const FancyContainer = styled(Container)`
  background: ${props => (props.gradientbg === "true" ? "#002c86" : null)};
  background: ${props =>
    props.gradientbg === "true"
      ? " linear-gradient(70deg, #002c86 0%, #17a4ba 50%, #89a4e5 100%)"
      : null};
  background-size: 400%;
  background-position: top left;
  animation: ${bgAnimation} 10s ease-in-out infinite;
`
FancyContainer.propTypes = {
  fluid: PropTypes.bool,
  className: PropTypes.string,
}


FancyContainer.defaultProps = {
  fluid: true,
  className: "p-3 mb-5 p-md-5",
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
  opacity: 0.4;
  color: #7026b9;
`

export const PageBanner = ({ title, subtitle, nospan }) => (
  <FancyContainer fluid className="pt-5 pb-2">
    <Row>
      <Col xs={12} className="text-center">
        <h1 className="display-4 pt-2 pb-3 text-dark">
          <WrapperText>&#60;</WrapperText>
          <span className="text-dark">{title}</span>
          <WrapperText> /&#62;</WrapperText>
        </h1>
        <BioText className="text-light">{subtitle}</BioText>
      </Col>
    </Row>
  </FancyContainer>
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


export const PostBanner = ({ title, date, timeToRead, backLink, stack, livesite, source }) => (
  <Container className="pt-5 pb-2">
    <Row className="justify-content-center">
      <Col xs={12} md={10} xl={8}>
        <Link to={backLink} className="text-secondary">
          <FontAwesomeIcon icon={faArrowLeft} className="text-info" />
          &nbsp;All {backLink.slice(1)}
        </Link>
        <h1 className="display-4 pt-2 pb-3 text-dark text-left">{title}</h1>
        <BioText className="text-secondary">{date}</BioText>
        <BioText lighter>{timeToRead} min read</BioText>
        {stack && <StackList stack={stack} />}
        {livesite && <a href={livesite} alt={title}><FontAwesomeIcon icon={faEye} color="inherit" />&nbsp;Live site</a>}
        {source && <ColorURL href={source} alt={`${title} | GitHub`}><FontAwesomeIcon color="inherit" icon={faGithub} />&nbsp;Source</ColorURL>}
      </Col>
    </Row>
  </Container>
)

PostBanner.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  timeToRead: PropTypes.string,
  backLink: PropTypes.string,
  stack: PropTypes.arrayOf(PropTypes.string),
  livesite: PropTypes.string,
  source: PropTypes.string,
}

PostBanner.defaultProps = {
  title: "New post",
  timeToRead: "4",
  backLink: "/projects",
}

export const StackList = ({ stack }) => (
  <>
    {stack.map((tech, index) => (
      <p
        key={index}
        lighter
        className={`d-inline-block mb-4 mr-2 px-3 text-light rounded-pill font-weight-light`}
        style={{ backgroundColor: "#7026b9", }}
      >
        {tech}
      </p>
    ))}
  </>
)

StackList.propTypes = {
  stack: PropTypes.arrayOf(PropTypes.string),
}
  

export const FeaturedImageCol = styled(Col).attrs(props => ({
  xs: 12,
  md: 8,
  lg: 7,
  className: "mb-5",
}))`
  background-image: ${props => `/${props.img}`};
  background-size: contain;
  background-repeat: no-repeat;
  min-height: ${props => (props.img ? "400px" : "0")};
  background-position: ${props => props.bgposition || "center"};
`

FeaturedImageCol.propTypes = {
  xs: PropTypes.number,
  md: PropTypes.number,
  img: PropTypes.string,
}

const PostImage = styled.img`
max-width: 100%;
height: auto;
margin: 2em auto;
display: block;
`

export const WrapLink = styled.a`
  overflow-wrap: anywhere;
`

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    h3: BioHeader,
    p: BioText,
    ul: UnorderedList,
    ol: OrderedList,
    blockquote: BlockQuote,
    pre: CodeBlock,
    img: PostImage,
    a: WrapLink,
  },
}).Compiler


export const ResponsiveImg = styled.img`
  width: 100%;
  margin: auto;
  display: block;
  height: auto;
  margin-bottom: 1rem;
`

export const PostWrapper = ({ htmlAst, img }) => (
  <Container>
    <Row className="justify-content-center">
      <Col xs={12} md={8} xl={8}>
        {img ? <ResponsiveImg variant="top" src={`/${img}`} /> : null}
      </Col>
    </Row>
    <Row className="justify-content-center">
      <Col xs={12} md={8} xl={8}>
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
  img: "https://images.pexels.com/photos/374918/pexels-photo-374918.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
}

