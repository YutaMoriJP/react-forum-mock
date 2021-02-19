import React from "react";
import { useUser } from "../ContextProvider/UserContext";

const Account = () => {
  const {
    userInfo: { username },
  } = useUser();
  return (
    <div>
      <h1>Hi, {username}! Welcome to your Account</h1>
    </div>
  );
};

export default Account;
