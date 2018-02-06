import React from 'react';
import { Element } from './layout';
import { Header } from '../shared';

export default ({id, children}) => (
    <Element fullWidth borderless>
        <a id={id} style={{fontSize: 0}}>{id}</a>
        <Header underline>{children}</Header>
    </Element>
);