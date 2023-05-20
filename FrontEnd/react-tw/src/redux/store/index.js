import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducers from '../reducer/userReducer';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  userReducer: userReducers,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
