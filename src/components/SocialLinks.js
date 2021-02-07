import React from 'react';
import { faGithub, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ColorSpan } from './Typography'

const data = [
    {
        name: "github.com/willkrakow",
        url: "http://github.com/willkrakow",
        icon: faGithub,
    },
    {
        name: "William Krakow",
        url: "http://facebook.com/willkrakow",
        icon: faFacebook,
    },
    {
        name: "@indigohikes",
        url: "https://instagram.com/indigohikes",
        icon: faInstagram,
    },
    {
        name: "linkedin.com/in/william.krakow",
        url: "https://linkedin.com/in/william.krakow",
        icon: faLinkedin,
    },
    {
        name: "willkrakow(at)gmail.com",
        url: "mailto:willkrakow@gmail.com",
        icon: faEnvelope,
    }
]


const ListItem = styled.li`
    list-style: none;
`

export default function SocialLinks() {
    return (
      <ul className="text-xs-left text-md-right pl-0">
        {data.map((datum, index) => (
          <a href={datum.url} alt={datum.name} key={index}>
            <ListItem className="d-flex justify-content-md-end justify-content-start">
              <ColorSpan>
                <FontAwesomeIcon icon={datum.icon} /> {datum.name}
              </ColorSpan>
            </ListItem>
          </a>
        ))}
      </ul>
    )
}