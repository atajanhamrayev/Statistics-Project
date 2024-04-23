import { createStore, combineReducers, applyMiddleware } from "redux";
import homeReducer from "./home-reducer";
import questionReducer from "./question-reducer";
import { thunk } from "redux-thunk";
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
  homePage: homeReducer,
  questionPage: questionReducer,
  form: formReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;
