import React, { useReducer } from "react";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import axios from "axios";
import {
  SET_LOADING,
  SEARCH_USERS,
  CLEAR_USERS,
  GET_USERS,
  GET_REPOS
} from "../types";

const GithubState = () => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
    repos: []
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);
  //search
  const searchUsers = async text => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    dispatch({ type: SEARCH_USERS, payload: res.data.items });
  };
  //getusers
  const getUser = async username => {
    setLoading();
    const res = await axios.get(`https://api.github.com/users/${username}`);
    dispatch({ type: GET_USERS, payload: res.data });
  };
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers
      }}
    >
      {this.props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
