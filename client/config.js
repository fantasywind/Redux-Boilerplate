export default {
  useReduxLog: true,
  mock: {
    use: false,
    responseTimePeriod: 2000,
  },
  i18n: {
    remoteLanguageResource: false,
    browserLanguagedetector: true,
    localStorageCache: false,
    debug: false,
  },
  api: {
    version: API_VERSION || null,
    host: API_HOST,
  }
};
