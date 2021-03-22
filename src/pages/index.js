import React from "react"
import Hero from "../components/Hero.js"
import Layout from "../components/layout.js"
import TechIcons from "../components/TechIcons.js"
import SocialLinks from "../components/SocialLinks.js"
import ProjectList from '../components/ProjectList.js'
import TwoColumns from "../components/TwoColumns.js"
import { StaticImage } from 'gatsby-plugin-image'

export default function Home() {

const sections = [
  {
    textColumn: {
      label: "About me",
      title: "Hi there!",
      description: "My name's Will. I'm a developer with a background in mathematics and an affection for intuitive, original designs. Currently, I work at PlantPure, a plant-based food and education company where my job duties range from web development to copywriting and market research. In my spare time I like to hike, ride bikes, and play around with new Javascript libraries. Anyways, enough of the dating-profile-esque intro. Keep reading to learn more about me and my work.",
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
      title: "Personal forays into development",
      description: "I primary work on the frontend, and have recently taken a liking to the JAMstack architecture. Nevertheless, I've also worked extensively in Node.js on projects large and small, for both complete servers and lambda functions. Beyond web dev, I like using Python for web scraping, data analytics, and machine learning via Tensorflow/Keras.",
      
    },
    cta: {
        label: "See more",
        link: "/projects",
        alt: "Development and Design Projects | William Krakow"
    },
    right: ProjectList,
  },
  {
    textColumn: {
      label: "Skillset",
      title: "Stacks? I've got 'em.",
      description:
        "I know that was lame but so am I. Anywho, here's a brief list of the technologies I've worked with the most.",
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
        <StaticImage src="../images/me.JPG" layout="constrained" alt="" width={300} />
      </Hero>
      {sections.map((section, index) => (
        <TwoColumns
          key={index}
          textColumn={section.textColumn}
          cta={section.cta || null}
        >
          {section.right}
        </TwoColumns>
      ))}
    </Layout>
  )
}
