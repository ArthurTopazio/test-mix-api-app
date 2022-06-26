import { combineReducers, legacy_createStore } from "redux";
import React from 'react';

import bannerReducer from './banner-redux'

let reducers = combineReducers({
  banner: bannerReducer,
});

let store = legacy_createStore(reducers);

export default store;