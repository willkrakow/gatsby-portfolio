import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import Header from './header.js';

export default function Layout({ children }) {
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

