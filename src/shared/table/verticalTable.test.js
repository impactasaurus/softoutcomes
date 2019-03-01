import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { BodyRow } from './VerticalTable';
import { Table, TableHeader, TableBody } from '../'

describe('<Table />', () => {
    const theme = {
        fg: '#fff000',
        highlight: 'rgb(255, 0, 123)',
    };

    const render = component => renderer.create(
        <ThemeProvider theme={theme}>
            {component}
        </ThemeProvider>
    );

    it('should respect the theme for the body rows', () => {
        const component = render(<BodyRow />).toJSON();
        expect(component).toHaveStyleRule('background-color', 'rgba(255,0,123,0.075)', {
            modifier: ':nth-child(2n + 1)',
        });
    });

    it('should render the headers', () => {
        const component = render(<Table>
            <thead>
                <TableHeader>Column 1</TableHeader>
                <TableHeader>Column 2</TableHeader>
            </thead>
            <tbody />
        </Table>).root;

        const headers = component.findAllByType(TableHeader);
        expect(headers).toHaveLength(2);
        expect(headers[0].props.children).toEqual('Column 1');
        expect(headers[1].props.children).toEqual('Column 2');
    });

    it('should render the body', () => {
        const data = [
            {
                prop1: 'Data 1 - Prop 1',
                prop2: 'Data 1 - Prop 2',
            },
            {
                prop1: 'Data 2 - Prop 1',
                prop2: 'Data 2 - Prop 2',
            },
        ];
        const component = render(<Table data={data}>
            <thead />
            <tbody>
                <TableBody>{d => d.prop1}</TableBody>
                <TableBody>{d => d.prop2}</TableBody>
            </tbody>
        </Table>);

        const bodyCells = component.root.findAllByType('td');
        expect(bodyCells).toHaveLength(4);
        expect(bodyCells[0].props.children).toEqual('Data 1 - Prop 1');
        expect(bodyCells[1].props.children).toEqual('Data 1 - Prop 2');
        expect(bodyCells[2].props.children).toEqual('Data 2 - Prop 1');
        expect(bodyCells[3].props.children).toEqual('Data 2 - Prop 2');
    });
});
