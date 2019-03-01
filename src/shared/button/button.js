import styled from 'styled-components';
import { colours, spacings, typeset } from '../theme';

export default styled.a`
    background-color: ${props => props.theme.bg};
    transition: background-color 0.2s ease-in-out;
    padding: ${spacings.sm} ${spacings.base};
    border: 1px solid ${props => props.theme.fg};
    border-radius: 4px;
    color: ${props => props.theme.fg};
    text-decoration: none;
    font-family: ${typeset.fontFamily};
    display: inline-block;
    text-transform: uppercase;
    letter-spacing: ${spacings.xxs};

    &:hover {
        background-color: ${props => colours.withAlpha(.25)(props.theme.lowlight)};
    }
`;