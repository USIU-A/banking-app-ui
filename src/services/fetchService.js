import {format} from 'url';


function buildUrl(url, query) {
    return url+ (query ? format({query}) : '');
}

let cancel = null;
export function get(url, query) {

    // try {
    //     if(cancel)
    //     {
    //         if(cancel.signal.aborted){

    //         }else{
    //             cancel.abort();
    //         }
    //     }
    //     cancel = new AbortController();

    //     const signal = cancel.signal;
    //     return fetch(buildUrl(url, query), {signal}).then((response) => {cancel = null; return response.json()});
    // } catch (error) {
        
    // }
    return fetch(buildUrl(url, query)).then((response) => response.json());
}

export function post(url, query, data) {
    return fetch(buildUrl(url, query), {
        method: 'POST',
        body: data,
    }).then((response) => response.json());
}

export function put(url, query, data) {
    return fetch(buildUrl(url, query), {
        method: 'PUT',
        body: data
    }).then((response) => response.json());
}

export function del(url, query, data) {
    return fetch(buildUrl(url, query), {
        method: 'DELETE',
        body: data
    }).then((response) => response.json());
}