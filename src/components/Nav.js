import React from 'react';
import styled from 'styled-components';

const NavBar = styled.div`
width: 100%;
height: 10vh;
background-color: #ffffff;
border-bottom: 3px solid #eaeaea;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`

const NavItem = styled.div`
margin: auto;
`

const NavLink = styled.a`
margin: auto;
font-size: 20px;
font-color: #9b9b9b;
background-color: #ffffff;
padding: 24px;
transition: 0.3s;
&:hover {
  background-color: #fafafa;
  font-size: 20px;
}`


const Nav = () => {
    return (
        <NavBar>
      <NavItem style={{gridColumn: 9}}>
        <NavLink href="/">Home</NavLink>
      </NavItem>
      <NavItem  >
        <NavLink href="/projects">Projects</NavLink>
      </NavItem>
      <NavItem  >
        <NavLink href="/resume">Resume</NavLink></NavItem>
      <NavItem  >
        <NavLink href="/writing">Writing</NavLink></NavItem>
    </NavBar>
    )
}

export default Nav