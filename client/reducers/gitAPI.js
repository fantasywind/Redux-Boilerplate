import { createReducer } from 'reduxsauce';
import { Types } from '../actions/sampleAction';

const INITIAL_STATE = {
  userInfo: '',
};

export default createReducer(INITIAL_STATE, {
  [Types.CHANGE_USER]: (state = INITIAL_STATE, action) => {
    const { userInfo } = action;
    return {
      ...state,
      userInfo,
    };
  },

});
