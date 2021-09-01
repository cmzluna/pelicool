import React from "react";
import { render } from "react-dom";
import { Route, BrowserRouter } from "react-router-dom";
import Main from "./containers/Main";
import User from "./containers/Users";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";

// ReactDOM.render(
//   <React.StrictMode>
//     <h1>Open Movie Data Base</h1>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

const target = document.getElementById("root");

const app = (
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Route path="/" component={Main} />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

render(app, target);
// ReactDOM.render(<Main />, document.getElementById("root"));
