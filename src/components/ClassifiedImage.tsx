import React, { useRef } from 'react';
import { GatsbyImageProps } from 'gatsby-image';
import styled from 'styled-components';
export interface IMLObject {
  bbox: [number, number, number, number]
  score: number
  class: string
}

export interface IMLLabel {
  className: string;
  probability: number;
}

export interface IClassifiedImage {
  id: string
  parent: {
    gatsbyImageData: GatsbyImageProps;
    original: {
      height: number;
      width: number;
      src: string;
    };
    fixed: {
      height: number;
      width: number;
      src: string;
    }
  };
  label: IMLLabel;
  objects: IMLObject[];
  gatsbyImageData: GatsbyImageProps;
  fixed: {
    aspectRatio: number;
  }
}

interface IImageObjectOutline {
    left: number;
    top: number;
    width: number;
    height: number;
}
const ImageObjectOutline = styled.div<IImageObjectOutline>`
  position: absolute;
  display: block;
  border-width: 2px;
  border-style: solid;
  border-color: transparent;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.0);
  &:hover {
    border-color: ${props => props.theme.colors.primaryTint};
    border-width: 5px;
    top: ${props => props.top - 10}px;
    left: ${props => props.left - 10}px;
    width: ${props => props.width + 10}px;
    height: ${props => props.height + 10}px;
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.3);
  }
`

const ImageObjectLabel = styled.p`
    font-family: 'Courier New', Courier, monospace;
    color: white;
    text-align: center;
    position: absolute;
    margin: 0;
    font-weight: bold;
    font-size: 1rem;
`

const ImageObjectImage = styled.img`
max-width: 100%;
width: 300px;
height: 300px;
position: absolute;
inset: 0;
object-fit: cover;
`;
const ClassifiedImage = ({ image }: { image: IClassifiedImage }) => {
  const ref = useRef<HTMLImageElement | null>(null)
  const boxWidth = 300;
  const boxHeight = 300;
  const heightRatio = boxHeight / image.parent.original.height
  
  const widthRatio = boxWidth / image.parent.original.width
  const adjustedObjects = (image.objects || []).map(obj => {
    const [x, y, width, height] = obj.bbox
    const newbbox: IMLObject["bbox"] = [
      x * widthRatio,
      y * heightRatio,
      width * widthRatio,
      height * heightRatio,
    ]

    return {
      ...obj,
      bbox: newbbox,
    }
});

  return (
    <>
      <ImageObjectImage
        src={image.parent.original.src}
        alt={image.label.className || ""}
        ref={ref}
      />
      {adjustedObjects.length > 0 &&
        adjustedObjects.map((obj, index) => (
          <ImageObjectOutline
            key={index}
            left={obj.bbox[0]}
            top={obj.bbox[1]}
            width={obj.bbox[2]}
            height={obj.bbox[3]}
          >
            <ImageObjectLabel>{obj.class}</ImageObjectLabel>
          </ImageObjectOutline>
        ))}
    </>
  )
}


export default ClassifiedImage;