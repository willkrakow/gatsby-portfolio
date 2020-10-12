import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Jumpstart from '../images/Jumpstart1.png';
import JumpstartTwo from '../images/Jumpstart2.png';
import JumpstartThree from '../images/Jumpstart3.png';
import JumpstartFour from '../images/Jumpstart4.png';
import IdOne from '../images/iDiagnostics1.png';
import IdTwo from '../images/iDiagnostics2.png';
import IdThree from '../images/iDiagnostics3.png';
import OneMore from '../images/OneMore.png';
import styled from 'styled-components';
import Block from '../components/Block.js';
import Slideshow from '../components/Slideshow.js';
import '../components/styles.css';


const Screenshot = styled.div`
width: 800px;
margin: auto;
padding: 20px;
box-shadow: 0px 6px 12px rgba(0,29,59,0.2);
background: #f9f9f9;
`
const ProjectTitle = styled.a`
border-bottom: 6px solid #f7b374;
box-shadow: 0px -18px 0px #f7b374 inset;
font-size: 36px;
color: #2f2f4f;
line-height: 72px;
`
const ProjectDescription = styled.p`
font-size: 20px;
line-height: 30px;
color: #2f2f4f;
`
const Projects = () => {
    const data = [
        {
            name: "PlantPure Jumpstart",
            url: "https://plantpurenation.com/pages/jumpstart",
            description: "I was asked to design pages to promote the PlantPure Jumpstart, a 10-day program that immerses participants in a plant-based lifestyle and teaches the fundamentals of nutrition and wellness. In the past, marketing for the Jumpstart focused on the various program components and did not properly explain the impact the program will have on participants' lives. I decided to change that.",
            screenshots: [Jumpstart, JumpstartTwo, JumpstartThree, JumpstartFour],
        },
        {
            name: "OneMore",
            url: "https://localhost:3000",
            description: "I created this app as a minimalist interface for project management at my company. The app is built with React 16.8 and leverages the useState and useEffect hooks. I also added some cute animations to help emphasize user actions and provide positive feedback upon task completion.",
            screenshots: [OneMore],
        },
        {
            name: "iDiagnostics",
            url: "https://tirf-labs.com/",
            description: "I was asked to design pages to promote the PlantPure Jumpstart, a 10-day program that immerses participants in a plant-based lifestyle and teaches the fundamentals of nutrition and wellness. In the past, marketing for the Jumpstart focused on the various program components and did not properly explain the impact the program will have on participants' lives. I decided to change that.",
            screenshots: [IdOne, IdTwo, IdThree],
        },

    ]

    return (
        <Block>
            {data.map((project, index) => (
                <Row className="m-5" key={index}>
                    <Col md={4} className="p-5">
                        <ProjectTitle href={project.url} alt={project.name}>
                            {project.name}
                        </ProjectTitle>
                        <ProjectDescription>
                            {project.description}
                        </ProjectDescription>
                    </Col>
                    <Col md={8}>
                        <Screenshot>
                            <Slideshow images={project.screenshots} />
                        </Screenshot>
                    </Col>
                </Row>
            ))}
        </Block>
    )
}

export default Projects