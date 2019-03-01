import styled from 'styled-components';
import { spacings, typeset } from '../theme';

export default styled.th`
    color: ${props => props.theme.fg};
    text-align: left;
    padding: 0 ${spacings.sm} ${spacings.sm} ${spacings.sm};
    font-family: ${typeset.fontFamily};
`;