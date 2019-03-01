import React, { Fragment } from 'react';
import { Hero, Row, Column } from '../shared';
import Content from './Content';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const loadQuestionnaire = gql`
query Questionnaire($id: String!) {
    questionnaire(id: $id) {
        id
        name
        description
        questions {
            __typename
            id
            question
            description
            short
            ... on LikertQuestion {
                scale {
                    value
                    label
                }
            }
        }
        scorings {
            id
            name
            description
            aggregation
            questions
        }
    }
}`

export default ({ match: { params: { questionnaireId: id } } }) => {
    return (
        <Fragment>
            <Row>
                <Column>
                    <Hero />
                </Column>
            </Row>
            <Row>
                <Query query={loadQuestionnaire} variables={{ id }}>
                    {({loading, error, data}) => {
                        if (loading || error) {
                            return null;
                        }

                        return <Column>
                            <Content data={data.questionnaire} />
                        </Column>
                    }}
                </Query>
            </Row>
        </Fragment>
    );
}
