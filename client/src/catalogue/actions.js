import { fetchJson } from '../utils';

export const REQUEST_CATALOGUE = 'REQUEST_CATALOGUE';
export const RECEIVE_CATALOGUE = 'RECEIVE_CATALOGUE';
export const ERROR_CATALOGUE = 'ERROR_CATALOGUE';

export const requestCatalogue = () => ({
    type: REQUEST_CATALOGUE,
});

export const receiveCatalogue = catalogue => ({
    type: RECEIVE_CATALOGUE,
    catalogue,
});

export const errorCatalogue = error => ({
    type: ERROR_CATALOGUE,
    error,
});

export const loadCatalogue = () => (dispatch, getState) => {
    const catalogue = getState().catalogue;
    if (catalogue && catalogue.length) {
        // Already cached
        return;
    }
    
    dispatch(requestCatalogue());
    return fetchJson('/api/catalogue.json')
        .then(r => dispatch(receiveCatalogue(r)))
        .catch(e => dispatch(errorCatalogue(e)));
}