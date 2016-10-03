import { createReducer } from 'reduxsauce';
import { Types } from '../acitons/Language';
import i18n from '../libs/i18n/';

const INITIAL_STATE = {
  language: null,
};

export default createReducer(INITIAL_STATE, {
  [Types.CHANGE_LANGUAGE]: (state = INITIAL_STATE, action) => {
    const { language } = action;
    i18n.changeLanguage(language);
    return {
      ...state,
      language,
    };
  },

});
