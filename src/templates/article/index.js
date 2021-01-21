import React from "react"
import { graphql } from "gatsby"
import Layout from '../../components/layout'
import { PageBanner, PostWrapper } from "../../components/containers"
import "../article/styles.css"

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const dateParsed = new Date(frontmatter.date)

  return (
    <Layout>
      <PageBanner
        title={frontmatter.title}
        subtitle={dateParsed.toDateString()}
        nospan
      />
      <PostWrapper html={html} img={frontmatter.thumbnail} />
    </Layout>
  )
}

export const query = graphql`
query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
        frontmatter {
            date
            slug
            thumbnail
            title
            layout
        }
        html
    }
}
`
