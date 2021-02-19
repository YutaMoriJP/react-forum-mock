import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import UserContext from "./ContextProvider/UserContext";
import Material from "./materila_ui/Material";

const ContextApp = () => {
  return (
    <UserContext>
      <App />
    </UserContext>
  );
};
/*
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ContextApp />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
*/

ReactDOM.render(
  <Router>
    <Material />
  </Router>,
  document.getElementById("root")
);

//ReactDOM.hydrate(<Menu />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
