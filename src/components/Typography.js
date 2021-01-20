import styled from 'styled-components'

export const BioHeader = styled.h3.attrs(props => ({
  className: "text-dark",
}))`
  font-size: 2em;
  line-height: 1.25em;
`

export const BioText = styled.p.attrs(props => ({
  className: props.lighter ? "text-secondary" : "text-dark",
}))`
  font-size: 1.25em;
  line-height: 1.5em;
`

export const ColorLink = styled.p.attrs(props => ({
  className: "text-center text-dark",
}))`
  box-shadow: inset 0px -0.5em rgba(245, 191, 66, 0.5);
  line-height: 2.5em;
  font-size: 1.25em;
  padding: 0 0.5em;
  margin-left: -0.5em;
  display: inline;
  transition: all 0.5s ease;
  &:hover {
    box-shadow: 0px 0.25em rgba(245, 191, 66, 1);
    text-decoration: none;
  }
`

export const NoUnderline = styled.a`
  &:link {
    text-decoration: none;
  }
`

export const ColorHeader = styled.h4.attrs(props => ({
  className: "text-dark",
}))`
box-shadow: inset 0px -0.5em rgba(1, 177, 169, 0.2);
line-height: 1.75em;
font-size: 1.5em;
padding: 0 0.5em;
margin-left: -0.5em;
display: inline;
`

export const LabelText = styled.h5`
  color: rgba(1, 177, 169, 0.9);
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0;
  font-size: 1em;
  font-weight: bolder;
`

