import { css } from 'styled-components';
const white = 255;
const black = 0;

const toRGB = color => `rgb(${color}, ${color}, ${color})`;
const lerp = (min, max, percent) => min + ((max - min) * percent);

const colours = {
    white: toRGB(white),
    gray20: toRGB(lerp(black, white, .2)),
    gray40: toRGB(lerp(black, white, .4)),
    gray60: toRGB(lerp(black, white, .6)),
    gray80: toRGB(lerp(black, white, .8)),
    green50: 'rgb(157, 198, 107)',
    blue50: 'rgb(67, 97, 194)',
    blue30: 'rgb(79, 164, 154)',
    withAlpha: alpha => value => value.replace(')', `, ${alpha})`).replace('rgb', 'rgba'),
};

export default {
    ...colours,
    primaryGradient: `linear-gradient(45deg, ${colours.green50} 5%, ${colours.blue30} 30%, ${colours.blue50})`,
    defaultStyle: css`
        color: ${props => props.theme.fg};
    `,
};