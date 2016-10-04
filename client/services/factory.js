//
const ApiClient = 'ApiClient';
const LoginRequest = 'LoginRequest';
const LoginResponse = 'LoginResponse';
const APIAccountApi = 'APIAccountApi';
export default (
  (factory) => factory({
    ApiClient,
    LoginRequest,
    LoginResponse,
    APIAccountApi
  })
)((...params) => (params[0]));
