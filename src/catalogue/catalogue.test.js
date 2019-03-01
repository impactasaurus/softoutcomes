import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from 'react-apollo/test-utils';
import Catalogue from './Catalogue';
import Content from './Content';
import { Hero } from '../shared';

describe('<Catalogue />', () => {

    const render = (component, mockedResponses) => {
        return renderer.create(
            <MockedProvider mocks={mockedResponses} addTypename={false}>
                {component}
            </MockedProvider>
        ).root;
    }

    it('should render a hero', () => {
        const component = render(<Catalogue />);
        const hero = component.findByType(Hero);
        expect(hero).toBeDefined();
    });

    it('should render the content', () => {
        const component = render(<Catalogue />);
        const content = component.findByType(Content);
        expect(content).toBeDefined();
    });
});
