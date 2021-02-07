import React from "react"
import Hero from "../components/Hero.js"
import Layout from "../components/layout.js"
// import Resume from "../components/Resume.js"
import "bootstrap/dist/css/bootstrap.min.css"
import Projects from "../components/Projects.js"
import TechIcons from "../components/TechIcons.js"
import Bio from "../components/Bio.js"
import { graphql } from 'gatsby'

export default function Home({data}) {
  return (
    <Layout pageTitle="Home" pageDescription="Developer Portfolio">
      <Hero data={data} />
      <Bio />
      <TechIcons />
      <Projects />
      {/* <Resume /> */}
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "me.png" }) {
      childImageSharp {
        fluid(quality: 10) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
