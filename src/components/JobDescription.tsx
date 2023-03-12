import React from 'react';
import styled from 'styled-components';
import { PlainHeader, LabelText, BioText } from './Typography';

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
  job: {
    title: string
    role: string
    dates: string
    stack: string[]
    layout: string
  }
}

export default function JobDescription({ job }: IJobDescription) {
  return (
    <JobDescriptionContainer>
      <LabelText>{job.role}</LabelText>
      <CompanyName>{job.title}</CompanyName>
      <BioText>{job.dates}</BioText>
      <JobResponsibilities>
        {job.stack.map((item, index) => (
          <ListItem key={index}>
            <BioText>{item}</BioText>
          </ListItem>
        ))}
      </JobResponsibilities>
    </JobDescriptionContainer>
  )
}
