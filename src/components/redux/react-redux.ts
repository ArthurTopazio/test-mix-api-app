import { combineReducers, legacy_createStore } from "redux";
import React from 'react';

let reducers = combineReducers({
});

let store = legacy_createStore(reducers);

export default store;