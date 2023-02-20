import React from 'react'
import { LabelText, BioText, BioHeader, BlackButton } from './Typography'
import { Link } from 'gatsby'
import styled from 'styled-components'

interface ITwoColumns {
  children: any;
  textColumn: {
    label: string;
    title: string;
    description: string;
  },
  cta: {
    link: string;
    label: string;
  } | null
}

const Wrapper = styled.section`
  margin-top: ${props => props.theme.spacing[3]};
  margin-bottom: ${props => props.theme.spacing[5]};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing[6]};
`

const Column = styled.div`
  padding: ${props => props.theme.spacing[5]};
  flex: 0 1 500px;
`
export default function TwoColumns (props: ITwoColumns) {
  const { children, textColumn, cta } = props
  return (
    <Wrapper>
        <Column>
          <LabelText>{textColumn.label}</LabelText>
          <BioHeader>{textColumn.title}</BioHeader>
          <BioText>{textColumn.description}</BioText>
          {cta !== null && (
            <Link to={cta.link}>
              <BlackButton>{cta.label}</BlackButton>
            </Link>
          )}
        </Column>
        <Column>
          {React.createElement(children)}
        </Column>
    </Wrapper>
  )
}