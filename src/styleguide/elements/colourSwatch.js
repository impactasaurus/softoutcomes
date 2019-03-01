import React, { Fragment } from 'react';
import Title from '../title';
import { Element } from '../layout';
import { Swatch, BackgroundSwatch } from '../swatch';
import Contrasts from '../contrasts';
import formatColourName from '../formatColourName';
import { Text } from '../../shared';
import { colours } from '../../shared/theme';

export default ({id}) => (
    <Fragment>
        <Title id={id}>Colour swatch</Title>
        <Element>
            {Object.keys(colours).filter(c => c.startsWith('gray') || c === 'white').map(key => (
                <Swatch key={key} pad colour={colours[key]}>
                    <Text colour={key.endsWith('40') || key.endsWith('20') ? colours.white : colours.gray20}>
                        {formatColourName(key)}. Safe combinations for the background colour below.
                    </Text>
                    <Contrasts colour={key} />
                </Swatch>
            ))}
        </Element>
        <Element>
            {Object.keys(colours).filter(c => c.startsWith('green') || c.startsWith('blue')).map(key => (
                <Swatch key={key} pad colour={colours[key]}>
                    <Text colour={key === 'blue50' ? colours.white : colours.gray20}>
                        {formatColourName(key)}. Safe combinations for background colour below.
                    </Text>
                    <Contrasts colour={key} />
                </Swatch>
            ))}
            <BackgroundSwatch colour={colours.primaryGradient}>
                <Text colour={colours.white}>Primary Gradient</Text>
            </BackgroundSwatch>
        </Element>
    </Fragment>
);