import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import store from "./components/redux/redux-store";
import { Provider } from "react-redux";
import "@fontsource/ubuntu"; // Defaults to weight 400
import "@fontsource/ubuntu/400.css"; // Specify weight
import "@fontsource/ubuntu/400-italic.css"; // Specify weight and style

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
