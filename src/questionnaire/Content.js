import React, { Component } from 'react';
import { Section, Header, Text, Table, Row, Column, List, ListItem } from '../shared';
import { TableHeader, TableBody } from '../shared/table';

const uppercaseFirstLetter = str => {
    if (!str || !str.replace) {
        return str;
    }

    return str.replace(/^(.)(.*)$/, (_, firstChar, rest) => `${firstChar.toUpperCase()}${rest}`);
}

export default class Content extends Component {
    renderScoring = question => {
        if (question.__typename !== 'LikertQuestion') {
            return null;
        }

        return <List>
            {question.scale.filter(s => s.label).map(s => <ListItem key={s.value}>
                <Text>{s.label} ({s.value})</Text>
            </ListItem>)}
        </List>
    }

    renderScoringsAggregations = () => {
        const { scorings, questions } = this.props.data;

        if (!scorings || !scorings.length) {
            return null;
        }

        return <Row pad>
            <Column centered>
                <Table data={scorings}>
                    <thead>
                        <TableHeader>Scoring</TableHeader>
                        <TableHeader>Name</TableHeader>
                        <TableHeader>Aggregation</TableHeader>
                        <TableHeader>Questions</TableHeader>
                    </thead>
                    <tbody>
                        <TableBody>{() => null}</TableBody>
                        <TableBody>{d => <Text>{d.name}</Text>}</TableBody>
                        <TableBody>{d => <Text>{uppercaseFirstLetter(d.aggregation)}</Text>}</TableBody>
                        <TableBody>{d => <Text>{d.questions
                                    .map(q => questions.findIndex(({ id }) => id === q) + 1)
                                    .join(', ')}</Text>}</TableBody>
                    </tbody>
                </Table>
            </Column>
        </Row>
    }

    render() {
        if(!this.props.data) {
            return null;
        }

        const {
            name,
            description,
            questions,
        } = this.props.data;

        return <Section>
            <Row>
                <Column>
                    <Header underline>{name}</Header>
                </Column>
            </Row>
            <Row>
                <Column>
                    <Text>{description}</Text>
                </Column>
            </Row>
            {this.renderScoringsAggregations()}
            <Row>
                <Column>
                    {<Table data={questions}>
                        <thead>
                            <TableHeader />
                            <TableHeader>Question</TableHeader>
                            <TableHeader>Scoring</TableHeader>
                        </thead>
                        <tbody>
                            <TableBody>{q => <Text>{questions.findIndex(({ id }) => id === q.id) + 1}</Text>}</TableBody>
                            <TableBody>{q => <Text>{q.question}</Text>}</TableBody>
                            <TableBody>{q => this.renderScoring(q)}</TableBody>
                        </tbody>
                    </Table>}
                </Column>
            </Row>
        </Section>;
    }
}
