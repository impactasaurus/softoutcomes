import React from 'react';
import { Element } from './layout';
import { Header } from '../shared';

export default ({id, children}) => (
    <Element fullWidth borderless>
        <div id={id} />
        <Header underline>{children}</Header>
    </Element>
);
