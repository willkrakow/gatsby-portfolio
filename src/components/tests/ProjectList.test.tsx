import React from "react"
import Component from "../ProjectList"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import { myTheme } from "../../utils/theme"
jest.mock("../Typography.tsx");
jest.mock("styled-components");
jest.mock("gatsby", () => {
  return {
    default: jest.fn(),
    useStaticQuery: jest.fn().mockReturnValue({
      allMarkdownRemark: {
        edges: [
          {
            node: {
              excerpt: "excerpt here",
              frontmatter: {
                slug: "tester",
                title: "Tester",
                stack: ["Stack"],
              },
            },
          },
        ],
      },
    }),
    Link: jest.fn(),
    graphql: jest.fn(),
  }
})
describe("ProjectList", () => {
  it("renders without exploding", () => {
    const comp = renderer.create(<ThemeProvider theme={myTheme}>
          <Component />
        </ThemeProvider>)

    console.log(comp)
  })
})
