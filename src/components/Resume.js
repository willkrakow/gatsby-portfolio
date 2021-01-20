import React from 'react';
import { Row, Col } from 'react-bootstrap';
import JobDescription from '../components/JobDescription.js';
import { BioHeader, LabelText, ColorHeader, BioText } from './Typography'

import { FancyContainer, ProjectWrapper } from './containers'

const Resume = () => {

  const data = [
    {
      name: "PlantPure",
      dates: "November 2019 - present",
      url: 'plantpurenation.com',
      role: "Web Development and Marketing",
      description: [
        "Developed and maintained pages, components, and content for a Shopify store with 40k+ monthly visitors.",
        "Designed marketing materials and wrote web, social media, and email marketing copy.",
        "Used creative initiatives and insights from Google Analytics to increase total reach by 90% over 3 months."]
    },
    {
      name: "Duke Center for Child Traumatic Stress",
      dates: "December 2018 - April 2019",
      url: 'duke.edu',
      role: "Web Development and Database Analyst",
      description: [
        "Developed and implemented project-specific data management plans for 100+ medical clinics.",
        "Advised clinicians, administrators and psychiatry researchers on proper data entry conventions.",
        "Compiled and wrote documentation for database development and Salesforce integrations."]
    },
    {
      name: "Cortical Metrics",
      dates: "May 2016 - November 2018",
      url: 'corticalmetrics.com',
      role: "Hardware Engineering, Marketing and Design",
      description: [
        "Analyzed clinical trial data, generated statistical reports, and wrote articles on the latest neuroscience research.",
        "Wrote website copy and contributed technical support articles, and handled support tickets.",
        "Designed neuroscience research hardware, manufacturing processes, and QA tests."]
    }
  ]

  return (
    <FancyContainer>
      <Row className="justify-content-center" >
        <Col xs={{ span: 12 }} md={{span: 6}}>
          <LabelText>Resume</LabelText>
          <BioHeader>
            Sufficiently Experienced<br /> (if I do say so myself)
          </BioHeader>
          <BioText>
            I've jumped around a lot and run around a lot and walked a bunch
            too. I like to keep things interesting but I'm looking to settle
            into a more permanent, stable role because money.
          </BioText>
        </Col>
        </Row>
        <Row className="justify-content-center">
        <Col xs={{ span: 12 }} md={{span: 6}}>
          {data.map((job, index) => (
            <ProjectWrapper key={index}>
              <ColorHeader>{job.role}</ColorHeader>
          <BioText>{job.name}</BioText>
              <BioText lighter>{job.dates}</BioText>
              <JobDescription list={job.description} />
            </ProjectWrapper>
          ))}
        </Col>
      </Row>
    </FancyContainer>
  )
}
export default Resume
