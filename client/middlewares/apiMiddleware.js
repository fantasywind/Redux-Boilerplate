/* global API_HOST:false */
import omit from 'lodash/omit';
import forEach from 'lodash/forEach';
import isArray from 'lodash/isArray';
import { camelizeKeys } from 'humps';

export const API_REQUEST = Symbol('API_REQUEST');
export const NO_TOKEN_STORED = Symbol('NO_TOKEN_STORED');

export default () => next => async action => {
  const requestOptions = action[API_REQUEST];

  if (typeof requestOptions === 'undefined') {
    return next(action);
  }

  const {
    entrypoint,
    types,
    auth,
    json,
    body,
    formData,
    method,
    onSuccess,
    onFailed,
  } = requestOptions;

  const dispatchPayload = omit((requestOptions.dispatchPayload || {}), 'type');


  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.');
  }

  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.');
  }

  const [successType, errorType, requestType] = types;


  // Fetch Endpoint
  const fetchOptions = {
    method: method || 'GET',
    headers: {
      Accept: 'application/json',
    },
  };

  // Inject JWT Token
  if (auth) {
    const token = localStorage.getItem('accessToken');

    if (token) {
      fetchOptions.headers.Authorization = `Bearer ${token}`;
    } else {
      return next({
        type: NO_TOKEN_STORED,
      });
    }
  }

  // ContentType
  if (json) {
    fetchOptions.headers['Content-Type'] = 'application/json';
    fetchOptions.body = JSON.stringify(body || {});
  }

  // FormData
  if (formData) {
    fetchOptions.body = new FormData();
    forEach(body, (val, key) => {
      if (val) {
        if (val instanceof FileList) {
          [].forEach.call(val, (file) => fetchOptions.body.append(key, file));
        } else {
          fetchOptions.body.append(key, val);
        }
      }
    });
  }

  let response;

  try {
    // Before Request
    if (requestType) {
      next({
        type: requestType,
        entrypoint,
        fetchOptions,
      });
    }

    response = await fetch(`${API_HOST}${entrypoint}`, fetchOptions);
    if (response.ok) {
      if (response.status !== 204) {
        response = camelizeKeys(await response.json());
      }
    } else {
      response = camelizeKeys(await response.json());

      next({
        type: errorType,
        error: response.message,
        ...response,
      });

      if (onFailed) {
        onFailed(response.message);
      }

      return true;
    }
  } catch (error) {
    if (errorType) {
      next({
        type: errorType,
        error,
      });

      if (onFailed) {
        onFailed(error);
      }

      return true;
    }

    if (onFailed) {
      onFailed(error);
    }

    return console.error(error);
  }

  if (isArray(response)) {
    next({
      type: successType,
      list: response,
      ...dispatchPayload,
    });

    if (onSuccess) {
      onSuccess(response);
    }

    return true;
  }

  if (onSuccess) {
    onSuccess(response);
  }

  return next({
    type: successType,
    ...dispatchPayload,
    ...response,
  });
};
