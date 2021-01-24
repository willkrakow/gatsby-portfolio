import React from "react"
import { graphql } from "gatsby"
import Layout from '../../components/layout'
import { PostBanner, PostWrapper } from "../../components/containers"

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, htmlAst, timeToRead } = markdownRemark
  const dateParsed = new Date(frontmatter.date)

  return (
    <Layout>
        <PostBanner
          title={frontmatter.title}
          date={dateParsed.toDateString().slice(3)}
          timeToRead={timeToRead.toString()}
          backLink="/writing"
          nospan
        />
        <PostWrapper htmlAst={htmlAst} img={frontmatter.thumbnail} />
    </Layout>
  )
}

export const query = graphql`
query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
        timeToRead
        frontmatter {
            date
            slug
            thumbnail
            title
            layout
        }
        html
        htmlAst
    }
}
`
