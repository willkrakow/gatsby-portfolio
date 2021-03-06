import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import JobDescription from './JobDescription';
import { BioHeader, LabelText, ColorHeader, BioText } from './Typography'
import styled from "styled-components"
import { cardAnimation } from './Article';

const AnimatedResume = styled(Container)`
animation: 0.3s ${cardAnimation} ease;
`


const ResumeSection = () => {

  const jobData = [
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

  const educationData = {
    school: "University of North Carolina at Chapel Hill",
    major: "BS – Applied Mathematics",
    gradYear: 2017,
  }

  return (
    <AnimatedResume>
      <Row className="justify-content-center">
        <Col xs={12} md={10} xl={8}>
          <LabelText>Experience</LabelText>
          <BioHeader>
            Sufficiently Experienced
            {<br />} (if I do say so myself)
          </BioHeader>
          <BioText>
            I've jumped around a lot and run around a lot and walked a bunch
            too. I like to keep things interesting but I'm looking to settle
            into a more permanent, stable role because money.
          </BioText>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={10} xl={8}>
          {jobData.map((job, index) => (
            <div key={index} className="mt-3 mb-5">
              <ColorHeader>{job.role}</ColorHeader>
              <BioText className="font-weight-bolder text-dark mb-0">
                {job.name}
              </BioText>
              <BioText lighter>{job.dates}</BioText>
              <JobDescription list={job.description} />
            </div>
          ))}
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={10} xl={8}>
          <LabelText>Education</LabelText>
          <BioHeader>{educationData.school}</BioHeader>
          <BioText>{educationData.major}</BioText>
          <BioText lighter>{educationData.gradYear}</BioText>
        </Col>
      </Row>
    </AnimatedResume>
  )
}
export default ResumeSection
