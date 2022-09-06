import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, } from 'gatsby';
import { capitalized } from '../utils'
import { ColorAniLink, WhiteButton } from './Typography';
import styled, { useTheme } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMoon, faSun, faTimes } from '@fortawesome/free-solid-svg-icons';
import { navAnimation, navNullAnimation, navCloseAnimation } from '../utils/animations';
import { ThemeToggleContext } from '../utils/theme';

const Logo = styled.span`
  font-family: monospace;
  color: ${props => props.theme.colors.primary};
  font-size: 2rem;
  text-decoration: none;
`;

const MobileLink = styled(ColorAniLink)`
  font-size: ${props => props.theme.fontSizes.sm};
  width: 100%;
`


const NavContainer = styled.header`
max-width: 1200px;
margin: auto;
`

const MobileNavbar = styled.nav`
  display: none;
  overflow: hidden;
  @media (max-width: 700px) {
    display: flex;
    justify-content: space-between;
    padding: ${props => props.theme.spacing[2]};
  }
`

const DesktopNavbar = styled.nav`
  display: none;
  @media (min-width: 700px) {
    display: flex;
    justify-content: space-between;
    padding: ${props => props.theme.spacing[2]};
    align-items: center;
  }
`

const Hamburger = styled.button`
  border: none;
  padding: ${props => props.theme.spacing[2]};
  width: 50px;
  height: 50px;
  z-index: 200;
  background: ${props => props.theme.colors.lightTint};
  border-radius: ${props => props.theme.borderRadii[1]};
  overflow: hidden;
`

interface IMobileMenuItemWrapper {
  isOpen: boolean;
  hasLoaded: boolean;
}
const MobileMenuItemWrapper = styled.div<IMobileMenuItemWrapper>`
  position: absolute;
  inset: 0;
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: ${props => props.theme.borderRadii[2]};
  z-index: 100;
  right: 0;
  height: 100vh;
  left: auto;
  overflow: hidden;
  animation: 0.4s
    ${props =>
      props.isOpen
        ? navAnimation
        : props.hasLoaded
        ? navCloseAnimation
        : navNullAnimation}
    ease forwards;
`

const MobileMenuItemInner = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
`

const DesktopMenuItemWrapper = styled.div`
display: flex;
align-items: center;
`
interface IHeaderLink {
  link: string;
  name: string
}
interface IHeader {
  menuLinks: IHeaderLink[]
}
export default function Header({menuLinks}: IHeader) {
  const {colors} = useTheme();
  const iconColor = colors.primary;
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const hasLoaded = useRef(false);
  const {toggleTheme, currentTheme} = useContext(ThemeToggleContext);
  
  useEffect(() => {
    hasLoaded.current = true;    
  }, [])

  const handleToggleNav = () => setIsMobileOpen(prev => !prev);
    return (
      <NavContainer>
        <DesktopNavbar>
          <Logo as={Link} to="/">
            WK
          </Logo>
          <DesktopMenuItemWrapper>
            {menuLinks.map((link, index) => (
              <ColorAniLink fade key={index} to={link.link}>
                {capitalized(link.name)}
              </ColorAniLink>
            ))}
            <WhiteButton onClick={toggleTheme}><FontAwesomeIcon icon={currentTheme === 'light' ? faMoon : faSun} color={iconColor} /></WhiteButton>
          </DesktopMenuItemWrapper>
        </DesktopNavbar>
        <MobileNavbar>
          <Logo as={Link} to="/">
            WK
          </Logo>
          <Hamburger onClick={handleToggleNav}>
            <FontAwesomeIcon
              icon={isMobileOpen ? faTimes : faBars}
              size="2x"
              color={iconColor}
            />
          </Hamburger>
          <MobileMenuItemWrapper
            isOpen={isMobileOpen}
            hasLoaded={hasLoaded.current}
          >
            <MobileMenuItemInner>
              {menuLinks.map((link, index) => (
                <MobileLink fade key={index} to={link.link}>
                  {capitalized(link.name)}
                </MobileLink>
              ))}
            </MobileMenuItemInner>
          </MobileMenuItemWrapper>
        </MobileNavbar>
      </NavContainer>
    )
}