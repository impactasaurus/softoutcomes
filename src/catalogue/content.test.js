import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from 'react-apollo/test-utils';
import wait from 'waait';
import { ThemeProvider } from 'styled-components';
import { StaticRouter } from 'react-router-dom';
import Content, { questionnaireListQuery } from './Content';
import { primaryTheme } from '../shared/theme';
import { Table } from '../shared';

const mockQuestionnaires = [
    {
        id: 'questionnaire1',
        name: 'Questionnaire 1 name',
        version: '1.0.0',
        description: 'Questionnaire 1 desc',
        license: 'Questionnaire 1 license',
        attribution: 'Questionnaire 1 attribution',
        questions: [
            { id: 'q1-1' },
            { id: 'q1-2' },
            { id: 'q1-3' },
        ],
    },
    {
        id: 'questionnaire2',
        name: 'Questionnaire 2 name',
        version: '1.0.0',
        description: 'Questionnaire 2 desc',
        license: 'Questionnaire 2 license',
        attribution: 'Questionnaire 2 attribution',
        questions: [
            { id: 'q2-1' },
            { id: 'q2-2' },
        ],
    }
];

describe('catalogue <Content />', () => {
    const render = (component, mockedResponses) => {
        return renderer.create(
            <MockedProvider mocks={mockedResponses} addTypename={false}>
                <StaticRouter context={{}}>
                    <ThemeProvider theme={primaryTheme}>
                        {component}
                    </ThemeProvider>
                </StaticRouter>
            </MockedProvider>
        );
    };

    it('should not render the table whilst the data is loading', () => {
        const component = render(<Content />, []).root;
        const tables = component.findAllByType(Table);
        expect(tables).toHaveLength(0);
    });

    it('should not render the table if there is an error loading the data', async () => {
        const responses = [{
            request: {
                query: questionnaireListQuery,
            },
            error: new Error('Forced error'),
        }];
        const component = render(<Content />, responses).root;
        await wait(0);
        const tables = component.findAllByType(Table);
        expect(tables).toHaveLength(0);
    });

    it('should render the list of questionnaires loaded from the api', async () => {
        const responses = [{
            request: {
                query: questionnaireListQuery,
            },
            result: {
                data: {
                    questionnaires: {
                        questionnaires: mockQuestionnaires,
                    },
                },
            },
        }];
        const component = render(<Content />, responses).root;
        await wait(0);
        const table = component.findByType(Table);
        expect(table.props.data).toEqual(mockQuestionnaires);
    });

    it('should render all the columns', async () => {
        const responses = [{
            request: {
                query: questionnaireListQuery,
            },
            result: {
                data: {
                    questionnaires: {
                        questionnaires: mockQuestionnaires,
                    },
                },
            },
        }];
        const component = render(<Content />, responses);
        await wait(0);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
