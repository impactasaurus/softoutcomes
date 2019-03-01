import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Container, Content, Element } from './layout';
import { Button,  Text, List, ListItem } from '../shared';
import { primaryTheme, secondaryTheme } from '../shared/theme';
import { TextElements, ListElements, ButtonElements, ImageElements, HeroElements, 
    SectionElements, TableElements, GridElements, ColourSwatch } from './elements';
import Title from './title';

export default class Styleguide extends Component {
    constructor(props) {
        super(props);

        this.state = {
            themeId: 'primary',
            theme: primaryTheme,
            forceColumns: false,
        };
    }

    setForceColumns = () => {
        this.setState({
            forceColumns: !this.state.forceColumns,
        });
    }

    setTheme = () => {
        this.setState({
            themeId: this.state.themeId === 'primary' ? 'secondary' : 'primary',
            theme: this.state.themeId === 'primary' ? secondaryTheme : primaryTheme,
        });
    }

    render() {
        return (<Container>
            <ThemeProvider theme={this.state.theme}>
                <Content>
                    <Title>Contents</Title>
                    <Element>
                        <List noDivide>
                            <ListItem><Button href="#text_elements">Text elements</Button></ListItem>
                            <ListItem><Button href="#list_elements">List elements</Button></ListItem>
                            <ListItem><Button href="#button_elements">Button elements</Button></ListItem>
                            <ListItem><Button href="#img_elements">Image elements</Button></ListItem>
                            <ListItem><Button href="#hero_elements">Hero elements</Button></ListItem>
                            <ListItem><Button href="#section_elements">Section elements</Button></ListItem>
                            <ListItem><Button href="#table_elements">Table elements</Button></ListItem>
                            <ListItem><Button href="#grid_elements">Grid elements</Button></ListItem>
                            <ListItem><Button href="#colour_swatch">Colour swatch</Button></ListItem>
                        </List>
                    </Element>
                    <Element borderless>
                        <List noDivide>
                            <ListItem>
                                <Button onClick={this.setForceColumns} inverted>
                                    {this.state.forceColumns ? 'Don\'t force columns' : 'Force columns'}
                                </Button>
                            </ListItem>
                            <ListItem>
                                <Button onClick={this.setTheme} inverted>
                                    Toggle to {this.state.themeId === 'secondary' ? 'primary' : 'secondary'} theme
                                </Button>
                            </ListItem>
                            <ListItem>
                                <Text>Current theme:</Text>
                                <List>{Object.keys(this.state.theme).map(key => <ListItem key={key}>{key}: {this.state.theme[key]}</ListItem>)}</List>
                            </ListItem>
                        </List>
                    </Element>
                    <TextElements id="text_elements" />
                    <ListElements id="list_elements" />
                    <ButtonElements id="button_elements" />
                    <ImageElements id="img_elements" />
                    <HeroElements id="hero_elements" fullWidth={!this.state.forceColumns} />
                    <SectionElements id="section_elements" fullWidth={!this.state.forceColumns} />
                    <TableElements id="table_elements" fullWidth={!this.state.forceColumns} />
                    <GridElements id="grid_elements" fullWidth={!this.state.forceColumns} />
                    <ThemeProvider theme={primaryTheme}>
                        <ColourSwatch id="colour_swatch" />
                    </ThemeProvider>
                </Content>
            </ThemeProvider>
        </Container>);
    }
}