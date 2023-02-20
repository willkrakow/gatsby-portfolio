import styled from 'styled-components'
import { Link } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const HeroHeader = styled.h1`
  display: block;
  width: 100%;
  font-weight: 900;
  margin-top: 1rem;
  font-size: 3rem;
  color: ${props => props.theme.colors.primary};
  text-align: center;
  font-family: "Inter";
`;

export const HeroSub = styled.h2`
color: ${props => props.theme.colors.darkTint};
font-family: "Source Code Pro", monospace;
font-weight: ${props => props.theme.fontWeights.thin};
font-size: ${props => props.theme.fontSizes.md};
`;

export const BioHeader = styled.h3`
  font-size: 2rem;
  line-height: 1.25em;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.darkTint};
  font-weight: ${props => props.theme.fontWeights.light};
  font-family: "Inter", sans-serif;
  margin-top: 0;
  text-decoration: none;
`

export const PlainHeader = styled.h4`
  line-height: 1.25em;
  font-size: 1.5rem;
  display: inline-block;
  font-weight: ${props => props.theme.fontWeights.bold};
  width: 100%;
  margin-bottom: ${props => props.theme.spacing[2]};
  margin-top: 0;
  text-decoration: none;
  color: ${props => props.theme.colors.darkTint};
  font-family: "Inter", sans-serif;
`

export const ColorHeader = styled(PlainHeader)`
`

export const LabelText = styled.h5`
  color: ${props => props.theme.colors.primary};
  font-weight: ${props => props.theme.fontWeights.bold};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0;
  margin-top: 0;
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: bolder;
  font-family: "Source Code Pro", monospace;
`


export const BioText = styled.p<IBioText>`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${(props) => {
    if(props.lighter){
      return props.theme.colors.primary
    }
    if(props.gray){
      return props.theme.colors.muted
    }
    return props.theme.colors.darkTint;
  }};
  line-height: 1.5rem;
  font-weight: ${props => props.theme.fontWeights.light};
  text-align: ${props => props.centered ? 'center' : props.textAlign ? props.textAlign : 'start'};
  font-family: 'Inter', sans-serif;
  margin-bottom: ${props => props.theme.spacing[3]};
  margin-top: 0;
`

interface IBioText {
  lighter?: boolean;
  gray?: boolean;
  className?: string;
  centered?: boolean;
  textAlign?: string;
}
export const ColorText = styled.p`
  box-shadow: inset 0px -0.5em rgba(131, 58, 180, 0.2);
  line-height: 2.5em;
  font-size: 1rem;
  padding: 0 0.5em;
  margin-left: -0.5em;
  display: inline;
  color: ${props => props.theme.colors.darkTint};
  text-align: center;
  font-family: 'Inter', sans-serif;
`

export const ColorLink = styled(Link)`
  box-shadow: inset 0 -0.1em 0 ${props => props.theme.colors.primaryTint};
  line-height: 2em;
  font-size: ${props => props.theme.fontSizes.sm};
  border: none;
  padding: 0 1em;
  border-radius: 1em 0 1em 0;
  background: ${props => props.theme.colors.lightTint};
  display: inline;
  text-decoration: none;
  transition: all 0.3s ease;
  color: ${props => props.theme.colors.darkTint};
  font-family: "Source Code Pro", monospace;
  font-weight: ${props => props.theme.fontWeights.light};
  &:hover {
    box-shadow: 0px 0.25em 0 ${props => props.theme.colors.primaryTint};
    background: rgba(23, 162, 184, 0.2);
    text-decoration: none;
  }
  &:link {
    text-decoration: none;
  }
`


export const ColorSpan = styled.span`
  box-shadow: inset 0 -0.1em 0 ${props => props.theme.colors.primaryTint};
  line-height: 2em;
  font-size: ${props => props.theme.fontSizes.sm};
  border: none;
  padding: 0 1em;
  border-radius: 1em 0 1em 0;
  background: ${props => props.theme.colors.lightTint};
  display: inline;
  text-decoration: none;
  transition: all 0.3s ease;
  font-family: "Source Code Pro", monospace;
  color: ${props => props.theme.colors.darkTint};
  font-weight: ${props => props.theme.fontWeights.light};
  &:hover {
    box-shadow: inset 0 -2em 0 ${props => props.theme.colors.primaryTint};
    background: rgba(23, 162, 184, 0.1);
    text-decoration: none;
  }
  &:link {
    text-decoration: none;
  }
`


export const ColorAniLink = styled(AniLink)`
  box-shadow: inset 0 -0.2em 0 ${props => props.theme.colors.primary};
  line-height: 2em;
  font-size: ${props => props.theme.fontSizes.sm};
  border: none;
  padding: 0 ${props => props.theme.spacing[4]};
  text-decoration: none;
  border-radius: 1em 0 1em 0;
  background: ${props => props.theme.colors.light};
  display: inline;
  transition: all 0.3s ease;
  color: ${props => props.theme.colors.dark};
  font-family: "Source Code Pro", monospace;
  font-weight: ${props => props.theme.fontWeights.light};
  &:hover {
    box-shadow: inset 0 -2em 0 ${props => props.theme.colors.primaryTint};
    background: ${props => props.theme.colors.lightTint};
    text-decoration: none;
  }
  &:link {
    text-decoration: none;
  }
`

export const ColorURL = styled.a`
  font-size: ${props => props.theme.fontSizes.sm};
  border: none;
  display: inline;
  transition: all 0.3s linear;
  color: ${props => props.theme.colors.dark};
  font-family: "Source Code Pro", monospace;
  font-weight: ${props => props.theme.fontWeights.light};
  border-radius: ${props => props.theme.borderRadii[1]};
  padding: 0.5rem;
  &:hover {
    background: ${props => props.theme.colors.light};
    border-bottom: ${props => props.theme.colors.primary};
    text-decoration: none;
  }
  &:link {
    text-decoration: none;
  }
`


const BaseButton = styled.button`
  padding: ${props => props.theme.spacing[2]} ${props => props.theme.spacing[5]};
  border-radius: ${props => props.theme.borderRadius};
  font-weight: ${props => props.theme.fontWeights.heavy};
  border: none;
  font-family: "Source Code Pro", monospace;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
`
export const BlackButton = styled(BaseButton)`
  background: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.light};
  border-color: ${props => props.theme.colors.dark};
  transition: all 0.3s ease;
  &:hover {
    background: ${props => props.theme.colors.tertiaryTint};
    color: ${props => props.theme.colors.white};
  }
  &:disabled {
    background: ${props => props.theme.colors.lightShade};
    color: ${props => props.theme.colors.muted};
  }
`

export const WhiteButton = styled(BaseButton)`
  color: ${props => props.theme.colors.dark};
  background: ${props => props.theme.colors.light};
  border-color: transparent;
  transition: all 0.3s ease;
  &:hover {
    background: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.lightTint};
  }
  &:disabled {
    background: ${props => props.theme.colors.lightShade};
    color: ${props => props.theme.colors.muted};
  }
`