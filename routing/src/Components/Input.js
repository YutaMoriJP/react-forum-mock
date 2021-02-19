import useInput from "../util/useInput";
import React from "react";
import styled from "styled-components";
import { useUser } from "../ContextProvider/UserContext";
import { useLocation, Redirect } from "react-router-dom";

const Form = styled.form`
  margin: 20px auto;
  padding: 15px;
  border-radius: 8px;
  border: 5px solid #ced4da;
  width: 70%;
  display: flex;
  flex-direction: column;
  h1 {
    text-align: center;
  }
  button {
    padding: 5px;
    width: 60%;
    margin: auto;
    font-size: 2rem;
    background-color: #212529;
    color: white;
    cursor: pointer;
    :hover {
      background-color: transparent;
      color: black;
    }
  }
  @media screen and (max-width: 800px) {
    width: 95%;
    button {
      width: 90%;
      margin: auto;
    }
  }
`;

const InputField = styled.section`
  padding: 10px;
  display: flex;
  gap: 20px;
  input {
    flex: 1 1 auto;
    padding: 15px;
    font-size: 1.2rem;
  }
  label {
    align-self: center;
  }
`;

const storeUserAccount = (keyname, loggedIn, username, password) =>
  localStorage.setItem(
    keyname,
    JSON.stringify({ loggedIn, username, password })
  );

const getUserAccount = keyname => localStorage.getItem(keyname);

const Input = ({ initial = "" }) => {
  const [username, reset] = useInput(initial);
  const [password, resetPass] = useInput(initial);
  const { userInfo, setUserInfo } = useUser();
  const { state } = useLocation();
  const { from } = state || { from: { pathname: "/" } };
  console.log(`the from variable looks like: ${from}`);
  const handleSubmit = e => {
    if (e) {
      e.preventDefault();
    }
    if (localStorage.getItem("useraccount")) {
      const userData = getUserAccount("useraccount");
      setUserInfo(userData);
      return;
    }
    setUserInfo({
      loggedIn: true,
      username: username.value,
      password: password.value,
    });
    storeUserAccount("useraccount", true, username.value, password.value);
    reset();
    resetPass();
  };
  const handleEnter = e => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  return (
    <>
      {!userInfo.loggedIn ? (
        <Form onSubmit={handleSubmit} onKeyPress={handleEnter}>
          <h1>Login Field</h1>
          <InputField>
            <label htmlFor="username">Username</label>
            <input type="text" {...username} />
          </InputField>
          <InputField>
            <label htmlFor="password">Password</label>
            <input type="password" {...password} />
          </InputField>
          <button>Login</button>
        </Form>
      ) : (
        <Redirect to={from} />
      )}
    </>
  );
};

export default Input;
