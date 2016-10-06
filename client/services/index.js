import API from './API';
import mockAPI from './mockAPI';
import config from '../config';

export default (config.mock.use) ? API : mockAPI;
