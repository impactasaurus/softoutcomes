import styled from 'styled-components';

const getWidthString = span => {
    if (!span) {
        return;
    }

    let width = span / 12 * 100;
    return `width: ${width}%;`;
}

export default styled.div`
    ${({xs}) => (xs ? getWidthString(xs) : 'width: 100%;')}

    ${props => props.centered && `
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    `}

    @media only screen and (min-width: 768px) {
        ${({sm}) => sm && getWidthString(sm)}
    }

    @media only screen and (min-width: 992px) {
        ${({md}) => md && getWidthString(md)}
    }

    @media only screen and (min-width: 1200px) {
        ${({lg}) => lg && getWidthString(lg)}
    }
`;