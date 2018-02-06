import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Section, Header, Text, Table, VerticalTable, BlankLink, List, ListItem, Row, Column } from '../shared';
import { TableHeader, TableBody } from '../shared/table';
import { loadQuestionnaire } from './actions';

export class Content extends Component {
    componentDidMount() {
        this.props.loadQuestionnaire();
    }

    render = () => {
        if(!this.props.data) {
            return null;
        }

        const {
            name,
            description,
            questions,
        } = this.props.data;
        
        return (<Section>
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
            <Row pad>
                <Column centered>
                    <VerticalTable data={[this.props.data]}>
                        <thead>
                            <TableHeader>PDF Link</TableHeader>
                            <TableHeader>Sectors</TableHeader>
                            <TableHeader>Demographic</TableHeader>
                            <TableHeader>Scoring</TableHeader>
                            <TableHeader>Scoring bands</TableHeader>
                        </thead>
                        <tbody>
                            <TableBody>{d => <BlankLink to={d.pdfLink}>{d.pdfLink}</BlankLink>}</TableBody>
                            <TableBody>{d => <Text>{d.sectors.join(', ')}</Text>}</TableBody>
                            <TableBody>{d => <Text>{d.demographic.join(', ')}</Text>}</TableBody>
                            <TableBody>{d => <Text>{d.scoring.aggregation}</Text>}</TableBody>
                            <TableBody>{d => <List>{d.scoring.bands.map((b, idx) => <ListItem key={idx}>{b.minimum} - {b.maximum}: {b.label}</ListItem>)}</List>}</TableBody>
                        </tbody>
                    </VerticalTable>
                </Column>
            </Row>
            <Row>
                <Column>
                    <Table data={questions}>
                        <thead>
                            <TableHeader>Question</TableHeader>
                            <TableHeader>Left score</TableHeader>
                            <TableHeader>Right score</TableHeader>
                            <TableHeader>Categories</TableHeader>
                        </thead>
                        <tbody>
                            <TableBody>{q => <Text>{q.text}</Text>}</TableBody>
                            <TableBody>{q => <Text>{q.left.label} ({q.left.score})</Text>}</TableBody>
                            <TableBody>{q => <Text>{q.right.label} ({q.right.score})</Text>}</TableBody>
                            <TableBody>{q => <Text>{q.categories.join(', ')}</Text>}</TableBody>
                        </tbody>
                    </Table>
                </Column>
            </Row>
        </Section>);
    }
}

const mapStateToProps = state => ({
    data: state.currentQuestionnaire,
});

const mapDispatchToProps = (dispatch, { questionnaire }) => ({
    loadQuestionnaire: () => dispatch(loadQuestionnaire(questionnaire)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);