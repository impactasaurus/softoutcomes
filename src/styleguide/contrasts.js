import React from 'react';
import colorable from 'colorable';
import { List, ListItem } from '../shared';
import { Swatch } from './swatch';
import { colours } from '../shared/theme';
import formatColourName from './formatColourName';

export default ({colour}) => {
    const { withAlpha, primaryGradient, defaultStyle, ...testableColours } = colours;
    const { combinations } = colorable(testableColours, { compact: true, threshold: 4.5 }).find(c => c.name === colour); // AA rating
    return (<List noDivide>
        {combinations.map(({hex, name}) => (
            <ListItem key={name}>
                <Swatch fontColour={colours[colour]} colour={hex}>{formatColourName(colour)} on {formatColourName(name)}</Swatch>
            </ListItem>
        ))}
        {!combinations.length && <ListItem>
                <Swatch fontColour={colours.gray20} colour={colours.white}>No background colour can be used with {formatColourName(colour)} as the text colour</Swatch>
            </ListItem>}
    </List>);
}