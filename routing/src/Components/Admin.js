import React from "react";
import { useUser } from "../ContextProvider/UserContext";

const Admin = () => {
  const {
    userInfo: { username, password },
  } = useUser();
  return (
    <>
      <h1>Admin Page:</h1>
      <p>Username: {username}</p>
      <p>Password: {password}</p>
    </>
  );
};

export default Admin;
