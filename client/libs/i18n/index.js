import config from '../../config';
import i18next from 'i18next';
import XHR from 'i18next-xhr-backend';
import Cache from 'i18next-localstorage-cache';
import LanguageDetector from 'i18next-browser-languagedetector';

import EN from './locales/en/common';
import zhTW from './locales/zh-TW/common';
import zhCN from './locales/zh-CN/common';

if (config.i18n.remoteLanguageResource) i18next.use(XHR);
if (config.i18n.browserLanguagedetector) i18next.use(LanguageDetector);
if (config.i18n.localStorageCache) i18next.use(Cache);

export default i18next.init({
  whitelist: ['en', 'zh-CN', 'zh-TW'],
  fallbackLng: 'en',
  debug: config.i18n.debug,
  interpolation: {
    escapeValue: false,
  },
  /**
   *  for load language package from client side
   */
  resources: {
    en: EN,
    'zh-TW': zhTW,
    'zh-CN': zhCN,
  },
  /**
   *  for load language package from server side
   */
  // ns: ['common'], // 語系的 loading namespace 如語系檔案名稱 common.js
  // defaultNS: 'common', // 預設的 namespace name
  // backend: {
  // // 設定語系檔案的 server 路徑, 會以GET的方式跟 server 要檔案
  // // lng = 語系代碼 ns = namespace
  //   loadPath: './locales/{{lng}}/{{ns}}.json',
  // }
});
