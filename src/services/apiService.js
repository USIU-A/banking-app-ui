import {format} from 'url';

function buildUrl(url, query) {
    return url + (query ? format({query}) : '');
  }
  
  export function get(url, query) {
    return fetch(buildUrl(url, query)).then((response) => response.json());
  }
  
  export function post(url, query, data) {
    return fetch(buildUrl(url, query), {
      method: 'POST',
      body: data,
      // mode: 'no-cors'
    }).then((response) => response.json());
  }
  
  export function put(url, query, data) {
    return fetch(buildUrl(url, query), {
      method: 'PUT',
      body: data,
      // mode: 'no-cors'
    }).then((response) => response.json());
  }
  
  export function del(url, query) {
    return fetch(buildUrl(url, query), {
      method: 'DELETE',
      // mode: 'no-cors'
    }).then((response) => response.json());
  }