import { createTypes } from 'reduxsauce';
import api from '../services/API';


export const Types = createTypes(`
  CHANGE_USER
`);


export const sampleAction = (user) => ({ type: Types.CHANGE_USER, userInfo: user });

export const sampleActionAsync = function (user) {
  return (dispatch) => {
    api.testGitHubUser(user)
    .then(function (result) {
      if (result.status === 200) {
        return result;
      }
      throw "request failed";
    })
    .then(function (result) {
      dispatch(sampleAction(result));
    })
    .catch(function () {
      console.error("Couldn't fetch repos for user");
    });
  };
};
