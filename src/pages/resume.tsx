import React from 'react'
import Layout from '../components/layout'
import { PageBanner, PageContainer } from '../components/containers'
import styled from 'styled-components';
import { BioHeader, BioText, LabelText } from '../components/Typography';
import { FlexColumn } from '../components/Grid';
import { cardAnimation } from '../utils/animations';
import { graphql, PageProps } from 'gatsby';
import JobDescription from '../components/JobDescription';

const AnimatedResume = styled.div`
animation: 0.3s ${cardAnimation} ease;
`

interface IMarkdownJob {
  frontmatter: {
    title: string;
    role: string;
    dates: string;
    stack: string[];
    layout: string;
  }
}

interface ResumeProps {
  allMarkdownRemark: {
    nodes: IMarkdownJob[];
  }
}
export default function Resume({data}: PageProps<ResumeProps>) {
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
              {data.allMarkdownRemark.nodes.map((job, index) => (
                <JobDescription job={job.frontmatter} key={index} />
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


export const query = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { layout: { eq: "resume" } } }) {
      nodes {
        frontmatter {
          dates
          layout
          title
          role
          stack
        }
      }
    }
  }
`