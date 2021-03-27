import React from 'react';
import { Link, } from 'gatsby';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Capitalized } from '../utils'
import { ColorAniLink } from './Typography';
import styled from 'styled-components'

const Logo = styled(Navbar.Brand).attrs(props => ({
  to: "/",
  alt: "Home | William Krakow",
}))`
  font-family: 'Playball', cursive;
  color: #002c86;
  font-size: 2rem;
`



export default function Header({menuLinks}) {
    return (
      <Container>
        <Navbar collapseOnSelect expand="md" bg="light" variant="light">
          <Logo as={Link}>
            WK
          </Logo>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="text-right">
              {menuLinks.map((link, index) => (
                  <ColorAniLink
                  fade
                    activeStyle={{
                      fontWeight: "bolder",
                    }}
                    key={index}
                    to={link.link}
                    alt={link.name}
                    className="text-right text-dark pr-3"
                  >
                    {Capitalized(link.name)}
                  </ColorAniLink>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    )
}