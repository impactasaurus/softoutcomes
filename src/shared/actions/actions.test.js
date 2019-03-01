import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import Actions, { Line } from './actions';

describe('<Actions />', () => {
    const theme = { fg: '#c010rr' };    
    
    const render = (component) => renderer.create(
        <ThemeProvider theme={theme}>
            {component}
        </ThemeProvider>
    )

    describe('<Line />', () => {
        it('should respect the theme foreground colour', () => {
            const component = render(<Line />);
            expect(component.toJSON()).toHaveStyleRule('border-left', /#c010rr/);
        });
    });

    it('should render a line', () => {
        const component = render(<Actions />);
        expect(component.root.findByType(Line)).toBeDefined();
    });

    it('should render a list of actions', () => {
        const component = render(<Actions>
            <p>Something</p>
        </Actions>);
        expect(component.root.findAllByType('p')).toHaveLength(1);    
    });
});