import article from './reducers/article';
import articleList from './reducers/articleList';
import auth from './reducers/auth';
import { combineReducers } from 'redux';
import common from './reducers/common';
import home from './reducers/home';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  article,
  articleList,
  auth,
  common,
  home,
  router: routerReducer
});
