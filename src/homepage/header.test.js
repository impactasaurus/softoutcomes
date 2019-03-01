import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { primaryTheme } from '../shared/theme';
import { Hero, Action, Button } from '../shared';
import Header from './Header';

describe('homepage <Header />', () => {
    const render = component => renderer.create(
        <ThemeProvider theme={primaryTheme}>
            {component}
        </ThemeProvider>
    );
    
    it('should render a hero', () => {
        const component = render(<Header />).root;
        const hero = component.findByType(Hero);
        expect(hero).toBeDefined();
    });

    it('should include an action on the hero', () => {
        const component = render(<Header />).root;
        const hero = component.findByType(Hero);
        const action = component.findByType(Action);
        expect(action).toBeDefined();
    });

    it('should include a button in the action', () => {
        const component = render(<Header />).root;
        const action = component.findByType(Action);
        const button = action.findByType(Button);
        expect(button.props.href).toEqual('#get_started');
        expect(button.props.children).toEqual('Get started');
    });
});