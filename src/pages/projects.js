import React, { useState, useEffect } from "react"
import { Row, Col, Container, Dropdown, Button } from "react-bootstrap"
import Layout from "../components/layout"
import Project from "../components/Project"
import { PageBanner } from "../components/containers"
import { graphql } from "gatsby"
import _ from "lodash"
import styled from "styled-components"
import { BioText } from '../components/Typography'
const SortButton = styled.button`
  border: none;
  width: 100%;
  margin-bottom: 0.25em;
  text-align: left;
  background-color: ${props => (props.selected ? "#7026b9" : "#fafafa")};
  color: ${props => (props.selected ? "#fafafa" : "#7026b9")};
  transition: all 0.3s ease;
  &:hover {
    background-color: ${props =>
      props.selected ? "rgb(132 58 205)" : "rgba(112, 38, 205, 0.4)"};
  }
  border-radius: 8px;
  padding: 8px;
`

const SortBox = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
align-items: center;
padding: 16px;
@media(max-width: 576px) {
  display: none;
}
`

const MobileSortBox = styled(Dropdown)`
  display: flex;
  justify-content: center;
  border: 1px solid rgba(112, 38, 205, 0.4);
  border-radius: 8px;
  margin: 0 32px;
  @media (min-width: 576px) {
    display: none;
  }
  button {
    flex: 0 0 100%;
    display: inline-block;
  }
  div.dropdown-menu {
    width: 100%;
    padding: 8px 16px;
  }
`

const FancyDropdownItem = styled(Dropdown.Item)`
  background-color: ${props => (props.selected ? "#7026b9" : "#fafafa")};
  color: ${props => (props.selected ? "#fafafa" : "#7026b9")};
  transition: all 0.3s ease;
  border-radius: 8px;
  width: 100%;
  border: none;
  text-align: left;
  margin-bottom: 0.25em;
  padding: 8px;
  &:hover {
    background-color: ${props =>
      props.selected ? "rgb(132 58 205)" : "rgba(112, 38, 205, 0.4)"};
  }
`

export default function Writing({ data }) {
  const { allMarkdownRemark } = data
  const { edges } = allMarkdownRemark

  const [toQuery, setToQuery] = useState([])
  const [filtered, setFiltered] = useState([...edges])


  const handleClick = (e) => {
    const btn = e.target.value;
    if ( toQuery.includes(btn)) {
      handleRemove(btn)
    }
    else {
      handleAdd(btn)
    }
  }
  const handleAdd = (tech) => {
    setToQuery([tech, ...toQuery])
  }

  const handleRemove = (tech) => {
    const temp = _.without(toQuery, tech)
    setToQuery([...temp]);
  }

  useEffect(() => {
    const handleFilter = () => {
      const temp = _.filter(edges, function (edge) {
        for (let i = 0; i < toQuery.length; i++) {
          let stackTest = edge.node.frontmatter.stack
          if (_.difference(toQuery, stackTest).length === 0) {
            return true
          }
        }
      })
      setFiltered(temp)
    }

    if (toQuery.length > 0){
      handleFilter()
    } else {
      setFiltered([...edges])
    }
  }, [toQuery, edges])

  const techItems = [
    "Gatsby",
    "Netlify",
    "React",
    "Shopify",
    "HTML5",
    "CSS3",
    "Figma",
    "Styled Components",
    "Bootstrap",
    "Heroku",
    "Web APIs",
    "Twilio",
  ]

  return (
    <Layout
      pageTitle="Projects"
      pageDescription="A collection of personal and professional development projects."
    >
      <PageBanner
        title="Projects"
        subtitle="Personal, professional, and more."
        nospan
      />
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={4}>
            <SortBox className="d-xs-none d-md-flex">
              <BioText fade gray className="text-left w-100 mb-1">
                Filter
              </BioText>
              {techItems.map((btn, index) => (
                <SortButton
                  key={index}
                  selected={toQuery.includes(btn)}
                  value={btn}
                  onClick={handleClick}
                >
                  {btn}
                </SortButton>
              ))}
            </SortBox>
            <MobileSortBox>
              <Dropdown.Toggle variant="light" id="dropdown-basic" className="mb-1">
                Filter
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {techItems.map((btn, index) => (
                  <FancyDropdownItem as={Button} key={index} selected={toQuery.includes(btn)} value={btn} onClick={handleClick}>{btn}</FancyDropdownItem>
                ))}
              </Dropdown.Menu>
            </MobileSortBox>
          </Col>
          <Col xs={12} md={8}>
            {filtered.map((article, index) => (
              <Project index={index} key={index} article={article} />
            ))}
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(filter: { frontmatter: { layout: { eq: "project" } } }) {
      edges {
        node {
          frontmatter {
            title
            thumbnail
            slug
            date
            stack
            publicId
            layout
            source
            livesite
            description
          }
          html
          excerpt(format: PLAIN)
        }
      }
    }
  }
`
