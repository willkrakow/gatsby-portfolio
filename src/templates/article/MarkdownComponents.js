import styled from 'styled-components'


export const OrderedList = styled.ol`
  list-style: none;
  counter-reset: item;
  padding: 1em;
  li {
    counter-increment: item;
    line-height: 1.75em;
    padding-left: 2em;
    margin-bottom: 1em;

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
    margin: 1em 1em;
    padding: 0 1em;
    font-style: italic;
    color: ${props => props.theme.colors.muted};
    border-left: 0.5em solid ${props => props.theme.colors.tertiary};
  }
`

export const CodeBlock = styled.pre`
  padding: 1em;
  color: ${props => props.theme.colors.darkTint};
  background-color: ${props => props.theme.colors.light};
  border-radius: ${props => props.theme.borderRadii[1]};
  line-height: 1.25em;
  display: flex;
  flex-direction: column;
  overflow-x: scroll;
`

export const UnorderedList = styled.ul`
  list-style: none;

  li::before {
    content: ">";
    color: ${props => props.theme.colors.primary};
    margin-left: -1em;
    font-weight: bold;
    margin-right: 0.375em;
    font-size: ${props => props.theme.fontSizes.md};
  }
`

export const HR = styled.hr`
    margin: 2rem 6rem;
`
