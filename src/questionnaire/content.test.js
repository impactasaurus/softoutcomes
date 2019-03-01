import React from 'react';
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { primaryTheme } from '../shared/theme';
import { Table } from '../shared';
import Content from './Content';

describe('questionnaire <Content />', () => {
    const render = (component, initialState) => {
        return renderer.create(
            <StaticRouter context={{}}>
                <ThemeProvider theme={primaryTheme}>
                    {component}
                </ThemeProvider>
            </StaticRouter>
        );
    };

    const data = {
        id: '1',
        name: 'Questionniare name',
        description: 'Questionnaire description',
        scorings: [
            {
                id: 'Scoring 1',
                name: 'Clinical score',
                description: 'Total clinical score',
                aggregation: 'mean',
                questions: ['q1', 'q3'],
            }
        ],
        questions: [
            {
                __typename: 'LikertQuestion',
                id: 'q1',
                text: 'Question 1 text',
                description: 'Question 1 desc',
                scale: [
                    { label: 'Not at all', value: 0 },
                    { label: 'Completely', value: 10 },
                ]
            },
            {
                __typename: 'LikertQuestion',
                id: 'q2',
                text: 'Question 2 text',
                description: 'Question 2 desc',
                scale: [
                    { label: 'Not at all', value: 0 },
                    { label: 'Completely', value: 10 },
                ]
            },
            {
                __typename: 'LikertQuestion',
                id: 'q3',
                text: 'Question 3 text',
                description: 'Question 3 desc',
                scale: [
                    { label: 'Not at all', value: 0 },
                    { label: 'Completely', value: 10 },
                ]
            },
        ],
    };


    it('should pass the data to the tables', () => {
        const component = render(<Content data={data} />).root;
        const tables = component.findAllByType(Table);
        expect(tables).toHaveLength(2);
        expect(tables[0].props.data).toEqual(data.scorings);
        expect(tables[1].props.data).toEqual(data.questions);
    });

    it('should match the snapshot', () => {
        const component = render(<Content data={data} />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
