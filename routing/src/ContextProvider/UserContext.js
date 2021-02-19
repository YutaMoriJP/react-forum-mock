import React, { useReducer, useState, useContext, createContext } from "react";

const User = createContext();

export const useUser = () => useContext(User);

const getUserAccount = keyname => localStorage.getItem(keyname);

const authenticaUser = (state, action) => {
  switch (action.type) {
    case "login":
      return {
        loggedIn: true,
        username: action.payload.username,
        password: action.payload.password,
      };
    case "logout":
      return {
        loggedIn: false,
        username: "",
        password: "",
      };
    default:
      return state;
  }
};

const UserContext = ({ children }) => {
  /*
  const [userInfo, dispatchUserInfo] = useReducer(
    authenticaUser,
    { loggedIn: false }
  );
  */
  const [userInfo, setUserInfo] = useState(
    JSON.parse(getUserAccount("useraccount")) || { loggedIn: false }
  );
  return (
    <User.Provider value={{ userInfo, setUserInfo }}>{children}</User.Provider>
  );
};

export default UserContext;
