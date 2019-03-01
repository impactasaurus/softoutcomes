import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { typeset } from '../theme';
import Text from './text';

describe('<Text />', () => {
    const theme = {
        fg: '#fff000',
    };

    const render = component => renderer.create(
        <ThemeProvider theme={theme}>
            {component}
        </ThemeProvider>
    ).toJSON();
    
    it('should respect the provided theme when not overriden', () => {
        const component = render(<Text />);
        expect(component).toHaveStyleRule('color', theme.fg);
    });

    it('should use the provided colour when overriden', () => {
        const component = render(<Text colour="#000" />);
        expect(component).toHaveStyleRule('color', '#000');
    });

    it('should use a default font size when not overriden', () => {
        const component = render(<Text />);
        expect(component).toHaveStyleRule('font-size', typeset.size.base);
    });

    it('should use the provided font size when overriden', () => {
        const component = render(<Text size={typeset.size.lg} />);
        expect(component).toHaveStyleRule('font-size', typeset.size.lg);
    });

    it('should use a default font weight when not overriden', () => {
        const component = render(<Text />);
        expect(component).toHaveStyleRule('font-weight', `${typeset.weight.light}`);
    });

    it('should use the provided font weight when overriden', () => {
        const component = render(<Text weight={typeset.weight.heavy} />);
        expect(component).toHaveStyleRule('font-weight', `${typeset.weight.heavy}`);
    });

    it('should use a default line height when not overriden', () => {
        const component = render(<Text />);
        expect(component).toHaveStyleRule('line-height', typeset.lineHeight.base);
    });

    it('should use the provided line height when overriden', () => {
        const component = render(<Text lineHeight={typeset.lineHeight.lg} />);
        expect(component).toHaveStyleRule('line-height', typeset.lineHeight.lg);
    });
});