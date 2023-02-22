import React from "react"
import styled from "styled-components"
import { BioText, BioHeader, ColorURL, ColorAniLink, } from "./Typography"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faEye } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import RehypeReact from "rehype-react"
import { UnorderedList, OrderedList, BlockQuote, CodeBlock, CodeString, HR } from "../templates/article/MarkdownComponents"
import { FlexItem, FlexRow } from "./Grid"

export const Pill = styled.span`
  display: inline-block;
  padding: 4px 8px;
  vertical-align: center;
  border-radius: 12px;
  font-size: 14px;
  letter-spacing: 0.5px;
  font-weight: thin;
  background-color: ${props => props.theme.colors.tertiaryTint};
  color: ${props => props.theme.colors.white};
  font-family: "Source Code Pro", monospace;
`

const WrapperText = styled.span`
  opacity: 0.4;
  color: ${props => props.theme.colors.secondary};
`

interface IPageBanner {
  title: string;
  subtitle: string;
}
const PageBannerWrapper = styled.section`
margin-top: ${props => props.theme.spacing[5]};
padding-top: ${props => props.theme.spacing[3]};
padding-bottom: ${props => props.theme.spacing[2]};
display: flex;
flex-direction: column;
`

const PageBannerTitle = styled.h1`
font-size: ${props => props.theme.fontSizes.xxxl};
color: ${props => props.theme.colors.dark};
text-align: center;
font-weight: ${props => props.theme.fontWeights.thin};
letter-spacing: 2px;
`
export const PageBanner = ({ title = "William Krakow", subtitle = "Full Stack Software Engineer" }: IPageBanner) => (
  <PageBannerWrapper>
    <FlexRow wrap={false}>
      <FlexItem flex={100} justifyContent="center" flexDirection="column">
        <PageBannerTitle>
          <WrapperText>&#60;</WrapperText>
          {title}
          <WrapperText> /&#62;</WrapperText>
        </PageBannerTitle>
        <BioText centered>{subtitle}</BioText>
      </FlexItem>
    </FlexRow>
  </PageBannerWrapper>
)

interface IPostBanner {
  title: string;
  date: string;
  backLink: string;
  stack?: string[];
  livesite?: string;
  source?: string;
}

const PostBannerWrapper = styled.div`
padding-top: ${props => props.theme.spacing[4]};
padding-bottom: ${props => props.theme.spacing[1]};
display: flex;
flex-direction: column;
max-width: 700px;
margin: auto;
gap: ${props => props.theme.spacing[2]};
`

const PostBannerTitle = styled.h1`
font-size: ${props => props.theme.fontSizes.xxxl};
color: ${props => props.theme.colors.darkTint};
margin-top: ${props => props.theme.spacing[3]};
margin-bottom: ${props => props.theme.spacing[1]};
text-align: left;
`

const PostBannerLinks = styled.div`
display: flex;
`

const BackLink = styled(ColorAniLink)`
width: fit-content;
`
export const PostBanner = ({
  title = "New Post",
  date,
  backLink = "/projects",
  stack,
  livesite,
  source,
}: IPostBanner) => (
  <PostBannerWrapper>
    <BackLink to={backLink}>
      <FontAwesomeIcon icon={faArrowLeft} />
      &nbsp;All {backLink.slice(1)}
    </BackLink>
    <BioText gray>{new Date(date).toDateString()}</BioText>
    <PostBannerTitle>{title}</PostBannerTitle>
    {stack && <StackList stack={stack} />}
    <PostBannerLinks>
      {livesite && (
        <ColorURL href={livesite}>
          <FontAwesomeIcon icon={faEye} color="inherit" />
          &nbsp;Live site
        </ColorURL>
      )}
      {source && (
        <ColorURL href={source}>
          <FontAwesomeIcon color="inherit" icon={faGithub as IconDefinition} />
          &nbsp;Source
        </ColorURL>
      )}
    </PostBannerLinks>
  </PostBannerWrapper>
)

interface IStackList {
  stack: string[];
}
export const StackList = ({ stack }: IStackList) => (
  <FlexRow gap={3} wrap>
    {stack.map((tech, index) => (
      <Pill key={index}>{tech}</Pill>
    ))}
  </FlexRow>
)

const PostImage = styled.img`
max-width: 100%;
height: auto;
margin: 2rem auto;
display: block;
`

export const WrapLink = styled.a`
  overflow-wrap: anywhere;
  color: ${props => props.theme.colors.primary};
`

export const Summary = styled.summary`
  color: ${props => props.theme.colors.primaryShade};
  margin: 0.5rem 0;
`

// @ts-ignore
const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    h3: BioHeader,
    p: BioText,
    ul: UnorderedList,
    ol: OrderedList,
    blockquote: BlockQuote,
    pre: CodeBlock,
    img: PostImage,
    a: WrapLink,
    code: CodeString,
    hr: HR,
    summary: Summary
  },
}).Compiler;


export const ResponsiveImg = styled.img`
  width: 100%;
  margin: 1.5rem auto;
  display: block;
  height: auto;
  margin-bottom: 1rem;
`


interface IPageContainer {
  smaller?: boolean
}

export const PageContainer = styled.div<IPageContainer>`
  max-width: ${props => (props.smaller ? "700px" : "1200px")};
  margin: auto;
  display: flex;
  flex-direction: column;
`

const PostWrapperSection = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
`

interface IPostWrapper {
  htmlAst: string
  img?: string
}
export const PostWrapper = ({
  htmlAst = "<p>Something went wrong. There's No content in this post yet.</p>",
  img,
}: IPostWrapper) => (
  <PageContainer smaller>
      <PostWrapperSection>
        {img ? (
          <ResponsiveImg
            src={`/${img}`}
          />
        ) : null}
      </PostWrapperSection>
      <PostWrapperSection>
        {renderAst(htmlAst)}
      </PostWrapperSection>
  </PageContainer>
)
