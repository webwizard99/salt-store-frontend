import { SET_ITEMS } from '../actions/types';

const initialState = {
  items: null
}

export default function(state = initialState, action) {
  switch(action.type) {
    case(SET_ITEMS):
      const newItems = JSON.parse(JSON.stringify(action.items));
      return {
        ...state,
        items: newItems
      }
    
    default:
      return state;
  }
}