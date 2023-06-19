import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout.js"
import TechIcons from "../components/TechIcons"
import SocialLinks from "../components/SocialLinks"
import ProjectList from '../components/ProjectList'
import TwoColumns from "../components/TwoColumns"
import styled, { keyframes } from 'styled-components'
import { PageContainer } from "../components/containers"

const backgroundDrift = keyframes`
0% {
  background-position: top left;
}

100% {
  background-position: top right;
}
`

const ImageWrapper = styled.img`
max-width: 300px;
height: 300px;
background: linear-gradient(to bottom right, rgba(200, 200, 200, 0.4), rgba(200, 200, 200, 0.2));
background-size: 400%;
overflow: hidden;
animation: 0.5s ${backgroundDrift} linear infinite;
`
export default function Home() {

const sections = [
  {
    textColumn: {
      label: "About me",
      title: "Hi there!",
      description: "My name's Will. I'm a software engineer with a background in applied mathematics. These days I work mostly with TypeScript, React, Node, Docker, and AWS.",
    },
    cta: {
      label: "View resume",
      link: "/resume",
      alt: "Resume | William Krakow"
    },
    right: SocialLinks,
  },
  {
    textColumn: {
      label: "Projects",
      title: "Things I've built",
      description: "Everything from frontend design concepts to fullstack applications and security vulnerability research.",
      
    },
    cta: {
        label: "View more projects",
        link: "/projects",
        alt: "Development and Design Projects | William Krakow"
    },
    right: ProjectList,
  },
  {
    textColumn: {
      label: "Skillset",
      title: "Tech I love",
      description:
        "The libraries, frameworks, languages and tools that I'd choose for a new project, as of 2023.",
    },
    right: TechIcons,
  },
]

  return (
    <Layout
      pageTitle="Home"
      pageDescription="William Krakow | Developer Portfolio"
    >
      <Hero>
        <ImageWrapper
          src="https://res.cloudinary.com/djmk8xgrk/image/upload/ar_1:1,c_fill,g_auto,e_sharpen/v1616892366/Portfolio/mynolta.jpg"
          alt="Me, sitting in a chair, shooting with a 35mm camera"
        />
      </Hero>
      <PageContainer>
        {sections.map((section, index) => (
          <section key={index}>
            <TwoColumns
              textColumn={section.textColumn}
              cta={section.cta || null}
            >
              {section.right}
            </TwoColumns>
          </section>
        ))}
      </PageContainer>
    </Layout>
  )
}
