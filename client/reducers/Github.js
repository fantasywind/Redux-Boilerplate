import { createReducer } from 'reduxsauce';
import { Types } from '../actions/Github';

const INITIAL_STATE = {
  payload: null,
  waiting: false,
};

export default createReducer(INITIAL_STATE, {
  [Types.GITHUB_USER_SUCCESS]: (state = INITIAL_STATE, action) => {
    const { payload } = action;
    return {
      ...state,
      waiting: false,
      payload,
    };
  },
  [Types.GITHUB_USER_PROCESSING]: (state = INITIAL_STATE, action) => {
    const { waiting } = action;
    return {
      ...state,
      waiting,
    };
  },
  [Types.GITHUB_USER_FAILED]: (state = INITIAL_STATE, action) => {
    const { error, payload } = action;
    return {
      ...state,
      waiting: false,
      error,
      payload,
    };
  },

});
