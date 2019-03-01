import { REQUEST_QUESTIONNAIRE, RECEIVE_QUESTIONNAIRE, ERROR_QUESTIONNAIRE } from './actions';

export default function questionnaireReducer(state, action) {
    switch(action.type) {
        case REQUEST_QUESTIONNAIRE:
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        case RECEIVE_QUESTIONNAIRE:
            return {
                ...state,
                isFetching: false,
                currentQuestionnaireId: action.questionnaire.key,
                currentQuestionnaire: action.questionnaire,
            };
        case ERROR_QUESTIONNAIRE:
            return {
                ...state,
                isFetching: false,
                error: action.error,
            };
        default:
            return state;
    }
}