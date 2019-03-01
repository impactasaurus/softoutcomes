import React, { Fragment } from 'react';
import Title from '../title';
import { Element } from '../layout';
import { Swatch } from '../swatch';
import { Row, Column } from '../../shared';
import { colours } from '../../shared/theme';

export default ({id, fullWidth}) => (
    <Fragment>
        <Title id={id}>Grid elements</Title>
        <Element fullWidth={fullWidth}>
            <Row>
                <Column xs={9} sm={6} md={4} lg={5}><Swatch colour={colours.gray20} fontColour={colours.gray60}>Column 1</Swatch></Column>
                <Column xs={3} sm={6} md={4} lg={7}><Swatch colour={colours.gray40} fontColour={colours.gray60}>Column 2</Swatch></Column>
                <Column xs={3} sm={6} md={4} lg={6}><Swatch colour={colours.gray60}>Column 3</Swatch></Column>
                <Column xs={9} sm={6} md={12} lg={3}><Swatch colour={colours.gray80}>Column 4</Swatch></Column>
            </Row>
            <Row>
                <Column xs={9} sm={6} md={4} lg={5}><Swatch colour={colours.gray20} fontColour={colours.gray60}>Column 5</Swatch></Column>
                <Column xs={3} sm={6} md={4} lg={7}><Swatch colour={colours.gray40} fontColour={colours.gray60}>Column 6</Swatch></Column>
                <Column xs={3} sm={6} md={4} lg={6}><Swatch colour={colours.gray60}>Column 7</Swatch></Column>
                <Column xs={9} sm={6} md={12} lg={3}><Swatch colour={colours.gray80}>Column 8</Swatch></Column>
            </Row>
        </Element>
    </Fragment>
);