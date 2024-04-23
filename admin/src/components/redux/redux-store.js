import { createStore, combineReducers, applyMiddleware } from "redux";
import homeReducer from "./home-reducer";
import questionReducer from "./question-reducer";
import authReducer from './auth-reducer';
import { thunk } from "redux-thunk";

let reducers = combineReducers({
  homePage: homeReducer,
  questionPage: questionReducer,
  auth: authReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;
