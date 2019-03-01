import React, { Fragment } from 'react';
import Title from '../title';
import { Element } from '../layout';
import { Hero, Action, Button } from '../../shared';

export default ({id, fullWidth}) => (
    <Fragment>
        <Title id={id}>Hero elements</Title>
        <Element fullWidth={fullWidth}>
            <Hero />
        </Element>
        <Element fullWidth={fullWidth}>
            <Hero>
                <Action>
                    <Button href="#">Button action</Button>
                </Action>
            </Hero>
        </Element>
    </Fragment>
);