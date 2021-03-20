import styled from 'styled-components'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const HeroHeader = styled.h1.attrs(props => ({
  className: "text-light display-3"
}))`
display: block;
width: 100%;
font-weight: bold;
`

export const HeroSub = styled.h2.attrs(props => ({
  className: "text-light"
}))

export const BioHeader = styled.h3.attrs(props => ({
  className: "text-dark",
}))`
  font-size: 2rem;
  line-height: 1.25em;
`

export const ColorHeader = styled.h4.attrs(props => ({
  className: "text-dark",
}))`
  box-shadow: 0px 0.3em rgba(1, 177, 169, 0.2);
  line-height: 1.25em;
  font-size: 1.5rem;
  font-weight: 500;
  display: inline-block;
  margin-bottom: 1em;
`

export const LabelText = styled.h5`
  color: rgba(1, 177, 169, 0.9);
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: bolder;
`


export const BioText = styled.p.attrs(props => ({
  className: `${props.lighter ? "text-info" : "text-dark"} ${props.gray && "text-muted"}`
}))`
  font-size: 1rem;
  line-height: 1.5em;
`

export const ColorText = styled.p.attrs(props => ({
  className: "text-center text-dark",
}))`
  box-shadow: inset 0px -0.5em rgba(131, 58, 180, 0.2);
  line-height: 2.5em;
  font-size: 1rem;
  padding: 0 0.5em;
  margin-left: -0.5em;
  display: inline;
`

export const ColorLink = styled(Link).attrs(props => ({
  className: "text-dark",
}))`
  box-shadow: inset 0 -0.1em 0 rgba(23, 162, 184, 0.5);
  line-height: 2em;
  font-size: 1.125em;
  border: none;
  padding: 0 1em;
  margin: auto 0.5em;
  border-radius: 1em 0 1em 0;
  background: rgba(23, 162, 184, 0.0);
  display: inline;
  transition: all 0.5s ease;
  &:hover {
    box-shadow: 0px 0.25em 0 rgba(23, 162, 184, 0.5);
    background: rgba(23, 162, 184, 0.1);
    text-decoration: none;
  }
  &:link {
    text-decoration: none;
  }
`


export const ColorSpan = styled.span.attrs(props => ({
  className: "text-dark",
}))`
  box-shadow: inset 0 -0.1em 0 rgba(23, 162, 184, 0.5);
  line-height: 2em;
  font-size: 1.125em;
  border: none;
  padding: 0 1em;
  margin: 0.5em;
  border-radius: 1em 0 1em 0;
  background: rgba(23, 162, 184, 0);
  display: inline;
  transition: all 0.5s ease;
  &:hover {
    box-shadow: 0px 0.25em 0 rgba(23, 162, 184, 0.5);
    background: rgba(23, 162, 184, 0.1);
    text-decoration: none;
  }
  &:link {
    text-decoration: none;
  }
`


export const ColorAniLink = styled(AniLink).attrs(props => ({
  className: "text-dark",
}))`
  box-shadow: inset 0 -0.1em 0 rgba(23, 162, 184, 0.5);
  line-height: 2em;
  font-size: 1.125em;
  border: none;
  padding: 0 1em;
  margin: 0.5em;
  border-radius: 1em 0 1em 0;
  background: rgba(23, 162, 184, 0);
  display: inline;
  transition: all 0.5s ease;
  &:hover {
    box-shadow: 0px 0.25em 0 rgba(23, 162, 184, 0.5);
    background: rgba(23, 162, 184, 0.1);
    text-decoration: none;
  }
  &:link {
    text-decoration: none;
  }
`

export const ColorURL = styled.a`
  box-shadow: inset 0 -0.1em 0 rgba(253, 29, 29, 0.5);
  line-height: 2em;
  font-size: 1.125em;
  border: none;
  padding: 0 1em;
  margin: auto 0.5em;
  border-radius: 1em 0 1em 0;
  background: transparent;
  display: inline;
  transition: all 0.5s ease;
  &:hover {
    box-shadow: 0px 0.25em 0 rgba(253, 29, 29, 1);
    background: rgba(253, 29, 29, 0.1);
    text-decoration: none;
  }
  &:link {
    text-decoration: none;
  }
`

ColorURL.propTypes = {
  className: PropTypes.string,
}

ColorURL.defaultProps = {
  className: "text-dark"
}

export const NoUnderline = styled.a`
  &:link {
    text-decoration: none;
  }
`


export const BlackButton = styled(Button).attrs(props => ({
  className: "px-5 my-3 mr-2 btn-dark"
}))`
font-weight: 500;
`

BlackButton.propTypes = {
  className: PropTypes.string,
}

export const WhiteButton = styled(Button).attrs(props => ({
  variant: "outline-light",
  className: "px-5 my-3 mr-2"
}))`
font-weight: 500;
`