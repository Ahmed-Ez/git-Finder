import React, { useReducer } from 'react';
import axios from 'axios';
import gitContext from './gitContext';
import gitReducer from './gitReducer';
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_USER_REBOS,
  GET_DATA
} from '../types';

const GitState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  };

  const [state, dispatch] = useReducer(gitReducer, initialState);

  //Get data
  const getData = async () => {
    setLoading();
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    dispatch({
      type: GET_DATA,
      payload: res.data
    });
  };

  //Search Users
  const searchUsers = async text => {
    setLoading();
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
        &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    });
  };

  //GET user
  const getUser = async username => {
    setLoading();
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    dispatch({
      type: GET_USER,
      payload: res.data
    });
  };

  //Get repos
  const getUserRepos = async username => {
    setLoading();
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    dispatch({
      type: GET_USER_REBOS,
      payload: res.data
    });
  };

  //clear users
  const clearUsers = () =>
    dispatch({
      type: CLEAR_USERS
    });

  //set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <gitContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        getData,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos
      }}
    >
      {props.children}
    </gitContext.Provider>
  );
};

export default GitState;
