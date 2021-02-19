import React from "react";
import Layout from "./Components/Layout";
import { Route, Switch, Redirect } from "react-router-dom";
import Anime from "./Pages/Anime";
import NoMatch from "./Pages/NoMatch";
import Input from "./Components/Input";
import Home from "./Pages/Home";
import { useUser } from "./ContextProvider/UserContext";
import ProtectedRoute from "./Pages/ProtectedRoute";
import Admin from "./Components/Admin";
import ProtectedAccount from "./account/ProtectedAccount";
import Account from "./account/Account";
import AccountLogin from "./account/AccountLogin";
import User from "./account/User";
import UserAccount from "./Pages/UserAccount";
import Search from "./Search/Search";
const App = () => {
  const { userInfo } = useUser();
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          {userInfo.loggedIn ? <Home /> : <Redirect to="/login" />}
        </Route>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/anime">
          <Anime />
        </Route>
        <Route path="/user-account">
          <UserAccount />
        </Route>
        <Route path="/login">
          <Input />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/account-login">
          <AccountLogin />
        </Route>
        <ProtectedAccount component={Account} path="/account" />
        <ProtectedRoute component={Admin} path="/admin" />
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
