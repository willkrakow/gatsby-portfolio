import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import Header from './header.js';
import SEO from './SEO'


export default function Layout({ children, pageDescription, pageTitle }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              menuLinks {
                name
                link
              }
            }
          }
        }
      `}
      render={data => (
        <React.Fragment>
          <SEO pageTitle={pageTitle} pageDescription={pageDescription} />
          <Header
            menuLinks={data.site.siteMetadata.menuLinks}
            siteTitle={data.site.siteMetadata.title}
          />
          <div>{children}</div>
        </React.Fragment>
      )}
    />
  )
        }

