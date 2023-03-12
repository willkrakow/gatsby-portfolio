import React from "react"
import { BioText, ColorLink, BioHeader, LabelText } from "./Typography";
import { Link } from 'gatsby'
import styled from 'styled-components'
import { IArticle } from "../types";
import { backgroundShift } from "../utils/animations";
const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/djmk8xgrk/image/upload/c_lfill,g_auto,h_480,q_auto,w_480/v1616367352/Portfolio/`;


const CloudImage = styled.img`
max-width: 100%;
width: 100%;
display: flex;
margin: auto;
background: linear-gradient(to bottom right, rgba(4, 13, 20, 0.5), rgba(4,13,20,0.9), rgba(4, 13, 20, 0.5));
background-size: 400%;
background-position: left top;
animation: 1s ${backgroundShift} ease-in infinite;
`

const ArticleCard = styled.article`
  margin-bottom: ${props => props.theme.spacing[4]};
  padding: ${props => props.theme.spacing[4]} ${props => props.theme.spacing[5]};
  background-color: ${props => props.theme.colors.light};
  border-radius: ${props => props.theme.borderRadii[2]};
  width: 100%;
`

const ArticleRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: hidden;
`

const ArticleCardImage = styled.div`
  flex: 1 1 200px;
  display: flex;
  align-items: center;
  height: 200px;
`

const ArticleCardContent = styled.div`
  flex: 1 1 500px;
  padding: ${props => props.theme.spacing[3]};
`

interface IArticleProps {
  article: {
    node: IArticle;
  }
}
export default function Article({article}: IArticleProps) {


  const { slug, title, date, publicId, description} = article.node.frontmatter
  const dateParsed = new Date(date)

  return (
      <ArticleCard>
        <ArticleRow>
            <ArticleCardImage>
              <CloudImage
                src={`${CLOUDINARY_BASE_URL}${publicId || "dandelionandme_xb5bxm"}.png`}
                alt={title}
                loading="lazy"
              />
            </ArticleCardImage>
          <ArticleCardContent>
              <LabelText>{dateParsed.toDateString()}</LabelText>
              <Link to={`/articles/${slug}`}>
                <BioHeader>{title}</BioHeader>
              </Link>
              <BioText>{description}</BioText>
              <ColorLink
              to={`/articles/${slug}`}
            >
              Read more
            </ColorLink>
          </ArticleCardContent>
        </ArticleRow>
      </ArticleCard>
  )
}
