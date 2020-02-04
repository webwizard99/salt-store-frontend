import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';
import paginationReducer from './paginationReducer';
import cookieReducer from './cookieReducer';

export default combineReducers({
  items: itemsReducer,
  page: paginationReducer,
  cookies: cookieReducer
});