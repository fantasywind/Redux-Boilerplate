import { userFakeData } from './mockData/';
import config from '../config';
import has from 'lodash/has';

const responseTimePeriod = config.mock.responseTimePeriod || 2000;


const successPromise = (payload) => new Promise((resolve) => {
  setTimeout(() => resolve(payload), responseTimePeriod);
});
const failPromise = (payload) => new Promise((resolve, reject) => {
  setTimeout(() => reject(payload), responseTimePeriod);
});

// Mock template example
export const mockRequest = (methodName, payload) => {
  if (has(payload, 'mock')) {
    const { mock } = payload;
    return (mock === 'SUCCESS') ?
    successPromise(mockData[`${methodName}Success`]) : failPromise(mockData[`${methodName}Fail`]);
  }

  throw new Error('Using mock without mock payload setting.');
};


export const getUser = (payload) => mockRequest('getUser', payload);
export const postLogin = (payload) => mockRequest('postLogin', payload);

const testGitHubUser = () => successPromise(userFakeData);

export default {
  testGitHubUser,
};
