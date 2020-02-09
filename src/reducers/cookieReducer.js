import { SET_CSRF_COOKIE } from '../actions/types';

const initialState = {
  csrf: ''
}

export default function(state = initialState, action) {
  switch(action) {
    case SET_CSRF_COOKIE:
      const newCookie = action.csrfCookie;
      return {
        ...state,
        csrf: newCookie
      }
      
    default:
      return state;
  }
}