import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { typeset } from '../theme';
import Header from './Header';

describe('<Header />', () => {
    const theme = {
        fg: '#fff000',
    };

    const render = component => renderer.create(
        <ThemeProvider theme={theme}>
            {component}
        </ThemeProvider>
    ).toJSON();

    it('should respect the theme colour', () => {
        const component = render(<Header />);
        expect(component).toHaveStyleRule('color', theme.fg);
    });

    it('should use the default line height when not overriden', () => {
        const component = render(<Header />);
        expect(component).toHaveStyleRule('line-height', typeset.lineHeight.xl);
    });

    it('should use the provided line height when available', () => {
        const component = render(<Header lineHeight={typeset.lineHeight.sm} />);
        expect(component).toHaveStyleRule('line-height', typeset.lineHeight.sm);
    });

    it('should use the default font size when not overriden', () => {
        const component = render(<Header />);
        expect(component).toHaveStyleRule('font-size', typeset.size.xl);
    });

    it('should use the provided font size when available', () => {
        const component = render(<Header size={typeset.size.sm} />);
        expect(component).toHaveStyleRule('font-size', typeset.size.sm);
    });
    
    it('should use the default font weight when not overriden', () => {
        const component = render(<Header />);
        expect(component).toHaveStyleRule('font-weight', `${typeset.weight.light}`);
    });

    it('should use the provided font weight when available', () => {
        const component = render(<Header weight={typeset.weight.heavy} />);
        expect(component).toHaveStyleRule('font-weight', `${typeset.weight.heavy}`);
    });

    it('should define a follow on content when an underline is requested', () => {
        const component = render(<Header underline />);
        expect(component).toHaveStyleRule('border-bottom', new RegExp(theme.fg), {
            modifier: '::after',
        });
    });
});