import React, { Fragment } from 'react';
import Title from '../title';
import { Element } from '../layout';
import { Text, Header, Subheader, Link } from '../../shared';
import { typeset } from '../../shared/theme';

export const lorumIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;


export default({id}) => (
    <Fragment>
        <Title id={id}>Text elements</Title>
        <Element>
            <Text>Default text</Text>
            <Text>{lorumIpsum}</Text>
            <Text>{lorumIpsum}</Text>
            <Text>{lorumIpsum}</Text>
        </Element>
        <Element>
            <Link to={`#${id}`}>Default link</Link>
            <Text>{lorumIpsum} <Link to={`#${id}`}>Embedded link</Link> {lorumIpsum}</Text>
        </Element>
        <Element>
            <Text size={typeset.size.xxl} lineHeight={typeset.lineHeight.xxl}>Extra extra large (xxl)</Text>
            <Text size={typeset.size.xl} lineHeight={typeset.lineHeight.xl}>Extra large (xl)</Text>
            <Text size={typeset.size.lg} lineHeight={typeset.lineHeight.lg}>Large (lg)</Text>
            <Text size={typeset.size.base} lineHeight={typeset.lineHeight.base}>Base (base)</Text>
            <Text size={typeset.size.sm} lineHeight={typeset.lineHeight.sm}>Small (sm)</Text>
            <Text size={typeset.size.xs} lineHeight={typeset.lineHeight.xs}>Extra small (xs)</Text>
        </Element>
        <Element>
            <Text weight={typeset.weight.hairline}>Hairline</Text>
            <Text weight={typeset.weight.extraLight}>Extra light</Text>
            <Text weight={typeset.weight.light}>Light</Text>
            <Text weight={typeset.weight.base}>Base</Text>
            <Text weight={typeset.weight.medium}>Medium</Text>
            <Text weight={typeset.weight.semiBold}>Semi bold</Text>
            <Text weight={typeset.weight.bold}>Bold</Text>
            <Text weight={typeset.weight.extraBold}>Extra bold</Text>
            <Text weight={typeset.weight.heavy}>Heavy</Text>
        </Element>
        <Element>
            <Header>Default header</Header>
            <Subheader>with subheader</Subheader>
        </Element>
        <Element>
            <Header underline>Underlined header</Header>
            <Subheader>with subheader</Subheader>
        </Element>
    </Fragment>
)