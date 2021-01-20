import React from 'react'
import Layout from '../components/layout'
import { ProjectWrapper, FancyContainer, PageBanner } from '../components/containers'
import { BioText, ColorHeader, NoUnderline, ColorLink  } from '../components/Typography'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'

import Jumpstart from "../images/Jumpstart1.png"
import JumpstartTwo from "../images/Jumpstart2.png"
import JumpstartThree from "../images/Jumpstart3.png"
import JumpstartFour from "../images/Jumpstart4.png"
import IdOne from "../images/iDiagnostics1.png"
import IdTwo from "../images/iDiagnostics2.png"
import IdThree from "../images/iDiagnostics3.png"
import OneMore from "../images/OneMore.png"
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faCode } from '@fortawesome/free-solid-svg-icons'


const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  margin-top: 1em;
  margin-bottom: 1.5em;
`



export default function Projects() {

    const data = [
      {
        name: "GPX Parser",
        url: "https://adoring-goldwasser-a7c4c6.netlify.app/",
        description:
          "A lightweight web app that processes .gpx files, compresses the data and then displays it. Includes a route map (generated via Google Maps API), elevation profile, pace chart, and kilometer splits (all via Chart.js). The site was bootstrapped with Create React App and deployed via Netlify. Styling done with Bootstrap theming and some Styled Components fanciness.",
        screenshots: [Jumpstart, JumpstartTwo, JumpstartThree, JumpstartFour],
      },
      {
        name: "Physiology Design",
        url: "https://romantic-darwin-f4be26.netlify.app/",
        description:
          "A static site for an endurance training/testing company. Includes a blog (access control and CMS hosted by Netlify CMS), live contact forms (via Netlify Forms), and landing page designs. Hosted on Netlify. Styles generated with some Bootstrap and Styled Components for the trixy stuff.",
        screenshots: [OneMore],
      },
      {
        name: "PlantPure Nation",
        url: "https://plantpurenation.com",
        description:
          "An ecommerce website for a plant-based food company (my current employer). Powered by Shopify on the backend, Liquid templating on the frontend, and styles generated with SCSS. Asynchronous cart functionality handled with Ajax calls to the Shopify Storefront API.",
        screenshots: [IdOne, IdTwo, IdThree],
      },
    ]

    return (
      <Layout>
        <PageBanner
          title="Projects"
          subtitle="A select choice of things I've built"
          icon={faCode}
        />
        <FancyContainer>
          <Row className="justify-content-center">
            <Col xs={{ span: 12 }} md={{ span: 8 }}>
              {data.map((project, index) => (
                <ProjectWrapper key={index}>
                  <ColorHeader className="text-center">
                    {project.name}
                  </ColorHeader>
                  <ProjectImage src={project.screenshots[0]} />
                  <BioText>{project.description}</BioText>
                  <NoUnderline href={project.url} alt={project.name} className="mx-3">
                    <ColorLink><FontAwesomeIcon icon={faEye} className="text-dark" /> Live site</ColorLink>
                  </NoUnderline>
                  <NoUnderline href={project.url} alt={project.name} className="mx-3">
                    <ColorLink><FontAwesomeIcon icon={faGithub} className="text-secondary"/> Source</ColorLink>
                  </NoUnderline>
                </ProjectWrapper>
              ))}
            </Col>
          </Row>
        </FancyContainer>
      </Layout>
    )
}
