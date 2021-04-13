import React from "react"
import Hero from "../components/Hero.js"
import Layout from "../components/layout.js"
import TechIcons from "../components/TechIcons.js"
import SocialLinks from "../components/SocialLinks.js"
import ProjectList from '../components/ProjectList.js'
import TwoColumns from "../components/TwoColumns.js"
import styled, { keyframes } from 'styled-components'

const backgroundDrift = keyframes`
0% {
  background-position: top left;
}

100% {
  background-position: top right;
}
`

const ImageWrapper = styled.img`
width: 300px;
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
      description: "My name's Will. I'm a full-stack developer from Hillsborough, NC, with a background in mathematics and an affection for intuitive, original designs. In my spare time I like to hike, ride bikes, and play around with new Javascript libraries. I am seeking full time or contract employment. Keep reading to learn more about me and my work.",
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
      description: "I primarily work on the frontend, and have recently taken a liking to the JAMstack architecture. I've also worked extensively in Node.js on projects large and small, for both complete servers and serverless functions. Beyond web dev, I like using Python for web scraping, data analytics, and machine learning via Tensorflow/Keras.",
      
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
        "These are the libraries, frameworks, languages and tools that I like to use when building personal projects. I'm always open to adding to my toolbox and embracing new technologies.",
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
          src="https://res.cloudinary.com/djmk8xgrk/image/upload/w_300,ar_1:1,c_fill,g_auto,e_sharpen/v1616892366/Portfolio/mynolta.jpg"
          alt="Me, sitting in a chair, shooting with a 35mm camera"
        />
      </Hero>
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
    </Layout>
  )
}
