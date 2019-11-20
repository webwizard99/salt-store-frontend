import { SET_PAGE, SET_COUNT } from '../actions/types';

const initialState = {
  page: 1,
  count: 20
}

export default function(state = initialState, action) {
  switch(action.type) {
    case SET_PAGE:
      return {
        ...state,
        page: action.page
      }
    
    case SET_COUNT:
      return {
        ...state,
        count: action.count
      }
      
    default:
      return state;
  }
}