import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import store from "./components/redux/redux-store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

export let rerendererEntireTree = () => {
  root.render(
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  );
};

rerendererEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerendererEntireTree(state);
});
