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
      color: rgba(1, 177, 169, 1);
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
    color: #6c757d;
    border-left: 0.5em solid rgba(1, 177, 169, 0.2);
  }
`

export const CodeBlock = styled.pre.attrs(props => ({
  className: "text-secondary",
}))`
  padding: 1em;
  background-color: rgba(0, 10, 15, 0.05);
  border-radius: 2em;
  line-height: 1.25em;
`

export const UnorderedList = styled.ul`
  list-style: none;

  li::before {
    content: ">";
    color: rgba(1, 177, 169, 1);
    margin-left: -1em;
    font-weight: bold;
    margin-right: 0.375em;
    font-size: 1.5rem;
  }
`

export const HR = styled.hr`
    margin: 2rem 6rem;
`
