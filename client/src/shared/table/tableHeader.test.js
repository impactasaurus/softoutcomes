import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import TableHeader from './TableHeader';

describe('<TableHeader />', () => {
    const theme = {
        fg: '#fff000',
    };

    const render = component => renderer.create(
        <ThemeProvider theme={theme}>
            {component}
        </ThemeProvider>
    ).toJSON();
    
    it('should respect the provided theme when not overriden', () => {
        const component = render(<TableHeader />);
        expect(component).toHaveStyleRule('color', theme.fg);
    });
});