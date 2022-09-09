import React from "react";
import Layout from "../components/layout";
import { PageBanner, PageContainer } from "../components/containers";
import { graphql, PageProps } from 'gatsby'
import styled from "styled-components";
import { BioHeader, BioText, ColorHeader, ColorURL, LabelText } from "../components/Typography";
import { FlexRow } from "../components/Grid";

const UsesItemLink = styled.a`
text-decoration: none;
color: inherit;
`

const UsesItem = styled.article`
padding-bottom: ${props => props.theme.spacing[4]};
`

const UsesGrid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`

const UsesSectionWrapper = styled.div`
display: flex;
flex-direction: column;
margin-bottom: ${props => props.theme.spacing[5]};
`

interface IUseItem {
  title: string;
  label: string;
  image?: string;
  url: string;
  description?: string;
}

interface IUseSection {
  title: string;
  items: IUseItem[] 
}

interface IUses {
  allMarkdownRemark: {
    nodes: {
      frontmatter: {
        uses: IUseSection[]
      }
    }[]
  }
}
type Props = PageProps<IUses>

const CloudinaryImageComponent = styled.img``

interface ICloudinaryImage {
  width?: number;
  height?: number;
  image: string;
  alt: string;
}
const CloudinaryImage = ({width, height, image, alt}: ICloudinaryImage) => {
  let [baseUrl, imagePath] = image.split('upload');
  imagePath = imagePath.replace('upload', '');
  let sizeParts: string[] = [];
  
  if(width){
    sizeParts.push(`w_${width}`);
  }

  if (height) {
    sizeParts.push(`h_${height}`);
  }
  
  const sizePartString = sizeParts.join(',')
  console.log(sizePartString);
  const src = `${baseUrl}/upload${sizePartString.length > 0 ? '/c_scale,' : null}${sizePartString}${imagePath}`
  return (
    <CloudinaryImageComponent src={src} alt={alt} />
  )
}

export const UsesSection = ({ data }: { data: IUseSection }) => (
  <UsesSectionWrapper>
    <BioHeader>{data.title}</BioHeader>
    <UsesSectionWrapper>
      {data.items.map(item => (
        <UsesItem key={item.title}>
          <LabelText>{item.label}</LabelText>
          <ColorHeader>
            <UsesItemLink href={item.url}>{item.title}</UsesItemLink>
          </ColorHeader>
            {item.description && <BioText>{item.description}</BioText>}
        </UsesItem>
      ))}
    </UsesSectionWrapper>
  </UsesSectionWrapper>
)

export default function Uses(props: Props) {
    const {allMarkdownRemark: { nodes }} = props.data;
    const {frontmatter: {uses: sections}} = nodes[0];

    return (
      <Layout pageTitle="/uses" pageDescription="Work setup + recommendations">
        <PageBanner title="Uses" subtitle="Work setup + recommendations" />
        <PageContainer smaller>
            {sections.map(section => (
              <UsesSection data={section} />
            ))}
        </PageContainer>
      </Layout>
    )
}

export const query = graphql`
  {
    allMarkdownRemark(filter: { frontmatter: { layout: { eq: "uses" } } }) {
      nodes {
        frontmatter {
          uses {
            title
            items {
              image
              label
              title
              url
              description
            }
          }
        }
      }
    }
  }
`