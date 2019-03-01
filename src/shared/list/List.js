import styled from 'styled-components';
import { typeset, colours } from '../theme';

export const ListItem = styled.li`
    ${typeset.defaultStyle}
    ${colours.defaultStyle}
    padding: 0.5em 0;
   
    &:first-of-type {
        padding-top: 0;
    }

    &:last-of-type {
        padding-bottom: 0;
    }
`;

export default styled.ul`
    list-style: none;

    & ${ListItem} {
        ${props => !props.noDivide && `border-top: 1px solid ${props.theme.fg};`}

        &:first-of-type {
            ${props => !props.noDivide && `border-top: 0;`}
            padding-top: 0;
        }        
    }
`;