import fetchMock from 'fetch-mock';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { REQUEST_QUESTIONNAIRE, RECEIVE_QUESTIONNAIRE, ERROR_QUESTIONNAIRE,
    requestQuestionnaire, receiveQuestionnaire, errorQuestionnaire, loadQuestionnaire } from './actions';

describe('questionnaire actions', () => {
    beforeEach(fetchMock.restore);

    describe('request questionniare', () => {
        it('should create a request questionnaire action', () => {
            const action = requestQuestionnaire();
            expect(action.type).toEqual(REQUEST_QUESTIONNAIRE);
        });
    });

    describe('receive questionnaire', () => {
        it('should create a receive questionnaire action', () => {
            const questionnaire = { some: 'questionnaire' };
            const action = receiveQuestionnaire({ ...questionnaire });
            expect(action.type).toEqual(RECEIVE_QUESTIONNAIRE);
            expect(action.questionnaire).toEqual(questionnaire);
        });
    });

    describe('error questionnaire', () => {
        it('should create an error questionnaire action', () => {
            const error = new Error();
            const action = errorQuestionnaire(error);
            expect(action.type).toEqual(ERROR_QUESTIONNAIRE);
            expect(action.error).toEqual(error);
        });
    });

    describe('load questionnaire', () => {
        const questionnaireId = 'some_questionnaire'
        const endpoint = `/api/questionnaire/${questionnaireId}.json`;
        const configureEndpoint = (status, respondWith) => {
            if (status >= 0) {
                fetchMock
                    .get(endpoint, { status, body: respondWith });
            } else {
                fetchMock
                    .get(endpoint, { throws: respondWith });
            }
        }
        const storeBuilder = configureStore([ thunk ]);

        it('should do nothing when the questionnaire is already in the cache', async () => {
            configureEndpoint(200, { some: 'questionnaire' });
            const store = storeBuilder({
                currentQuestionnaireId: questionnaireId,
                currentQuestionnaire: {},
            });

            await store.dispatch(loadQuestionnaire(questionnaireId));

            expect(store.getActions()).toHaveLength(0);
            expect(fetchMock.called(endpoint)).toBeFalsy();
        });

        it('should load the questionnaire from the api', async () => {
            configureEndpoint(200, { some: 'questionnaire' });
            const store = storeBuilder({});

            await store.dispatch(loadQuestionnaire(questionnaireId));

            expect(store.getActions()).toEqual([
                requestQuestionnaire(),
                receiveQuestionnaire({ some: 'questionnaire' }),
            ]);
            expect(fetchMock.called(endpoint)).toBeTruthy();
        });

        it('should dispatch an error when the status of the response is not ok', async () => {
            configureEndpoint(404, { some: 'missing endpoint' });
            const store = storeBuilder({});

            await store.dispatch(loadQuestionnaire(questionnaireId));

            expect(store.getActions()).toEqual([
                requestQuestionnaire(),
                errorQuestionnaire(new Error(`Bad status returned from server 404`)),
            ]);
            expect(fetchMock.called(endpoint)).toBeTruthy();
        });

        it('should dispatch an error when the request cannot be completed', async () => {
            const error = new Error('Bad internet connection');
            configureEndpoint(-1, error);
            const store = storeBuilder({});

            await store.dispatch(loadQuestionnaire(questionnaireId));

            expect(store.getActions()).toEqual([
                requestQuestionnaire(),
                errorQuestionnaire(error),
            ]);
            expect(fetchMock.called(endpoint)).toBeTruthy();
        });
    });
});