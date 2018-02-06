import React, { Fragment } from 'react';
import Title from '../title';
import { Element } from '../layout';
import { Table, TableHeader, TableBody, Text, VerticalTable } from '../../shared';

const data = [
    { id: 1, name: 'Dan', position: 'Lead', username: 'drimpact' },
    { id: 2, name: 'Daniela', position: 'Dev', username: 'chess17' },
    { id: 3, name: 'Chris', position: 'Dev', username: 'chrissinclair' },
];

const headers = empty => [
    <TableHeader key="id">ID{empty && ' (Empty table)'}</TableHeader>,
    <TableHeader key="name">Name</TableHeader>,
    <TableHeader key="position">Position</TableHeader>,
    <TableHeader key="username">Username</TableHeader>,
];

const body = () => [
    <TableBody key="id">{d => <Text>{d.id}</Text>}</TableBody>,
    <TableBody key="name">{d => <Text>{d.name}</Text>}</TableBody>,
    <TableBody key="position">{d => <Text>{d.position}</Text>}</TableBody>,
    <TableBody key="username">{d => <Text>{d.username}</Text>}</TableBody>,
];

const table = (data, vertical) => {
    if(vertical) {
        return (
            <VerticalTable data={data}>
                <thead>
                    {headers(!data.length)}
                </thead>
                <tbody>
                    {body()}
                </tbody>
            </VerticalTable>
        )
    }

    return (
        <Table data={data}>
            <thead>
                {headers(!data.length)}
            </thead>
            <tbody>
                {body()}
            </tbody>
        </Table>
    );
}

export default ({id, fullWidth}) => (
    <Fragment>
        <Title id={id}>Table elements</Title>
        <Element fullWidth={fullWidth}>
            {table(data)}
        </Element>
        <Element fullWidth={fullWidth}>
            {table([])}
        </Element>
        <Element>
            {table(data, true)}
        </Element>
        <Element>
            {table([], true)}
        </Element>
    </Fragment>
);