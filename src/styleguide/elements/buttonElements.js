import React, { Fragment } from 'react';
import Title from '../title';
import { Element } from '../layout';
import { Button } from '../../shared';

export default ({id}) => (
    <Fragment>
        <Title id={id}>Button elements</Title>
        <Element center>
            <Button href={`#${id}`}>Default button</Button>
        </Element>
    </Fragment>
)