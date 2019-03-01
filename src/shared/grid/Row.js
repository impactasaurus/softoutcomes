import styled from 'styled-components';
import { spacings } from '../theme';

export default styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    padding-bottom: ${props => props.pad ? spacings.xxl : spacings.base};

    & > * {
        flex: 0 0 auto;
    }

    &::after {
        content: '';
        display: table;
        clear: both;
    }
`;