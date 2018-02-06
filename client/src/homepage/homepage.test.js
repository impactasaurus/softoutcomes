import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { primaryTheme } from '../shared/theme';
import Homepage from './Homepage';
import Header from './Header';
import Content from './Content';

describe('<Homepage />', () => {
    const render = component => renderer.create(
        <ThemeProvider theme={primaryTheme}>
            {component}
        </ThemeProvider>
    );

    it('should render a header', () => {
        const component = render(<Homepage />).root;
        const header = component.findByType(Header);
        expect(header).toBeDefined();
    });

    it('should render the content', () => {
        const component = render(<Homepage />).root;
        const content = component.findByType(Content);
        expect(content).toBeDefined();
    });
});