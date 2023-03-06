import styled from 'styled-components'


export const OrderedList = styled.ol`
  list-style: none;
  counter-reset: item;
  padding: 1em;
  li {
    counter-increment: item;
    padding-left: 0.5em;
    margin-bottom: 1em;
    font-size: ${props => props.theme.fontSizes.sm};
    color: ${props => props.theme.colors.darkTint};
    line-height: 1.5rem;
    font-weight: ${props => props.theme.fontWeights.light};
    font-family: 'Inter', sans-serif;

    &::before {
      content: counter(item) ".";
      color: ${props => props.theme.colors.primary};
      width: 1em;
      margin-right: 0.25em;
      font-weight: bold;
      text-align: center;
      display: inline-block;
    }
  }
`

export const BlockQuote = styled.blockquote`
  p {
    margin: 1em 0em;
    padding: 1rem 1em;
    font-weight: ${props => props.theme.fontWeights.heavy};
    color: ${props => props.theme.colors.primaryShade};
    border-left: 0.5em solid ${props => props.theme.colors.tertiary};
    background-color: ${props => props.theme.colors.lightShade};
  }
`

export const CodeBlock = styled.pre`
  padding: 1em;
  color: ${props => props.theme.colors.darkTint};
  background-color: ${props => props.theme.colors.lightTint};
  border-radius: ${props => props.theme.borderRadii[1]};
  line-height: 1.25em;
  display: flex;
  flex-direction: column;
  overflow-x: scroll;
`

export const UnorderedList = styled.ul`
  list-style: none;

  li {
    margin-bottom: 1em;
    font-size: ${props => props.theme.fontSizes.sm};
    color: ${props => props.theme.colors.darkTint};
    line-height: 1.5rem;
    font-weight: ${props => props.theme.fontWeights.light};
    font-family: 'Inter', sans-serif;
  }
  li::before {
    content: ">";
    color: ${props => props.theme.colors.primary};
    margin-left: -1em;
    font-weight: bold;
    margin-right: 0.375em;
    font-size: ${props => props.theme.fontSizes.md};
  }
`

export const CodeString = styled.code`
  color: ${props => props.theme.colors.primaryShade};
`

export const HR = styled.hr`
    margin: 2rem 6rem;
`


export const Summary = styled.summary`
  color: ${props => props.theme.colors.primaryShade};
  margin: 0.5rem 0;
  cursor: pointer;
`