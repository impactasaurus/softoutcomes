import styled from 'styled-components';
import { typeset, spacings } from '../theme';

export default styled.p`
    font-family: ${typeset.fontFamily};
    color: ${props => props.theme.fg};
    line-height: ${props => props.lineHeight || typeset.lineHeight.base};
    font-size: ${props => props.size || typeset.size.base};
    font-weight: ${props => props.weight || typeset.weight.light};
    margin: 0;
    margin-top: ${spacings.md};
`;