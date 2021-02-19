import React, { useState } from "react";
import { Redirect, useLocation } from "react-router-dom";
import Button from "../util/Button";

const MockupLogin = () => {
  const [logged, setLogged] = useState(false);
  const { state } = useLocation();
  const { from } = state || { from: { pathname: "/" } };
  console.log(logged);
  console.log(state);
  console.log(from);
  if (logged) {
    return <Redirect to={from} />;
  }
  return <Button onClick={() => setLogged(prev => !prev)}>Login</Button>;
};

export default MockupLogin;
