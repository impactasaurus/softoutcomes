const fetchJson = (endpoint, settings) => {
    try {
        return fetch(endpoint, settings)
            .then(r => {
                if(r.ok) {
                    return r.json();
                }
                throw new Error(`Bad status returned from server ${r.status}`);
            });
    } catch (e) {
        return Promise.reject(e);
    }
}

export default fetchJson;