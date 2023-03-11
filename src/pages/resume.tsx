import React from 'react'
import Layout from '../components/layout'
import { PageBanner, PageContainer } from '../components/containers'
import styled from 'styled-components';
import { BioHeader, BioText, LabelText, PlainHeader } from '../components/Typography';
import { FlexColumn } from '../components/Grid';
import { cardAnimation } from '../utils/animations';
import { IJob } from '../types';

const AnimatedResume = styled.div`
animation: 0.3s ${cardAnimation} ease;
`

const JobDescriptionContainer = styled.article`
margin-bottom: ${props => props.theme.spacing[6]};
`

const ListItem = styled.li`
    list-style: none;
    padding: 0.5rem;
    padding-bottom: 0;
    border-left: 1px solid ${props => props.theme.colors.secondaryTint};
    margin-bottom: 0.5rem;
`

const JobResponsibilities = styled.ul`
    padding-left: 1em;
`

const CompanyName = styled(PlainHeader)`
margin-bottom: ${props => props.theme.spacing[2]};
`


interface IJobDescription {
  job: IJob;
}

function JobDescription({ job }: IJobDescription) {
  return (
    <JobDescriptionContainer>
      <LabelText>
        {job.role}
      </LabelText>
      <CompanyName>{job.name}</CompanyName>
      <BioText>{job.dates}</BioText>
      <JobResponsibilities>
      {job.description.map((item, index) => (
        <ListItem key={index}>
          <BioText>{item}</BioText>
        </ListItem>
      ))}
    </JobResponsibilities>
    </JobDescriptionContainer>
  )
}
export default function Resume() {

  const jobData = [
    {
      name: "Aspida",
      dates: "October 2022 - present",
      url: "aspida.com",
      role: "Software Engineer",
      description: [
        "Managed infrastructure via Terraform to deploy applications on AWS using services including ECS, RDS and API Gateway.",
        "Developed full stack applications with Node JS, React JS and TypeScript",
      ]
    },
    {
      name: "Passport",
      dates: "January 2022 - September 2022",
      url: "passportinc.com",
      role: "Software Engineer",
      description: [
        "Built data-intensive React applications in an enterprise setting",
        "Developed microservices using AWS Lambda and Serverless Framework, including event-driven tasks",
        "Assisted with planning microservice architecture and data storage strategies"
      ]
    },
    {
      name: "PlantPure",
      dates: "November 2019 - January 2022",
      url: 'plantpurenation.com',
      role: "Web Development",
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
  ];

  const educationData = {
    school: "University of North Carolina at Chapel Hill",
    major: "BS – Applied Mathematics",
    gradYear: 2017,
  }

    return (
      <Layout
        pageTitle="Resume"
        pageDescription="Experience, education, and skills"
      >
        <PageBanner
          title="Resume"
          subtitle="Employment, Education,  and Skills"
        />
        <PageContainer smaller>
          <AnimatedResume>
            <FlexColumn justifyContent="center" wrap={false} as="section">
              {jobData.map((job, index) => (
                <JobDescription job={job} key={index} />
              ))}
            </FlexColumn>
            <FlexColumn wrap={false} as="section">
              <LabelText>Education</LabelText>
              <BioHeader>{educationData.school}</BioHeader>
              <BioText>{educationData.major}</BioText>
              <BioText>{educationData.gradYear}</BioText>
            </FlexColumn>
          </AnimatedResume>
        </PageContainer>
      </Layout>
    )
}