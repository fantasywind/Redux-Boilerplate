import { arrayOf } from 'normalizr';
import Article from './Article';
import User from './User';

const Schemas = {
  ARTICLE: Article,
  ARTICLE_ARRAY: arrayOf(Article),
  USER: User,
  USER_ARRAY: arrayOf(User),
};

export default Schemas;
