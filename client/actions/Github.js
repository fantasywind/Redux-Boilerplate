import { API_REQUEST } from '../middlewares/apiMiddleware';
import { createTypes } from 'reduxsauce';

export const Types = createTypes(`
  GITHUB_USER_PROCESSING
  GITHUB_USER_FAILED
  GITHUB_USER_SUCCESS
`);


export const fetchGithubUser = (userName) => ({
  [API_REQUEST]: {
    types: [
      Types.GITHUB_USER_SUCCESS,
      Types.GITHUB_USER_FAILED,
      Types.GITHUB_USER_PROCESSING,
    ],
    entrypoint: `users/${userName}`,
    auth: false,
    method: 'GET',
  },
});
