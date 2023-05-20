import React from 'react';
import ActionTypes from '../action/actionType';

const initialState = {
  user: [],
  message: '',
  refresh: '',
};

function userReducers(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.GET_USER:
      return { state, user: payload, refresh: true };
    case ActionTypes.UPDATE_USER:
      return { state, message: payload.message, refresh: false };
    case ActionTypes.DEL_USER:
      return { refresh: false };
    default:
      return state;
  }
}

export default userReducers;
