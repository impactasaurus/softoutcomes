import styled, { css } from 'styled-components';
import { typeset } from '../shared/theme';

const common = css`
    color: ${props => props.theme.fg};
    font-family: ${typeset.fontFamily};
    font-size: ${typeset.size.base};
    line-height: ${typeset.lineHeight.base};
`;

const swatchCommon = css`
    ${common}
    text-align: center;
    padding: 1em .5em;  
`;

export const Swatch = styled.div`
    background-color: ${props => props.colour};
    ${props => props.pad && 'margin-bottom: 1em;'}
    ${swatchCommon}
`;

export const BackgroundSwatch = styled.div`
    background-image: ${props => props.colour};
    text-align: center;
    ${swatchCommon}
`;
