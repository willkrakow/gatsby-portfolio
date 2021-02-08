import React from 'react';
import { Link, } from 'gatsby';
import { Nav, Navbar } from 'react-bootstrap';
import { Capitalized } from '../utils'
import { ColorAniLink } from './Typography';

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
                  <ColorAniLink
                    swipe
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
      </React.Fragment>
    )
}