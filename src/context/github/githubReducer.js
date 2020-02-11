import React from "react";
import {
  SET_LOADING,
  SEARCH_USERS,
  CLEAR_USERS,
  GET_USERS,
  GET_REPOS
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS: {
      return { ...state, users: action.payload, loading: false };
    }
    case SET_LOADING: {
      return { ...state, loading: true };
    }
    case GET_USERS: {
      return { ...state, user: action.payload, loading: false };
    }
    default: {
      return state;
    }
  }
};
