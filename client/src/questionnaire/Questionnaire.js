import React, { Fragment } from 'react';
import { Hero, Row, Column } from '../shared';
import Content from './Content';

export default ({ match: { params: { questionnaireId } } }) => {
    return (
        <Fragment>
            <Row>
                <Column>
                    <Hero />
                </Column>
            </Row>
            <Row>
                <Column>
                    <Content questionnaire={questionnaireId} />
                </Column>
            </Row>
        </Fragment>
    );
}