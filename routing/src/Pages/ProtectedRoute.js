import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { useUser } from "../ContextProvider/UserContext";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();
  const {
    userInfo: { loggedIn },
  } = useUser();
  console.log("user location object is", location);
  return (
    <Route {...rest}>
      {loggedIn ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: location } }} />
      )}
    </Route>
  );
};

export default ProtectedRoute;
