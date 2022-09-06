import React from 'react'
import { BioText } from './Typography'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
display: flex;
flex-direction: column;
padding: ${props => props.theme.spacing[5]};
justify-content: center;
`

export default function Footer() {
 return (
   <FooterWrapper>  
      <BioText centered gray>
             Copyright William Krakow {new Date().getFullYear()}
      </BioText>
   </FooterWrapper>
 )}
