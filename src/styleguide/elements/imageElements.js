import React, { Fragment } from 'react';
import Title from '../title';
import { Element } from '../layout';
import { Logo } from '../../shared';

export default ({id}) => (
    <Fragment>
        <Title id={id}>Image elements</Title>
        <Element center>
            <Logo src="https://via.placeholder.com/80.png?text=Logo" alt="Example logo" />
        </Element>
    </Fragment>
);
