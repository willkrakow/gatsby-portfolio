import React from 'react';
import { faGithub, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ColorLink, NoUnderline } from './Typography'

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
      <ul className="pl-5 text-left ml-5">
        {data.map((datum, index) => (
          <ListItem key={index}>
            <NoUnderline href={datum.url} alt={datum.name}>
              <ColorLink iconIsActive>
                <FontAwesomeIcon icon={datum.icon} /> {datum.name}
              </ColorLink>
            </NoUnderline>
          </ListItem>
        ))}
      </ul>
    )
}