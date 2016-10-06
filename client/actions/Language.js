import { createTypes } from 'reduxsauce';

export const Types = createTypes(`
  CHANGE_LANGUAGE
`);


export const changeLanguage = (newLanguage) => ({ type: Types.CHANGE_LANGUAGE, language: newLanguage });
