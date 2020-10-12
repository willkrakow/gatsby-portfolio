import React from 'react';
// import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import PlantPureLogo from '../../src/images/plantpure.png';
import styled from 'styled-components';
import JobDescription from '../components/JobDescription.js';
import DukeLogo from '../../src/images/duke.png';
import CMLogo from '../images/corticalmetrics.png';


const Img = styled.img`
height: 3em;
display: block;
margin-top: 5rem;`

const Dates = styled.p`
color: #4f4f4f;
font-size: 24px;
line-height: 36px;
`

const Role = styled.p`
font-weight: bold;
font-size: 24px;
line-height: 36px;
color: #2f2f4f;
margin-top: 5rem;
`

const OrgLink = styled.a`
color: #6f6f8f;
width: 50%;
display: block;
`

const Resume = () => {

  const data = [
    {
      name: "PlantPure",
      dates: "November 2019 - present",
      logo: PlantPureLogo,
      url: 'plantpurenation.com',
      role: "Web Development and Marketing",
      description: ["did this", "did this", "did this"]
    },
    {
      name: "Duke Center for Child Traumatic Stress",
      dates: "December 2018 - April 2019",
      logo: DukeLogo,
      url: 'duke.edu',
      role: "Web Development and Database Analyst",
      description: ["did this", "did this", "did this"]
    },
    {
      name: "Cortical Metrics",
      dates: "May 2016 - November 2018",
      logo: CMLogo,
      url: 'corticalmetrics.com',
      role: "Hardware Engineering, Marketing and Design",
      description: ["did this", "did this", "did this"]
    }
  ]

  return (
    <Container style={{ width: '100%', margin: 'auto' }}>
      {data.map((job, index) => (
        <Row key={index}>
          <Col md={6} className="border border-right border-left-0 border-top-0 border-bottom-0">
            <Role>{job.role}</Role>
            <Dates>{job.dates}</Dates>
          </Col>
          <Col md={6}>
            <Img src={job.logo} />
            <OrgLink href={job.url}>{job.url}</OrgLink>
            <JobDescription list={job.description} />
          </Col>
        </Row>
      ))}

    </Container>)
}
export default Resume
