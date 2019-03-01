import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
// eslint-disable-next-line no-unused-vars
import List, { ListItem } from './List';

describe('<List />', () => {
    const theme = {
        fg: '#fff000',
    };

    // eslint-disable-next-line no-unused-vars
    const render = component => renderer.create(
        <ThemeProvider theme={theme}>
            {component}
        </ThemeProvider>
    ).toJSON();

    xit('should include a border top on all but the first item when the prop noDivide is false', () => {
        // Because of the nested reference to ListItem in the rule, we can't currently test this :(
        // There's a PR under discussion (https://github.com/styled-components/jest-styled-components/pull/120)
        // that would add the ability to merge it in, at which point we should update this.
        // We can then also get rid of those eslint-disable comments above
    });

    xit('should not include a border top on any items when the noDivid prop is true', () => {
        // See previous spec for issue with implementing this.
    });
});