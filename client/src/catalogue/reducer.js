import { REQUEST_CATALOGUE, RECEIVE_CATALOGUE, ERROR_CATALOGUE } from './actions';

export default function catalogueReducer(state, action) {
    switch(action.type) {
        case REQUEST_CATALOGUE:
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        case RECEIVE_CATALOGUE:
            return {
                ...state,
                isFetching: false,
                catalogue: action.catalogue,
            };
        case ERROR_CATALOGUE:
            return {
                ...state,
                isFetching: false,
                error: action.error,
            };
        default:
            return state;
    }
}