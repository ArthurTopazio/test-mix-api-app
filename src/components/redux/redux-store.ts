import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import bannerReducer from './banner-reducer'
import homeReducer from "./home-reducer"
import dogsReducer from "./dogs-reducer";
import jokesReducer from "./jokes-reducer";

let reducers = combineReducers({
  banner: bannerReducer,
  home: homeReducer,
  dogs: dogsReducer,
  jokes: jokesReducer,
});

let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;