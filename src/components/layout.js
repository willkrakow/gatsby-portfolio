import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import Header from './header.js';
import SEO from './SEO'
import Footer from './Footer';
import styled from 'styled-components'

const Main = styled.main`
min-height: 100vh;
max-width: 100vw;
`

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
          <Main>{children}</Main>
          <Footer />
        </React.Fragment>
      )}
    />
  )
        }

