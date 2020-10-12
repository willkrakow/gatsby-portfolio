import React from "react"
import 'antd/dist/antd.css';
import Hero from '../components/Hero.js';
import Nav from '../components/Nav.js';
import Resume from '../components/Resume.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from '../components/Projects.js';
import TechIcons from "../components/TechIcons.js";


export default function Home() {
  return (
    <div>
    <Nav />
    <Hero />
    <TechIcons />
    <Projects />
    <Resume />
    </div>
  )
}