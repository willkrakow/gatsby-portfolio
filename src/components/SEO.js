import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ pageTitle, pageDescription }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    title,
    titleTemplate,
    description,
    siteUrl,
  } = site.siteMetadata

  const seo = {
    title: pageTitle || title,
    description: pageDescription || description,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta name="description" content={seo.description} />

      {seo.url && <meta property="og:url" content={seo.url} />}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.title && <meta name="twitter:title" content={seo.title} />}

      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}

    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  pageTitle: PropTypes.string,
  pageDescription: PropTypes.string,
}

SEO.defaultProps = {
  pageTitle: null,
  pageDescription: null,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        titleTemplate
        description
        siteUrl
      }
    }
  }
`
