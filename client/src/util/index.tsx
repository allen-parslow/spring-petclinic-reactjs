import { IHttpMethod } from '../types';

/**
 * path: relative PATH without host and port (i.e. '/api/123')
 * data: object that will be passed as request body
 * onSuccess: callback handler if request succeeded. Succeeded means it could technically be handled (i.e. valid json is returned)
 * regardless of the HTTP status code.
 */
export const submitForm = (method: IHttpMethod, path: string, data: any, onSuccess: (status: number, response: any) => void) => {
  const requestUrl = path;

  const fetchParams = {
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };

  console.log('Submitting to ' + method + ' ' + requestUrl);
  return fetch(requestUrl, fetchParams)
    .then(response => response.status === 204 ? onSuccess(response.status, {}) : response.json().then(result => onSuccess(response.status, result)));
};
