import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { secondaryTheme } from '../theme';
import Hero, { Section, Inner } from './Hero';

describe('<Hero />', () => {
    const theme = {
        bg: '#bbb000',
        gradient: 'linear-gradient(45deg,#bbb000 0%,#fff000)'
    };

    const render = component => renderer.create(
        <ThemeProvider theme={theme}>
            {component}
        </ThemeProvider>
    );

    const renderToJson = component => render(component).toJSON();

    describe('<Section />', () => {
        it('should respect the theme background colour', () => {
            const component = renderToJson(<Section />);
            expect(component).toHaveStyleRule('background-color', theme.bg);
            expect(component).toHaveStyleRule('background-image', new RegExp(theme.gradient.replace('(', '\\(').replace(')', '\\)')));
        });
    });

    describe('<Inner />', () => {
        it('should be centered if there are no actions', () => {
            const component = renderToJson(<Inner />);
            expect(component).toHaveStyleRule('justify-content', 'center');
        });

        it('should be justfied to the end if there are actions', () => {
            const component = renderToJson(<Inner hasActions />);
            expect(component).toHaveStyleRule('justify-content', 'flex-end');
        });

        it('should have no opacity and slightly larger scale when not visible', () => {
            const component = renderToJson(<Inner />);
            expect(component).toHaveStyleRule('opacity', '0');
            expect(component).toHaveStyleRule('transform', 'scale(1.1)');
        });

        it('should have full opacity and normal scale when visible', () => {
            const component = renderToJson(<Inner visible />);
            expect(component).toHaveStyleRule('opacity', '1');
            expect(component).toHaveStyleRule('transform', 'scale(1)');
        });
    });

    it('should always use the secondary theme', () => {
        const component = renderer.create(<Hero />);
        expect(component.root.findByType(ThemeProvider).props.theme).toEqual(secondaryTheme);
    });

    it('should render an invisible inner section', () => {
        const component = renderer.create(<Hero />);
        expect(component.root.findByType(Inner).props.visible).toBeFalsy();
    });

    it('should mark the inner section as having no actions when no children are given to the hero', () => {
        const component = renderer.create(<Hero />);
        expect(component.root.findByType(Inner).props.hasActions).toBeFalsy();
    });

    it('should mark the inner section as having actions when children are given to the hero', () => {
        const component = renderer.create(<Hero><p>Action!</p></Hero>);
        expect(component.root.findByType(Inner).props.hasActions).toBeTruthy();
    });

    it('should mark the inner section as visible immediately after mounting', () => {
        jest.useFakeTimers();
        const component = renderer.create(<Hero />);
        jest.runTimersToTime(1);
        expect(component.root.findByType(Inner).props.visible).toBeTruthy();
    });

    it('should match the snapshot', () => {
        const component = renderer.create(<Hero><p>Action!</p></Hero>);
        expect(component).toMatchSnapshot();
    });
});