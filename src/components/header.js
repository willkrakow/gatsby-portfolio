import React from 'react';
import { Link } from 'gatsby';
import { Nav, Navbar } from 'react-bootstrap';
import { Capitalized } from '../utils'

export default function Header({menuLinks, siteTitle}) {
    return (
      <React.Fragment>
        <Navbar
          collapseOnSelect
          expand="md"
          bg="light"
          variant="light"
        >
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
                <Nav.Link as="span" key={index}>
                  <Link
                    to={link.link}
                    alt={link.name}
                    className="text-right text-info"
                  >
                    {Capitalized(link.name)}
                  </Link>
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    )
}