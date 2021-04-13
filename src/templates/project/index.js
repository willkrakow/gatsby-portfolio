import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import { PostBanner, PostWrapper } from '../../components/containers'

export default function Project({data}) {
    const { markdownRemark } = data
    const { frontmatter, htmlAst, timeToRead } = markdownRemark

    //todo: add custom widget that lets me select a React component (i.e., a Font Awesome Icon) from a list

    return (
      <Layout
        pageTitle={frontmatter.title}
        pageDescription={frontmatter.excerpt}
      >
        <PostBanner
          title={frontmatter.title}
          date={""}
          backLink="/projects"
          timeToRead={timeToRead.toString()}
          stack={frontmatter.stack}
          livesite={frontmatter.livesite || null}
          source={frontmatter.source || null}
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
        slug
        thumbnail
        title
        layout
        stack
        source
        livesite
      }
      htmlAst
      excerpt
    }
  }

`
