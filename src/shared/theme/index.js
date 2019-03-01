import rawTypeset from './typeset';
import rawColours from './colours';
import rawSpacings from './spacings';

export const typeset = rawTypeset
export const colours = rawColours;
export const spacings = rawSpacings;

export const primaryTheme = {
    fg: colours.gray60,
    bg: 'transparent',
    highlight: colours.green50,
    lowlight: colours.white,
    gradient: colours.primaryGradient,
};

export const secondaryTheme = {
    fg: colours.white,
    bg: colours.blue30,
    highlight: colours.white,
    lowlight: 'transparent',
    gradient: colours.primaryGradient,
};