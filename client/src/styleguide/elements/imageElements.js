import React, { Fragment } from 'react';
import Title from '../title';
import { Element } from '../layout';
import { Logo } from '../../shared';

export default ({id}) => (
    <Fragment>
        <Title id={id}>Image elements</Title>
        <Element center>
            <Logo src="/assets/logos/mental_health.jpeg" alt="Mental health logo" />
        </Element>
    </Fragment>
);