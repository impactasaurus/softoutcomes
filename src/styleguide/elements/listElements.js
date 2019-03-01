import React, { Fragment } from 'react';
import Title from '../title';
import { Element } from '../layout';
import { List, ListItem } from '../../shared';

export default ({id}) => (
    <Fragment>
        <Title id={id}>List elements</Title>
        <Element>
            <List>
                <ListItem>Default Item 1</ListItem>
                <ListItem>Default Item 2</ListItem>
                <ListItem>Default Item 3</ListItem>
            </List>
        </Element>
        <Element>
            <List noDivide>
                <ListItem>NoDivide Item 1</ListItem>
                <ListItem>NoDivide Item 2</ListItem>
                <ListItem>NoDivide Item 3</ListItem>
            </List>
        </Element>
    </Fragment>
);
