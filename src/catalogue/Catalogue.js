import React, { Fragment } from 'react';
import { Row, Column, Hero } from '../shared';
import Content from './Content';

export default () => (
    <Fragment>
        <Row>
            <Column>
                <Hero />
            </Column>
        </Row>
        <Row>
            <Column>
                <Content />
            </Column>
        </Row>
    </Fragment>
);