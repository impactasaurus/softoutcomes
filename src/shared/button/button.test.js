import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import Button from './button';

describe('<Button />', () => {
    const theme = {
        fg: '#fff000',
        bg: '#bbb000',
        lowlight: 'rgb(255, 0, 0)',
    };
    const render = component => renderer.create(
        <ThemeProvider theme={theme}>
            {component}
        </ThemeProvider>
    );

    it('should respect the current theme', () => {
        const component = render(<Button />).toJSON();
        expect(component).toHaveStyleRule('background-color', theme.bg);
        expect(component).toHaveStyleRule('border', new RegExp(theme.fg));
        expect(component).toHaveStyleRule('color', theme.fg);
        expect(component).toHaveStyleRule('background-color', 'rgba(255,0,0,0.25)', {
            modifier: ':hover',
        });
    });
});