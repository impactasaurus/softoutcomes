import styled from 'styled-components';
import { typeset } from '../theme';

export default styled.p`
    color: ${props => props.colour || props.theme.fg};
    font-family: ${typeset.fontFamily};
    font-size: ${props => props.size || typeset.size.base};
    font-weight: ${props => props.weight || typeset.weight.light};
    line-height: ${props => props.lineHeight || typeset.lineHeight.base};
`;