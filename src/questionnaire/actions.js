import { fetchJson } from '../utils';

export const REQUEST_QUESTIONNAIRE = 'REQUEST_QUESTIONNAIRE';
export const RECEIVE_QUESTIONNAIRE = 'RECEIVE_QUESTIONNAIRE';
export const ERROR_QUESTIONNAIRE = 'ERROR_QUESTIONNAIRE';

export const requestQuestionnaire = () => ({
    type: REQUEST_QUESTIONNAIRE,
});

export const receiveQuestionnaire = questionnaire => ({
    type: RECEIVE_QUESTIONNAIRE,
    questionnaire,
});

export const errorQuestionnaire = error => ({
    type: ERROR_QUESTIONNAIRE,
    error,
});

export const loadQuestionnaire = questionnaire => (dispatch, getState) => {
    const { currentQuestionnaireId, currentQuestionnaire } = getState();
    if (currentQuestionnaireId === questionnaire && currentQuestionnaire) {
        // Already cached
        return;
    }

    dispatch(requestQuestionnaire());
    return fetchJson(`/api/questionnaire/${questionnaire}.json`)
        .then(r => dispatch(receiveQuestionnaire(r)))
        .catch(e => dispatch(errorQuestionnaire(e)));
}