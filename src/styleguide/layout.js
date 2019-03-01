import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin: 0 auto;
`;

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

export const Element = styled.div`
    box-sizing: border-box;
    flex: 1 1 ${props => props.fullWidth ? '100' : '40'}%;
    margin: 1em;
    padding: 1em;
    ${props => !props.borderless && `
        border: 1px dotted ${props.theme.fg};
        border-radius: 3px;
    `}
    background-color: ${props => props.theme.bg};
    ${props => props.center && 'text-align: center;'}
`;