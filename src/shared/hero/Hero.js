import React, {Component} from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {  secondaryTheme } from '../theme';
import Header, { Subheader } from '../header';
import firstLayerOverlay from './overlay.png';
import secondLayerOverlay from './overlay.svg';

export const Section = styled.section`
    background-color: ${props => props.theme.bg};
    background-image: url(${firstLayerOverlay}), url(${secondLayerOverlay}), ${props => props.theme.gradient};
    background-position: top left, center center, center center;
    background-attachment: fixed, fixed, fixed;
    background-size: auto, cover, cover;
    background-repeat: no-repeat;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    min-height: 24em;
`;

export const Inner = styled.div`
    display: flex;
    flex-flow: column nowrap; 
    justify-content: ${props => props.hasActions ? 'flex-end' : 'center'}};
    align-items: center;
    transform: scale(${props => props.visible ? 1 : 1.1});
    opacity: ${props => props.visible ? 1 : 0};
    transition-delay: 0.25s;
    transition: transform 1.5s ease, opacity 2s ease;
`;

export default class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }

    componentDidMount() {
        // We require a timeout as this method is called
        // before react has actually rendered the VirtualDOM 
        // to the real DOM. As a result, if we don't delay
        // this then the first render of the real DOM will 
        // have state.visible = true, and so we won't get our 
        // CSS transitions.
        window.setTimeout(() => {
            this.setState({
                visible: true,
            });
        }, 0);
    }

    render() {
        return (
            <ThemeProvider theme={secondaryTheme}>
                <Section>
                    <Inner {...this.state} hasActions={!!React.Children.count(this.props.children)}>
                        <Header>Impactasaurus Questionnaire Repository</Header>
                        <Subheader>Find a questionnaire to demonstrate and improve your social impact</Subheader>
                        {this.props.children}
                    </Inner>
                </Section>
            </ThemeProvider>
        );
    }
}