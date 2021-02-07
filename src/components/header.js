import React from 'react';
import { Link, } from 'gatsby';
import { Nav, Navbar } from 'react-bootstrap';
import { Capitalized } from '../utils'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { ColorSpan } from './Typography';

export default function Header({menuLinks}) {
    return (
      <React.Fragment>
        <Navbar collapseOnSelect expand="md" bg="light" variant="light">
          <Navbar.Brand as={Link} to="/" alt="Home - William Krakow">
            WK
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="text-right">
              {menuLinks.map((link, index) => (
                <Nav.Link as={ColorSpan} key={index} className="pr-3">
                  <AniLink
                    swipe
                    activeStyle={{
                      fontWeight: "bolder",
                    }}
                    to={link.link}
                    alt={link.name}
                    className="text-right text-dark"
                  >
                    {Capitalized(link.name)}
                  </AniLink>
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    )
}