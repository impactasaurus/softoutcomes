import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import TableBody from './TableBody';

describe('<TableHeader />', () => {
    const theme = {
        fg: '#fff000',
    };

    const render = component => renderer.create(
        <ThemeProvider theme={theme}>
            {component}
        </ThemeProvider>
    ).toJSON();
    
    it('should render the children with the provided data', () => {
        const childSpy = jest.fn();
        const data = { some: 'data' };
        render(<TableBody data={data}>
            {childSpy}
        </TableBody>);
        expect(childSpy).toHaveBeenCalledWith(data);
    });

    it('should align the td to respect the valign when provided', () => {
        const component = render(<TableBody valign="top" children={jest.fn()} />);
        expect(component).toHaveStyleRule('vertical-align', 'top', {
            modifier: ' > *',
        });
    });

    it('should not have a vertical align when no valign prop provided', () => {
        const component = render(<TableBody children={jest.fn()} />);
        expect(component).not.toHaveStyleRule('vertical-align', expect.anything(), {
            modifier: ' > *',
        });
    });
});