import { combineReducers, legacy_createStore } from "redux";
import React from 'react';

import bannerReducer from './banner-reducer'
import homeReducer from "./home-reducer"

let reducers = combineReducers({
  banner: bannerReducer,
  home: homeReducer,
});

let store = legacy_createStore(reducers);

export default store;