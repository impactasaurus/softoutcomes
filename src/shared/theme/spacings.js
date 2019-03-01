const toREM = value => `${value}rem`;

export default {
    xxs: toREM(.125),
    xs: toREM(.375),
    sm: toREM(.75),
    md: toREM(1.125),
    base: toREM(1.5),
    lg: toREM(1.875),
    xl: toREM(2.25),
    xxl: toREM(2.625),
};