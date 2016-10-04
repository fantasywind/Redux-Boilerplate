import config from '../config';
const APIService = require(`./API_${config.api.version}/src/`);

const apiInstance = new APIService.APIAccountApi();

const aPI001AccountLogin = (...payload) => new Promise((resolve, reject) => {
  apiInstance.aPI001AccountLogin(new APIService.LoginRequest(...payload), (error, data, response) => {
    if (error) reject(error, response);
    resolve(data, response);
  });
});


const testGitHubUser = (userName) => fetch(`https://api.github.com/users/${userName}`);

export default {
  aPI001AccountLogin,
  testGitHubUser,
};
