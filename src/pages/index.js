import React from "react"
import Hero from "../components/Hero.js"
import Layout from "../components/layout.js"
import Resume from "../components/Resume.js"
import "bootstrap/dist/css/bootstrap.min.css"
import Projects from "../components/Projects.js"
import TechIcons from "../components/TechIcons.js"
import Bio from "../components/Bio.js"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Bio />
      <TechIcons />
      <Projects />
      <Resume />
    </Layout>
  )
}
