import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import createStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { StaticRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { primaryTheme } from '../shared/theme';
import { Hero } from '../shared';
import Questionnaire from './Questionnaire';
import Content from './Content';

describe('<Questionnaire />', () => {
    const render = (component, initialState) => {
        const store = createStore([ thunk ])(initialState || {});
        return renderer.create(
            <Provider store={store}>
                <StaticRouter context={{}}>
                    <ThemeProvider theme={primaryTheme}>
                        {component}
                    </ThemeProvider>
                </StaticRouter>
            </Provider>
        );
    }

    const query = { 
        params: {
            questionnaireId: 'questionnaireId',
        },
    };

    it('should render a hero', () => {
        const component = render(<Questionnaire match={query} />).root;
        const hero = component.findByType(Hero);
        expect(hero).toBeDefined();
    });

    it('should render the content', () => {
        const component = render(<Questionnaire match={query} />).root;
        const content = component.findByType(Content);
        expect(content).toBeDefined();
        expect(content.props.questionnaire).toEqual('questionnaireId');
    });
});