import React from "react";
import Layout from "../components/layout";
import Article from "../components/Article";
import { PageBanner, PageContainer } from "../components/containers";
import { graphql } from 'gatsby'
import { FlexColumn } from "../components/Grid";

export default function Writing({data}) {
  const { allMarkdownRemark } = data
  const { edges } = allMarkdownRemark
  
    return (
      <Layout pageTitle="Writing" pageDescription="Articles about everything under the sun.">
        <PageBanner
          title="Writing"
          subtitle="Perhaps not relevant to web dev but I like to write so these are here."
          nospan
        />
        <PageContainer>
            <FlexColumn>
              {edges.map((article, index) => (
                <Article index={index} key={index} article={article} />
              ))}
        </FlexColumn>
        </PageContainer>
      </Layout>
    )
}


export const query = graphql`
  {
    allMarkdownRemark(filter: { frontmatter: { layout: { eq: "article" } } }) {
      edges {
        node {
          frontmatter {
            title
            thumbnail
            slug
            layout
            date
            publicId
            description
          }
          html
          excerpt(format: PLAIN)
        }
      }
    }
  }
`