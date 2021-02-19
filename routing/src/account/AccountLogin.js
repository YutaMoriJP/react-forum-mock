import React from "react";
import { useLocation, Redirect } from "react-router-dom";
import Button from "../util/Button";
import { useUser } from "../ContextProvider/UserContext";

const AccountLogin = () => {
  const { userInfo, setUserInfo } = useUser();
  const { state } = useLocation();
  const { from } = state || { from: { pathname: "/" } };
  if (userInfo.loggedIn) {
    return <Redirect to={from} />;
  }
  return (
    <Button
      onClick={() =>
        setUserInfo({
          loggedIn: true,
          username: "yuta",
          password: "secrent",
        })
      }
    >
      Login
    </Button>
  );
};

export default AccountLogin;
