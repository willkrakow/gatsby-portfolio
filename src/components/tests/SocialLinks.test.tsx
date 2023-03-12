import React from 'react';
import SocialLinks from "../SocialLinks"
import {render} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { myTheme } from '../../utils/theme';

describe("tester", () => {
    it('SocialLinks', async () => {
        const comp = render(
            <ThemeProvider theme={myTheme}>
                <SocialLinks />
            </ThemeProvider>
        );
        const els = await comp.findAllByText('github.com', {exact: false});
        expect(els).toHaveLength(1);
        expect(comp).toBeDefined();
    })
})