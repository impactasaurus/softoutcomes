import React from 'react';
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router-dom';
import { MockedProvider } from 'react-apollo/test-utils';
import { ThemeProvider } from 'styled-components';
import wait from 'waait';
import { primaryTheme } from '../shared/theme';
import { Hero } from '../shared';
import Questionnaire, { loadQuestionnaireQuery } from './Questionnaire';
import Content from './Content';

describe('<Questionnaire />', () => {
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

    it('should not render the content whilst loading', () => {
        const responses = [];
        const component = render(<Questionnaire match={query} />, responses).root;
        const content = component.findAllByType(Content);
        expect(content).toHaveLength(0);
    });

    it('should not render the content if there is an error', async () => {
        const responses = [
            {
                request: {
                    query: loadQuestionnaireQuery,
                    variables: {
                        id: 'questionnaireId',
                    },
                },
                error: new Error('Forced error'),
            },
        ];

        const component = render(<Questionnaire match={query} />, responses).root;
        await wait(0);
        const content = component.findAllByType(Content);
        expect(content).toHaveLength(0);
    });

    it('should render the content when the data is ready', async () => {
        const mockQuestionnaire = {
            id: query.params.questionnaireId,
            name: 'Questionnaire name',
            description: 'Questionnaire desc',
            questions: [],
            scorings: [],
        };

        const responses = [
            {
                request: {
                    query: loadQuestionnaireQuery,
                    variables: {
                        id: query.params.questionnaireId,
                    },
                },
                result: {
                    data: {
                        questionnaire: mockQuestionnaire,
                    },
                },
            },
        ];

        const component = render(<Questionnaire match={query} />, responses).root;
        await wait(0);
        const content = component.findByType(Content);
        expect(content.props.data).toEqual(mockQuestionnaire)
    })
});
