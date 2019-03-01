import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { primaryTheme } from '../shared/theme';
import Content from './Content';

describe('homepage <Content />', () => {
    it('should match the snapshot', () => {
        const component = renderer.create(
            <ThemeProvider theme={primaryTheme}>
                <Content />
            </ThemeProvider>
        );

        expect(component.toJSON()).toMatchSnapshot();
    });
});