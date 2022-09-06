import React from 'react';
import styled from 'styled-components';

interface IHorizontalGrid {
  cols: [number, number, number];
  gap?: number
  direction: "row" | "column"
}
export const HorizontalGrid = styled.div<IHorizontalGrid>`
  display: grid;
  grid-template-columns: repeat(${props => props.cols[2]}, 1fr);
  grid-auto-flow: ${props => props.direction};
  gap: ${props => props.theme.spacing[props.gap || 0]};
  @media (max-width: 599px) {
    grid-template-columns: repeat(${props => props.cols[0]}, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(${props => props.cols[1]}, 1fr);
  }
`

interface IFlexItem {
    flex: number;
    justifyContent?: "center" | 'flex-start' | 'flex-end';
    flexDirection?: 'column' | 'row';
}

export const FlexItem = styled.div<IFlexItem>`
flex: ${props => props.flex}%;
flex-direction: ${props => props.flexDirection || 'row'};
display: flex;
justify-content: ${props => props.justifyContent || 'flex-start'};
`   

interface IGridItem {
    span: number;
}
export const GridItem = styled.div<IGridItem>`
grid-columns: span ${props => props.span || 1};
`

interface IFlex {
    justifyContent?: 'center' | 'flex-start' | 'flex-end';
    alignItems?: 'center' | 'flex-start' | 'flex-end';
    wrap: boolean;
    gap?: number;
}
export const FlexColumn = styled.div<IFlex>`
display: flex;
flex-direction: column;
justify-content: ${props => props.justifyContent || 'flex-start'};
align-items: ${props => props.alignItems || 'flex-start'};
gap: ${props => props.theme.spacing[props.gap || 0]};
`

export const FlexRow = styled.div<IFlex>`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justifyContent || "flex-start"};
  align-items: ${props => props.alignItems || "flex-start"};
  flex-wrap: ${props => (props.wrap ? "wrap" : "no-wrap")};
  gap: ${props => props.theme.spacing[props.gap || 0]};
`

