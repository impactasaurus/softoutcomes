import catalogueReducer from './catalogue/reducer';
import questionnaireReducer from './questionnaire/reducer';
import { REQUEST_CATALOGUE, RECEIVE_CATALOGUE, ERROR_CATALOGUE } from './catalogue/actions';
import { REQUEST_QUESTIONNAIRE, RECEIVE_QUESTIONNAIRE, ERROR_QUESTIONNAIRE } from './questionnaire/actions';

const initialState = {
    isFetching: false,
    error: null,
    catalogue: [],
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case REQUEST_CATALOGUE:
        case RECEIVE_CATALOGUE:
        case ERROR_CATALOGUE:
            return catalogueReducer(state, action);
        case REQUEST_QUESTIONNAIRE:
        case RECEIVE_QUESTIONNAIRE:
        case ERROR_QUESTIONNAIRE:
            return questionnaireReducer(state, action);
        default:
            return state;
    }
}