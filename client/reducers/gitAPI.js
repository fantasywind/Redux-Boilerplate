import { createReducer } from 'reduxsauce';
import { Types } from '../acitons/sampleAction';
import i18n from '../libs/i18n/';

const INITIAL_STATE = {
  userInfo: "",
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
