import React from 'react'
import Layout from '../components/layout'
import { PageBanner } from '../components/containers'
import ResumeSection from '../components/ResumeSection'

export default function Resume() {
    return (
      <Layout
        pageTitle="Resume"
        pageDescription="Experience, education, and skills"
      >
        <PageBanner
          title="Resume"
          subtitle="Employment, Education, and Skills"
          nospan
        />
        <ResumeSection />
      </Layout>
    )
}