import React from 'react';
import styled from 'styled-components';
import { spacings } from '../theme';

const Td = styled.td`
    padding: ${spacings.sm};
    ${props => props.valign && `
        & > * {
            vertical-align: ${props.valign};
        }
    `}
`;

export default ({data, children, ...props}) => {
    return (
        <Td {...props}>
            {children(data)}
        </Td>
    )
};