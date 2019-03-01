import fetchMock from 'fetch-mock';
import fetchJson from './fetchJson';

describe('fetchJson', () => {
    beforeEach(fetchMock.restore);

    const endpoint = '/some/api';

    it('should load the json from the endpoint', async () => {
        fetchMock.get(endpoint, { some: 'response' });
        await expect(fetchJson(endpoint)).resolves.toEqual({ some: 'response' });
        expect(fetchMock.called(endpoint)).toBeTruthy();
    });

    [404, 500, 504, 429].forEach(status => {
        // N.B. This can be tided when https://github.com/facebook/jest/issues/3601 is ready.
        it(`should raise an error when not a successful status - verifying ${status}`, async () => {
            fetchMock.get(endpoint, { status });
            expect.hasAssertions();
            try {
                await fetchJson(endpoint);
            } catch(e) {
                expect(e.message).toEqual(`Bad status returned from server ${status}`);
            }
        });
    });
});