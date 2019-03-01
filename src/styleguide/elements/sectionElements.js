import React, { Fragment } from 'react';
import Title from '../title';
import { Element } from '../layout';
import { Section, Header, Text } from '../../shared';
import { lorumIpsum } from './textElements';

export default ({id, fullWidth}) => (
    <Fragment>
        <Title id={id}>Section elements</Title>
        <Element fullWidth={fullWidth}>
            <Section>
                <Header major>Lorum ipsum</Header>
                <Text>{lorumIpsum}</Text>
                <Text>{lorumIpsum}</Text>
                <Text>{lorumIpsum}</Text>
            </Section>
        </Element>
    </Fragment>
);