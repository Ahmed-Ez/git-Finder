import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_USER_REBOS,
  GET_DATA
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_DATA: {
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    }
    case SEARCH_USERS: {
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    }
    case CLEAR_USERS: {
      return {
        ...state,
        users: [],
        loading: false
      };
    }
    case GET_USER: {
      return {
        ...state,
        user: action.payload,
        loading: false
      };
    }
    case GET_USER_REBOS: {
      return {
        ...state,
        repos: action.payload,
        loading: false
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        loading: true
      };
    }
    default:
      return state;
  }
};
