export class Actions {

    static get(url, query, store, typeReq, typeRes, callback) {

        const request = { method: 'GET', url, query };
        this.makeRequest(request, store, typeReq, typeRes, callback);
    }

    static put(url, data, store, typeReq, typeRes, callback) {

        const request = { method: 'PUT', url, data };
        this.makeRequest(request, store, typeReq, typeRes, callback);
    }

    static post(url, data, store, typeReq, typeRes, callback) {

        const request = { method: 'POST', url, data };
        this.makeRequest(request, store, typeReq, typeRes, callback);
    }

    static delete(url, query, store, typeReq, typeRes, callback) {

        const request = { method: 'DELETE', url, query };
        this.makeRequest(request, store, typeReq, typeRes, callback);
    }

    static makeRequest(request, store, typeReq, typeRes, callback) {

        store.dispatch({
            type: typeReq,
            request
        });

        fetch(request)
            .then((response) => {
                store.dispatch({
                    type: typeRes,
                    response
                });
            })
            .then((response) => {
                if (callback) {
                    callback(response);
                }
            })
            .catch((err) => store.dispatch({
                type: typeRes,
                err
            }));

    }
}

