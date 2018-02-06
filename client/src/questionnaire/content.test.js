import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import createStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { StaticRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { primaryTheme } from '../shared/theme';
import { Hero, Table, VerticalTable } from '../shared';
import ConnectedContent, { Content } from './Content';

describe('questionnaire <Content />', () => {
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
    };

    const data = {
        id: '1',
        name: 'Questionniare name',
        description: 'Questionnaire description',
        pdfLink: 'questionnaire.link',
        sectors: ['some', 'sectors'],
        demographic: ['some', 'demographic'],
        scoring: {
            aggregation: 'sum',
            bands: [
                { minimum: 1, maximum: 5, label: 'Low risk' },
                { minimum: 6, maximum: 10, label: 'Medium risk' },
                { minimum: 11, maximum: 20, label: 'High risk' },
            ],
        },
        questions: [
            {
                id: '1',
                text: 'Question text',
                left: {
                    label: 'Strongly disagree',
                    score: 1,
                },
                right: {
                    label: 'Strongly agree',
                    score: 5,
                },
                categories: ['some', 'categories'],
            },
        ],
    };

    it('should load the questionnaire from the api', () => {
        const loadQuestionnaireSpy = jest.fn();
        render(<Content loadQuestionnaire={loadQuestionnaireSpy} />);
        expect(loadQuestionnaireSpy).toHaveBeenCalled();
    });

    it('should pass the data to the tables', () => {
        const component = render(<Content loadQuestionnaire={jest.fn()} data={data} />).root;
        const summaryTable = component.findByType(VerticalTable);
        expect(summaryTable.props.data).toEqual([data]);
        const mainTable = component.findByType(Table);
        expect(mainTable.props.data).toEqual(data.questions);
    });

    it('should match the snapshot', () => {
        const component = render(<Content loadQuestionnaire={jest.fn()} data={data} />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});