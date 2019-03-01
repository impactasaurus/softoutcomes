import React from 'react';
import styled from 'styled-components';
import { colours } from '../theme';

const getHeaders = children => children[0].props.children;
const getBody = children => children[1].props.children;

export const THead = styled.thead`
    border-bottom: 1px solid ${props => props.theme.fg};
`;

const TBody = styled.tbody`
`;

export const BodyRow = styled.tr`
    &:nth-child(2n) {
        background-color: ${props => colours.withAlpha(.075)(props.theme.highlight)}
    }
`;

const Table = styled.table`
    width: 100%;
`;

export default ({children, data}) => (
    <Table>
        <THead>
            <tr>
              {getHeaders(children)}
            </tr>
        </THead>
        <TBody>
            {data && data.map((d, idx) => 
                <BodyRow key={d.id === undefined ? idx : d.id}>
                    {React.Children.map(getBody(children), child => React.cloneElement(child, { data: d }))}
                </BodyRow>
            )}
        </TBody>
    </Table>
);