import { Schema, arrayOf } from 'normalizr';
import User from './User';

export default new Schema('articles', { idAttribute: 'id' }).define({
  author: User,
  contributors: arrayOf(User),
});
