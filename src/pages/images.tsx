import React from "react"
import { graphql, PageProps } from "gatsby"
import styled from "styled-components"
import ClassifiedImage, { IClassifiedImage } from "../components/ClassifiedImage"
import Layout from "../components/layout"
import { PageBanner } from "../components/containers"

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 300px);
  grid-auto-flow: row;
  grid-auto-rows: 300px;
  gap: 20px;
  row-gap: 20px;
  justify-content: center;
`
const GridBox = styled.div`
  position: relative;
`

interface MLImageProps {
  allMlImage: {
    nodes: IClassifiedImage[]
  }
}
const MLImages = (props: PageProps<MLImageProps>) => {
  const { allMlImage = { nodes: [] } } = props?.data
  return (
    <Layout
      pageTitle={"Image labeling"}
      pageDescription={"Labeling images with TensorFlow"}
    >
        <PageBanner title="Image labeling" subtitle="Using TensorFlow to find my cat" />
      <ImageGrid>
        {allMlImage.nodes
          .filter(n => n.objects && n.objects.length > 0)
          .map((image, index) => {
            return (
              <GridBox key={index}>
                <ClassifiedImage image={image} />
              </GridBox>
            )
          })}
      </ImageGrid>
    </Layout>
  )
}

export default MLImages

export const query = graphql`
  {
    allMlImage {
      nodes {
        parent {
          ... on ImageSharp {
            id
            gatsbyImageData(height: 300, width: 300, aspectRatio: 1)
            original {
              height
              width
              src
            }
            fixed {
              height
              width
              src
            }
          }
        }
        label {
          className
          probability
        }
        objects {
          bbox
          class
          score
        }
      }
    }
  }
`;
