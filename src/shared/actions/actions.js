import React, { Fragment } from 'react';
import styled from 'styled-components';
import { spacings } from '../theme';

const List = styled.ul`
    padding-top: ${spacings.xl};
`;

export const Line = styled.div`
    flex-grow: 0.5;
    width: 1px;
    border-left: 1px solid ${props => props.theme.fg};
    box-sizing: border-box;
`;

export default ({children}) => (
    <Fragment>
        <List>
            {React.Children.map(children, a => <li>{a}</li>)}
        </List>
        <Line />
    </Fragment> 
);