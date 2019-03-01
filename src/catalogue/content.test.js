import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import createStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { ThemeProvider } from 'styled-components';
import { StaticRouter } from 'react-router-dom';
import fetchMock from 'fetch-mock';
import ConnectedContent, { Content } from './Content';
import { requestCatalogue, receiveCatalogue } from './actions';
import { primaryTheme } from '../shared/theme';
import { Table, TableHeader } from '../shared';

describe('catalogue <Content />', () => {
    const render = (component, initialState) => {
        const store = createStore([ thunk ])(initialState || {});
        return renderer.create(
            <Provider store={store}>
                <StaticRouter context={{}}>
                    <ThemeProvider theme={primaryTheme}>
                        {component}
                    </ThemeProvider>
                </StaticRouter>
            </Provider>
        );
    };

    it('should load the catalogue on mount', () => {
        const catalogueSpy = jest.fn();
        render(<Content loadCatalogue={catalogueSpy} />);
        expect(catalogueSpy).toHaveBeenCalled();
    });

    it('should pass the given data to the table', () => {
        const data = [
            { some: 'data', id: '1' },
        ];
        const component = render(<Content loadCatalogue={jest.fn()} data={data} />);
        const table = component.root.findByType(Table);
        expect(table.props.data).toEqual(data);
    });

    it('should render the table columns', () => {
        const data = [
            {
                id: 1,
                logo: 'logo.png',
                key: 'questionnaire',
                name: 'The questionnaire',
                description: 'questionnaire description',
                length: 10,
                demographic: ['some', 'demographic'],
                sectors: ['some', 'sectors'],
            },
        ];
        const component = render(<Content loadCatalogue={jest.fn()} data={data} />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});

describe('catalogue <ConnectedContent />', () => {
    beforeEach(fetchMock.restore);

    const render = (component, store) => renderer.create(
        <Provider store={store}>
            <StaticRouter context={{}}>
                <ThemeProvider theme={primaryTheme}>
                    {component}
                </ThemeProvider>
            </StaticRouter>
        </Provider>
    );

    it('should dispatch the load catalogue action creator', async () => {
        const endpoint = '/api/catalogue.json';
        fetchMock.get(endpoint, { status: 200, body: [{ some: 'catalogue' }] });
        const store = createStore([ thunk ])({});
        
        render(<ConnectedContent />, store);
        await fetchMock.flush();

        expect(store.getActions()).toEqual([
            requestCatalogue(),
            receiveCatalogue([{ some: 'catalogue' }]),
        ]);
        expect(fetchMock.called(endpoint)).toBeTruthy();
    });

    it('should load the data from the catalogue', async () => {
        const endpoint = '/api/catalogue.json';
        fetchMock.get(endpoint, { status: 404 });
        const data = { id: '1', some: 'catalogue' };
        const store = createStore([ thunk ])({
            catalogue: [{ ...data }],
        });
        
        const component = render(<ConnectedContent />, store).root;
        await fetchMock.flush();
        
        expect(component.findByType(Content).props.data).toEqual([{ ...data }]);
    });
});