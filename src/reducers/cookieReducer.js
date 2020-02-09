import { SET_CSRF_COOKIE } from '../actions/types';

const initialState = {
  csrf: ''
}

export default function(state = initialState, action) {
  switch(action) {
    case SET_CSRF_COOKIE:
      state.csrf = action.csrfCookie;
    default:
      return state;
  }
}