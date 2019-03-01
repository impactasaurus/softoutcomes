import React from 'react';
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { typeset } from '../theme';
import Link, { BlankLink } from './Link';

describe('<Link />', () => {
    const theme = {
        fg: '#fff000',
        highlight: '#aaa000',
    };

    const render = component => renderer.create(
        <StaticRouter context={{}}>
            <ThemeProvider theme={theme}>
                {component}
            </ThemeProvider>
        </StaticRouter>
    ).toJSON();

    it('should respect the provided theme', () => {
        const component = render(<Link to='/somewhere' />);
        expect(component).toHaveStyleRule('color', theme.fg);
        expect(component).toHaveStyleRule('border-bottom', new RegExp(theme.fg));
        expect(component).toHaveStyleRule('color', theme.highlight, {
            modifier: ':hover',
        });
    });

    it('should have a default line height when no override provided', () => {
        const component = render(<Link to='/somewhere' />);
        expect(component).toHaveStyleRule('line-height', typeset.lineHeight.base);
    });

    it('should have the provided line height when override provided', () => {
        const component = render(<Link to='/somewhere' lineHeight={typeset.lineHeight.lg} />);
        expect(component).toHaveStyleRule('line-height', typeset.lineHeight.lg);
    });

    it('should have a default font size when no override provided', () => {
        const component = render(<Link to='/somewhere' />);
        expect(component).toHaveStyleRule('font-size', typeset.size.base);
    });

    it('should have the provided font size when override provided', () => {
        const component = render(<Link to='/somewhere' size={typeset.size.lg} />);
        expect(component).toHaveStyleRule('font-size', typeset.size.lg);
    });

    describe('<BlankLink />', () => {
        it('should have a target of _blank', () => {
            const component = render(<BlankLink to='/somewhere' />);
            expect(component.props.target).toEqual('_blank');
        });
    });
});