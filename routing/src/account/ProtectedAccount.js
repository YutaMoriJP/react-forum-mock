import React from "react";
import { useLocation, Redirect, Route } from "react-router-dom";
import { useUser } from "../ContextProvider/UserContext";

const ProtectedAccount = ({ component: Component, ...rest }) => {
  const { userInfo } = useUser();
  const location = useLocation();
  return (
    <Route {...rest}>
      {userInfo.loggedIn ? (
        <Component />
      ) : (
        <Redirect
          to={{ pathname: "/account-login", state: { from: location } }}
        />
      )}
    </Route>
  );
};
/*
const App = () => {
  return (
    <Switch>
      <Route path="/account" component={Account} />
    </Switch>
  );
};
*/

export default ProtectedAccount;

/*
<Route {...rest}>
      {userInfo.loggedIn ? (
        <Component />
      ) : (
        <Redirect
          to={{ pathname: "/account-login", state: { from: location } }}
        />
      )}
    </Route>

        */
