import styled from 'styled-components'


export const OrderedList = styled.ol`
  list-style: none;
  counter-reset: item;

  li {
    margin-bottom: 1em;
    counter-increment: item;
    &::before {
      content: counter(item) ".";
      color: rgba(1, 177, 169, 1);
      width: 1em;
      margin-top: 1em;
      margin-right: 0.25em;
      font-weight: bold;
      font-size: 2.5em;
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

export const UnorderedList = styled.ul`
  list-style: none;

  li::before {
    content: ">";
    color: rgba(1, 177, 169, 1);
    margin-left: -1em;
    font-weight: bold;
    margin-right: 0.375em;
    font-size: 1.5em;
  }
`

export const HR = styled.hr`
    margin: 2rem 6rem;
`
