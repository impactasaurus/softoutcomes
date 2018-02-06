import reducer from './reducer';
import { requestCatalogue, receiveCatalogue, errorCatalogue } from './actions';

describe('catalogue reducer', () => {
    describe('request catalogue', () => {
        it('should mark the state as fetching with no error', () => {
            const state = {
                catalogue: [{some: 'catalogue'}],
                isFetching: false,
                error: new Error(),
            };
            const nextState = reducer(state, requestCatalogue());

            expect(nextState.catalogue).toEqual([{some: 'catalogue'}]);
            expect(nextState.isFetching).toBeTruthy();
            expect(nextState.error).toBeNull();
        });
    });

    describe('receive catalogue', () => {
        it('should mark the state as not fetching and update the catalogue', () => {
            const error = new Error();
            const state = {
                isFetching: true,
                error: error,
                catalogue: [],
            };
            const nextState = reducer(state, receiveCatalogue([{some: 'catalogue'}]));

            expect(nextState.isFetching).toBeFalsy();
            expect(nextState.error).toEqual(error);
            expect(nextState.catalogue).toEqual([{some: 'catalogue'}]);
        });
    });

    describe('error catalogue', () => {
        it('should mark the state as not fetching and contain an error', () => {
            const error = new Error();
            const state = {
                error: null,
                isFetching: true,
                catalogue: [{some: 'catalogue'}],
            };
            const nextState = reducer(state, errorCatalogue(error));

            expect(nextState.isFetching).toBeFalsy();
            expect(nextState.error).toEqual(error);
            expect(nextState.catalogue).toEqual([{some: 'catalogue'}]);
        });
    });

    describe('default', () => {
        it('should return the same state unchanged', () => {
            const state = {
                error: null,
                isFetching: false,
                catalogue: [{some: 'catalogue'}],
            };
            const nextState = reducer(state, {});

            expect(nextState).toEqual(state);
            expect(nextState.error).toBeNull();
            expect(nextState.isFetching).toBeFalsy();
            expect(nextState.catalogue).toEqual([{some: 'catalogue'}]);
        });
    })
});