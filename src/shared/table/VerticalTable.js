import React from 'react';
import styled from 'styled-components';
import { colours } from '../theme';

const getHeaders = children => children[0].props.children;
const getBody = children => children[1].props.children;

export const BodyRow = styled.tr`
    &:nth-child(2n + 1) {
        background-color: ${props => colours.withAlpha(.075)(props.theme.highlight)}
    }
`;

const Table = styled.table`
    width: 100%;
`;

export default ({children, data}) => (
    <Table>
        <tbody>
            {getHeaders(children).map((header, idx) => <BodyRow key={idx}>
                {header}{data && data.map((d, ddx) => 
                    React.cloneElement(getBody(children)[idx], { data: d, key: d.id === undefined ? ddx : d.id })
                )}
            </BodyRow>)}
        </tbody>
    </Table>
);