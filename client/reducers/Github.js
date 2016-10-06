import { createReducer } from 'reduxsauce';
import { Types } from '../acitons/Github';

const INITIAL_STATE = {
  list: [],
};

export default createReducer(INITIAL_STATE, {
  [Types.GITHUB_USER_SUCCESS]: (state = INITIAL_STATE, action) => {
    const { list } = action;
    return {
      ...state,
      list,
    };
  },

});
