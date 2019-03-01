import reducer from './reducer';
import { requestQuestionnaire, receiveQuestionnaire, errorQuestionnaire } from './actions';

describe('questionnaire reducer', () => {
    describe('request questionnaire', () => {
        it('should mark the state as fetching with no error', () => {
            const state = {
                currentQuestionnaireId: null,
                currentQuestionnaire: { some: 'questionnaire' },
                isFetching: false,
                error: new Error(),
            };
            const nextState = reducer(state, requestQuestionnaire());
            
            expect(nextState.isFetching).toBeTruthy();
            expect(nextState.error).toBeNull();
            expect(nextState.currentQuestionnaireId).toBeNull();
            expect(nextState.currentQuestionnaire).toEqual({ some: 'questionnaire' });
        });
    });

    describe('receive questionnaire', () => {
        it('should update the state with the new questionnaire', () => {
            const state = {
                currentQuestionnaireId: null,
                currentQuestionnaire: null,
                isFetching: true,
                error: null,
            };
            const questionnaire = {
                key: 'some_questionnaire',
                value: 'some_questionnaire',
            };
            const nextState = reducer(state, receiveQuestionnaire({...questionnaire}));
            
            expect(nextState.isFetching).toBeFalsy();
            expect(nextState.error).toBeNull();
            expect(nextState.currentQuestionnaireId).toEqual(questionnaire.key);
            expect(nextState.currentQuestionnaire).toEqual({...questionnaire});
        });
    });

    describe('error questionnaire', () => {
        it('should update the state with the error', () => {
            const error = new Error();
            const state = {
                isFetching: true,
                error: null,
                currentQuestionnaire: { some: 'questionnaire' },
                currentQuestionnaireId: 'some_questionnaire',
            };
            const nextState = reducer(state, errorQuestionnaire(error));

            expect(nextState.isFetching).toBeFalsy();
            expect(nextState.error).toEqual(error);
            expect(nextState.currentQuestionnaire).toEqual(state.currentQuestionnaire);
            expect(nextState.currentQuestionnaireId).toEqual(state.currentQuestionnaireId);
        });
    });

    describe('default', () => {
        it('should return the state unchanged', () => {
            const state = {
                isFetching: true,
                error: new Error(),
                currentQuestionnaire: { some: 'questionnaire' },
                currentQuestionnaireId: 'some_questionnaire',
            };
            const nextState = reducer({ ...state }, {});
            expect(nextState).toEqual(state);
        });
    });
});