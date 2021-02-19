import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { useUser } from "../ContextProvider/UserContext";

const Protected = ({ component: Component, ...rest }) => {
  const { userInfo } = useUser();
  const location = useLocation();
  return (
    <Route {...rest}>
      {userInfo.loggedIn ? (
        <Component />
      ) : (
        <Redirect
          to={{ pathname: "/mockup-login", state: { from: location } }}
        />
      )}
    </Route>
  );
};

export default Protected;
