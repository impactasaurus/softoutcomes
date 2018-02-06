import fetchMock from 'fetch-mock';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { REQUEST_CATALOGUE, RECEIVE_CATALOGUE, ERROR_CATALOGUE,
    requestCatalogue, receiveCatalogue, errorCatalogue, loadCatalogue } from './actions';

describe('catalogue actions', () => {
    beforeEach(fetchMock.restore);

    describe('request catalogue', () => {
        it('should create a request catalogue action', () => {
            const action = requestCatalogue();
            expect(action.type).toEqual(REQUEST_CATALOGUE);
        });
    });

    describe('receive catalogue', () => {
        it('should create a receive catalogue action', () => {
            const catalogue = [{some: 'catalogue'}];
            const action = receiveCatalogue(catalogue);
            expect(action.type).toEqual(RECEIVE_CATALOGUE);
            expect(action.catalogue).toEqual(catalogue);
        });
    });

    describe('error catalogue', () => {
        it('should create an error catalogue action', () => {
            const error = new Error();
            const action = errorCatalogue(error);
            expect(action.type).toEqual(ERROR_CATALOGUE);
            expect(action.error).toEqual(error);
        });
    });

    describe('load catalogue', () => {
        const endpoint = '/api/catalogue.json';
        const configureEndpoint = (status, respondWith) => {
            if (status >= 0) {
                fetchMock
                    .get(endpoint, { status, body: respondWith });
            } else {
                fetchMock
                    .get(endpoint, { throws: respondWith });
            }
        }
        const storeBuilder = configureStore([thunk]);

        it('should not do anything if the state already has a loaded catalogue', async () => {
            configureEndpoint(200, { some: 'catalogue' });
            const store = storeBuilder({
                catalogue: [
                    { some: 'exisiting catalogue' }
                ]
            });

            await store.dispatch(loadCatalogue());

            expect(store.getActions()).toHaveLength(0);
            expect(fetchMock.called()).toBeFalsy();
        });

        it('should load the catalogue from the api', async () => {
            configureEndpoint(200, { some: 'catalogue' });
            const store = storeBuilder({});
            
            await store.dispatch(loadCatalogue());

            expect(store.getActions()).toEqual([
                requestCatalogue(),
                receiveCatalogue({ some: 'catalogue' }),
            ]);
            expect(fetchMock.called(endpoint)).toBeTruthy();
        });

        it('should dispatch an error when the status returned is not ok', async () => {
            configureEndpoint(404, { some: 'missing endpoint' });
            const store = storeBuilder({});

            await store.dispatch(loadCatalogue());

            expect(store.getActions()).toEqual([
                requestCatalogue(),
                errorCatalogue(new Error(`Bad status returned from server 404`)),
            ]);
            expect(fetchMock.called(endpoint)).toBeTruthy();
        });

        it('should dispatch an error when the request fails', async () => {
            const error = new Error('Bad internet connection');
            configureEndpoint(-1, error);
            const store = storeBuilder({});

            await store.dispatch(loadCatalogue());

            expect(store.getActions()).toEqual([
                requestCatalogue(),
                errorCatalogue(error),
            ]);
            expect(fetchMock.called(endpoint)).toBeTruthy();
        });
    });
});