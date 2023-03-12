import React from 'react';
import JobDescription from "../JobDescription";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { myTheme } from "../../utils/theme";


describe('JobDescription', () => {
    it('renders', async () => {
        const comp = render(
            <ThemeProvider theme={myTheme}>
                <JobDescription job={{title: "Test job", dates: "January 2021 - March 2022", layout: "Job", role: "test role", stack: ['one', 'two', 'three'] }} />
            </ThemeProvider>
        )

        expect(await comp.findAllByText('Test job')).toHaveLength(1);
        expect(await comp.findAllByText('January 2021 - March 2022')).toHaveLength(1);
        expect(await comp.findAllByText('test role')).toHaveLength(1);
    })
})