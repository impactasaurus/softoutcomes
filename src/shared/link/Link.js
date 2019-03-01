import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { typeset } from '../theme';

const StyledLink = styled(Link)`
    color: ${props => props.theme.fg};
    border-bottom: 1px dotted ${props => props.theme.fg};
    text-decoration: none;
    transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;
    font-family: ${typeset.fontFamily};
    line-height: ${props => props.lineHeight || typeset.lineHeight.base};
    font-size: ${props => props.size || typeset.size.base};

    &:hover {
        border-bottom-color: transparent;
        color: ${props => props.theme.highlight};
    }
`;

export const BlankLink = StyledLink.extend.attrs({
    target: '_blank'
})``;

export default StyledLink;