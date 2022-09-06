import React from "react"
import styled from "styled-components"
import { BlackButton, WhiteButton, HeroHeader, HeroSub } from "./Typography"
import { Link } from "gatsby"
import { backgroundShift } from "../utils/animations"

const HeroContainer = styled.section`
  background: ${props => props.theme.colors.primary};
  background: ${props => props.theme.gradients.blueGreen};
  background-size: 400%;
  background-position: top left;
  animation: ${backgroundShift} 10s ease-in-out infinite;
  padding: ${props => props.theme.spacing[6]} 0;
  border-radius: ${props => props.theme.borderRadii[2]};
  
`

const HeroInner = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`

const HeroImg = styled.div`
  transform: rotate(12deg);
  transition: 0.3s;
  background: ${props => props.theme.colors.light};
  z-index: 1;
  padding: 1rem;
  border-radius: ${props => props.theme.borderRadii[1]};
  box-shadow: 0px 5px 20px ${props => props.theme.colors.lightShade};
  border: 1px solid rgba(3, 120, 152, 0.1);
  &:hover {
    transform: rotate(0deg);
  }
  @media screen and (max-width: 575px) {
    margin-top: 3rem;
  }
`

const HeroImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  flex: 1 1 500px;
  text-align: center;
  margin: auto;
`

const HeroContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 1 500px;
`
const HeroImageBox = styled.div`
  z-index: 10;
  width: 300px;
`

const HeroActions = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  height: 100%;
  justify-content: center;
`

interface IHero {
  children: React.ReactNode
}
const Hero = ({ children }: IHero) => {
  return (
    <HeroContainer>
      <HeroInner>
        <HeroImageWrapper>
          <HeroImg>
            <HeroImageBox>{children}</HeroImageBox>
          </HeroImg>
        </HeroImageWrapper>
        <HeroContentWrapper>
          <HeroHeader>William Krakow</HeroHeader>
          <HeroSub>Dev | Designer | Writer</HeroSub>
          <HeroActions>
            <Link to="/projects">
              <BlackButton>Projects</BlackButton>
            </Link>
            <Link to="/contact">
              <WhiteButton>Contact</WhiteButton>
            </Link>
          </HeroActions>
        </HeroContentWrapper>
      </HeroInner>
    </HeroContainer>
  )
}

export default Hero
