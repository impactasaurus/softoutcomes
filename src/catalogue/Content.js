import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Section, Header, Link, Text, Table, Row, Column } from '../shared';
import { TableHeader, TableBody } from '../shared/table';

// TODO: We are loading the whole list of questions here just to know the
// number of questions
export const questionnaireListQuery = gql`
{
    questionnaires(page: 0) {
        questionnaires {
            id
            name
            version
            description
            license
            attribution
            questions {
                id
            }
        }
    }
}`;



export default class Content extends Component {
    render() {
    return (
        <Section>
            <Row>
                <Column>
                    <Header underline>Catalogue</Header>
                </Column>
            </Row>
            <Row>
                <Column>
                    <Query query={questionnaireListQuery}>
                        {({loading, error, data}) =>  {
                            if (loading || error) {
                                return null;
                            }

                            return <Table data={data.questionnaires.questionnaires}>
                                <thead>
                                    <TableHeader>Name</TableHeader>
                                    <TableHeader>Version</TableHeader>
                                    <TableHeader>Description</TableHeader>
                                    <TableHeader>License</TableHeader>
                                    <TableHeader>Attribution</TableHeader>
                                    <TableHeader>Number of questions</TableHeader>
                                </thead>
                                <tbody>
                                    <TableBody>{d => <Link to={`/questionnaire/${d.id}`}>{d.name}</Link>}</TableBody>
                                    <TableBody>{d => <Text>{d.version}</Text>}</TableBody>
                                    <TableBody>{d => <Text>{d.description}</Text>}</TableBody>
                                    <TableBody>{d => <Text>{d.license}</Text>}</TableBody>
                                    <TableBody>{d => <Text>{d.attribution}</Text>}</TableBody>
                                    <TableBody>{d => <Text>{d.questions.length}</Text>}</TableBody>
                                </tbody>
                            </Table>
                        }}
                    </Query>
                </Column>
            </Row>
        </Section>);
    }
}
