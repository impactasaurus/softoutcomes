import { css } from 'styled-components';

const toREM = value => `${value}rem`;
const scale = by => value => value * by;
const lineHeightScale = scale(1.5);

const sizes = {
    xs: .5,
    sm: .75,
    base: 1,
    lg: 1.5,
    xl: 2.25,
    xxl: 2.625,
}

const mapSizes = (mappingFn, initial) => Object.keys(sizes)
    .reduce((acc, size) => ({
        ...acc,
        [size]: mappingFn(sizes[size]),
    }), initial);

const typeset = {
    fontFamily: `"Source Sans Pro", Helvetica, sans-serif`,
    size: mapSizes(toREM, { root: '100%' }),
    lineHeight: mapSizes(s => toREM(lineHeightScale(s)), {}),
    weight: {
        hairline: 100,
        extraLight: 200,
        light: 300,
        base: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        extraBold: 800,
        heavy: 900,
    }
};

export default {
    ...typeset,
    defaultStyle: css`
        font-family: ${typeset.fontFamily};
        font-size: ${typeset.size.base};
        line-height: ${typeset.lineHeight.base};
        font-weight: ${typeset.weight.light};
    `,
};