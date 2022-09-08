import React, { useState, useEffect, useMemo } from "react"
import Layout from "../components/layout"
import Project from "../components/Project"
import { PageBanner, PageContainer } from "../components/containers"
import { graphql } from "gatsby"
import _ from "lodash"
import styled from "styled-components"
import { BioText, BlackButton, WhiteButton } from '../components/Typography'

const COMMON_ITEMS = 8;

const SortButton = styled.button<{selected: boolean}>`
  border: none;
  width: 100%;
  margin-bottom: ${props => props.theme.spacing[2]};
  text-align: left;
  cursor: pointer;
  background-color: ${props => (props.selected ? props.theme.colors.tertiary : props.theme.colors.light)};
  color: ${props => (props.selected ? props.theme.colors.light : props.theme.colors.tertiary)};
  transition: all 0.3s ease;
  &:hover {
    background-color: ${props =>
      props.selected ? props.theme.colors.tertiaryTint : props.theme.colors.tertiary};
    color: ${props => props.theme.colors.light};
  }
  border-radius: 8px;
  padding: 8px;
  display: flex;
  align-items: center;
  font-family: monospace;
  letter-spacing: 1px;
  font-weight: ${props => props.theme.fontWeights.heavy};
`

const SortBox = styled.div`
display: none;
@media(min-width: 600px) {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  padding: 1rem;
}
`

const SortBoxCounter = styled.span`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.tertiary};
  font-weight: bold;
  background-color: ${props => props.theme.colors.light};
  padding: 4px 6px;
  border-radius: 9999px;
  margin-left: auto;
  text-align: center;
`

const MobileSortBox = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid rgba(112, 38, 205, 0.4);
  border-radius: 8px;
  margin: 0 32px;
  position: relative;
  @media (min-width: 600px) {
    display: none;
  }
  button {
    flex: 0 0 100%;
    display: inline-block;
  }
  div.dropdown-menu {
    width: 100%;
    padding: 8px 16px;
  }
`

const FancyDropdownItem = styled.span<{selected: boolean}>`
  background-color: ${props => (props.selected ? "#7026b9" : "#fafafa")};
  color: ${props => (props.selected ? "#fafafa" : "#7026b9")};
  transition: all 0.3s ease;
  border-radius: 8px;
  width: 100%;
  border: none;
  text-align: left;
  margin-bottom: 0.25em;
  padding: 8px;
  &:hover {
    background-color: ${props =>
      props.selected ? "rgb(132 58 205)" : "rgba(112, 38, 205, 0.4)"};
  }
`

const ProjectGrid = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-auto-flow: rows;
gap: ${props => props.theme.spacing[2]};
@media (min-width: 600px){
  grid-template-columns: 1fr 2fr;
}
@media (min-width: 900px){
  grid-template-columns: 1fr 3fr;
}
`

const ProjectGridFilters = styled.aside`
  display: flex;
  flex-direction: column;
`

const ProjectGridContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto, minmax(300px, 1fr));
  grid-auto-rows: auto;
  gap: ${props => props.theme.spacing[4]};
`

const DropdownMenu = styled.div<{ isOpen: boolean }>`
  height: ${props => (props.isOpen ? "auto" : "0px")};
  max-height: 60vh;
  flex-direction: column;
  overflow-y: ${props => (props.isOpen ? "scroll" : "hidden")};
  overflow-x: hidden;
  position: absolute;
  top: 2rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  padding: ${props => (props.isOpen ? props.theme.spacing[3] : "0px")};
  background-color: ${props => props.theme.colors.lightTint};
  @media (min-width: 600px){
    overflow-y: hidden;
    height: 0px;
    display: none;
  }
`
interface IProjectFrontmatter {
  date: string
  description: string
  layout: "project" | "article"
  livesite?: string
  publicId: string
  slug: string
  source?: string
  stack: string[]
  thumbnail: string
  title: string
}

interface IProjectsPage {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          frontmatter: IProjectFrontmatter;
          excerpt: string;
          html: string;
        }
      }[]
    }
  }
}
export default function Writing({ data }: IProjectsPage) {
  const { allMarkdownRemark } = data
  const { edges } = allMarkdownRemark

  const [toQuery, setToQuery] = useState<string[]>([])
  const [filtered, setFiltered] = useState([...edges])
  const [showMore, setShowMore] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const handleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  }
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget.value
    if ( toQuery.includes(btn)) {
      handleRemove(btn)
    }
    else {
      handleAdd(btn)
    }
  }
  const handleAdd = (tech: string) => {
    setToQuery([tech, ...toQuery])
  }

  const handleRemove = (tech: string) => {
    const temp = _.without(toQuery, tech)
    setToQuery([...temp]);
  }

  const handleShowMore = () => {
    setShowMore(prev => !prev)
  }

  const handleClearFilters = () => setToQuery([]);

  useEffect(() => {
    const handleFilter = () => {
      const temp = _.filter(edges, function (edge) {
        for (let i = 0; i < toQuery.length; i++) {
          let stackTest = edge.node.frontmatter.stack
          if (_.difference(toQuery, stackTest).length === 0) {
            return true
          }
        }
      })
      // @ts-ignore
      setFiltered(temp)
    }

    if (toQuery.length > 0){
      handleFilter()
    } else {
      setFiltered([...edges])
    }
  }, [toQuery, edges])

  type StackItems = {
    [key: string]: number;
  }
  const stackItems = useMemo(() => filtered.reduce((acc, curr) => {
    const currentItems = acc;
    curr.node.frontmatter.stack.forEach(item => {
      if(typeof currentItems[item] === 'undefined'){
        currentItems[item] = 1
      } else {
        currentItems[item] += 1
      }
    });

    return currentItems
  }, {} as StackItems), [filtered]);

  const stackItemArray = useMemo(() => {
    return Object
    .entries(stackItems)
    .map(([key, count]) => ({
      name: key,
      count,
    }))
    .sort((a, b) => b.count - a.count)
  }, [stackItems]);

  const commonItems = stackItemArray.slice(0,COMMON_ITEMS);
  const uncommonItems = stackItemArray.slice(COMMON_ITEMS);

  return (
    <Layout
      pageTitle="Projects"
      pageDescription="A collection of personal and professional development projects."
    >
      <PageBanner
        title="Projects"
        subtitle="Personal, professional, and more."
      />
      <PageContainer>
        <ProjectGrid>
          <ProjectGridFilters>
            <SortBox>
              <BioText gray>Filter by language / library</BioText>
              {commonItems.map((btn, index) => (
                <SortButton
                  key={index}
                  selected={toQuery.includes(btn.name)}
                  value={btn.name}
                  onClick={handleClick}
                >
                  {btn.name} <SortBoxCounter>{btn.count}</SortBoxCounter>
                </SortButton>
              ))}
              {showMore &&
                uncommonItems.map((btn, index) => (
                  <SortButton
                    key={index}
                    selected={toQuery.includes(btn.name)}
                    value={btn.name}
                    onClick={handleClick}
                  >
                    {btn.name} <SortBoxCounter>{btn.count}</SortBoxCounter>
                  </SortButton>
                ))}
              {uncommonItems.length > COMMON_ITEMS && (
                <WhiteButton onClick={handleShowMore}>
                  {showMore ? "Show Fewer" : "Show More"}
                </WhiteButton>
              )}
              <BlackButton
                onClick={handleClearFilters}
                disabled={toQuery.length === 0}
              >
                Reset
              </BlackButton>
            </SortBox>
            <MobileSortBox>
              <WhiteButton onClick={handleDropdown}>
                Filter by language / library
              </WhiteButton>
              <DropdownMenu isOpen={isDropdownOpen}>
                {commonItems.map((btn, index) => (
                  <SortButton
                    key={index}
                    selected={toQuery.includes(btn.name)}
                    value={btn.name}
                    onClick={handleClick}
                  >
                    {btn.name} <SortBoxCounter>{btn.count}</SortBoxCounter>
                  </SortButton>
                ))}
                {showMore &&
                  uncommonItems.map((btn, index) => (
                    <SortButton
                      key={index}
                      selected={toQuery.includes(btn.name)}
                      value={btn.name}
                      onClick={handleClick}
                    >
                      {btn.name} <SortBoxCounter>{btn.count}</SortBoxCounter>
                    </SortButton>
                  ))}
                {uncommonItems.length > COMMON_ITEMS && (
                  <WhiteButton onClick={handleShowMore}>
                    {showMore ? "Show Fewer" : "Show More"}
                  </WhiteButton>
                )}
              </DropdownMenu>
            </MobileSortBox>
          </ProjectGridFilters>
          <ProjectGridContent>
            {filtered.map((article, index) => (
              <Project index={index} key={index} article={article} />
            ))}
          </ProjectGridContent>
        </ProjectGrid>
      </PageContainer>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { layout: { eq: "project" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            thumbnail
            slug
            date
            stack
            publicId
            layout
            source
            livesite
            description
          }
          html
          excerpt(format: PLAIN)
        }
      }
    }
  }
`
