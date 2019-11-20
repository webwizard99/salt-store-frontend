import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';
import paginationReducer from './paginationReducer';

export default combineReducers({
  items: itemsReducer,
  page: paginationReducer
});