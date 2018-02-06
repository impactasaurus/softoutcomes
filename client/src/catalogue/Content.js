import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Section, Header, Link, Text, Logo, Table, Row, Column } from '../shared';
import { TableHeader, TableBody } from '../shared/table';
import { loadCatalogue } from './actions';

export class Content extends Component {
    componentDidMount() {
        this.props.loadCatalogue();
    }

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
                    <Table data={this.props.data}>
                        <thead>
                            <TableHeader />
                            <TableHeader>Name</TableHeader>
                            <TableHeader>Description</TableHeader>
                            <TableHeader>Number of questions</TableHeader>
                            <TableHeader>Demographic</TableHeader>
                            <TableHeader>Sectors</TableHeader>
                        </thead>
                        <tbody>
                            <TableBody valign="top">{d => <Logo src={`/assets/logos/${d.logo}`} alt={`Logo for ${d.name}`} />}</TableBody>
                            <TableBody>{d => <Link to={`/questionnaire/${d.key}`}>{d.name}</Link>}</TableBody>
                            <TableBody>{d => <Text>{d.description}</Text>}</TableBody>
                            <TableBody>{d => <Text>{d.length}</Text>}</TableBody>
                            <TableBody>{d => <Text>{d.demographic ? d.demographic.join(', ') : ''}</Text>}</TableBody>
                            <TableBody>{d => <Text>{d.sectors ? d.sectors.join(', ') : ''}</Text>}</TableBody>
                        </tbody>
                    </Table>
                </Column>
            </Row>
        </Section>);
    }
}

const mapStateToProps = state => ({
    data: state.catalogue,
});

const mapDispatchToProps = {
    loadCatalogue,
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);