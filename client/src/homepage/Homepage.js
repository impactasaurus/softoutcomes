import React, { Fragment } from 'react';
import Header from './Header';
import Content from './Content';
import { Row, Column } from '../shared';

export default () => (
    <Fragment>
        <Row>
            <Column>
                <Header />
            </Column>
        </Row>
        <Row>
            <Column>
                <Content />
            </Column>
        </Row>
    </Fragment>
)