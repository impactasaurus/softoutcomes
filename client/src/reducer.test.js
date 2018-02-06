import reducer from './reducer';

describe('reducer', () => {
    it('should provide the initial state when the action type is not recognised', () => {
        const nextState = reducer(undefined, {});
        expect(nextState.isFetching).toBeFalsy();
        expect(nextState.error).toBeNull();
        expect(nextState.catalogue).toHaveLength(0);
    });
});