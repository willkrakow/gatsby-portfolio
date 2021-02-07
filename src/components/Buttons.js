import React from 'react'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import colors from './ColorSwitcher'

export const PrimaryButton = styled(Button)`
background-color: ${colors.darkblue};
color: ${colors.white};
`

export const WhiteButton = styled(Button)`
background-color: ${colors.white};
color: ${colors.darkblue};
`