import React from 'react';
import { faGithub, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { faEnvelope, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ColorSpan } from './Typography'

const ListItem = styled.li`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  margin-bottom: ${props => props.theme.spacing[2]};
  @media (max-width: 599px) {
    justify-content: flex-end;
  };
`

const SocialLinkList = styled.ul`
  text-align: left;
  padding-left: 0;
  @media (max-width: 599px) {
    text-align: right;
  }
`

const SocialLink = styled.a`
text-decoration: none;
`

export default function SocialLinks() {

const data = [
  {
    name: "github.com/willkrakow",
    url: "http://github.com/willkrakow",
    icon: faGithub,
  },
  {
    name: "William Krakow",
    url: "https://linkedin.com/in/william.krakow",
    icon: faLinkedin,
  },
]

    return (
      <SocialLinkList>
        {data.map((datum, index) => (
          <SocialLink href={datum.url} key={index}>
            <ListItem>
              <ColorSpan>
                <FontAwesomeIcon icon={datum.icon as IconDefinition} /> {datum.name}
              </ColorSpan>
            </ListItem>
          </SocialLink>
        ))}
      </SocialLinkList>
    )
}