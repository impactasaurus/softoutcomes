import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import createStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Catalogue from './Catalogue';
import Content from './Content';
import { Hero } from '../shared';

describe('<Catalogue />', () => {

    const render = Component => {
        const store = createStore([ thunk ])({});
        return renderer.create(
            <Provider store={store}>
                <Component />
            </Provider>
        ).root;
    }

    it('should render a hero', () => {
        const component = render(Catalogue);
        const hero = component.findByType(Hero);
        expect(hero).toBeDefined();
    });

    it('should render the content', () => {
        const component = render(Catalogue);
        const content = component.findByType(Content);
        expect(content).toBeDefined();
    });
});