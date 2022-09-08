import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import Header from './Header';
import Seo from './Seo'
import Footer from './Footer';
import styled, { createGlobalStyle } from 'styled-components'
import ThemeWrapper from './ThemeWrapper';

const Main = styled.main`
min-height: 100vh;
max-width: 100vw;
padding: ${props => props.theme.spacing[4]};
`

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 18px;
    font-family: 'Open Sans', sans-serif;
    background-color: ${props => props.theme.colors.lightTint};
    transition: all 0.5s ease;
    margin: 0;
  }
  :root {
    font-size: 16px;
    transition: all 0.5s ease;
  }
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

        <ThemeWrapper>
          <GlobalStyle />
          <Seo pageTitle={pageTitle} pageDescription={pageDescription} />
          <Header
            menuLinks={data.site.siteMetadata.menuLinks}
            siteTitle={data.site.siteMetadata.title}
          />
          <Main>{children}</Main>
          <Footer />
        </ThemeWrapper>
      )}
    />
  )
        }

