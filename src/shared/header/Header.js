import styled from 'styled-components';
import { typeset, spacings } from '../theme';

export default styled.h1`
    font-family: ${typeset.fontFamily};
    color: ${props => props.theme.fg};
    line-height: ${props => props.lineHeight || typeset.lineHeight.xl};
    font-size: ${props => props.size || typeset.size.xl};
    font-weight: ${props => props.weight || typeset.weight.light};
    margin: 0;

    ${props => props.underline && `
        &::after {
            content: '';
            height: 1px;
            display: block;
            width: 8rem;
            margin-top: ${spacings.sm};
            border-bottom: 1px solid ${props.theme.fg};
        }
    `}
`;