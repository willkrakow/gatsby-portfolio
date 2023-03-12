import React from 'react'
import TechIcons from "../TechIcons";
import { render } from "@testing-library/react";
import { myTheme } from "../../utils/theme";
import { ThemeProvider } from "styled-components";


describe('TechiIcons', () => {
    it('renders', async () => {
        const comp = render(
            <ThemeProvider theme={myTheme}>
                <TechIcons />
            </ThemeProvider>
        );

        const els = comp.container.querySelectorAll('svg');
        expect(els).toHaveLength(11)
    })
})