import React from "react";
import { useUser } from "../ContextProvider/UserContext";
import { Redirect } from "react-router-dom";
import Button from "../util/Button";
import styled from "styled-components";
import ProtectedRoute from "../Pages/ProtectedRoute";

const Container = styled.main`
  display: flex;
  flex-flow: row wrap;
  section {
    flex: 1 1 auto;
  }
  button {
    align-self: center;
  }
`;

const User = ({ user }) => {
  const { setUserInfo } = useUser();
  return (
    <Container>
      <section>
        <h1>Hello, {user.username}</h1>
      </section>
      <Button onClick={() => setUserInfo({ loggedIn: false })}>Logout</Button>
    </Container>
  );
};

const Home = () => {
  const { userInfo } = useUser();
  return (
    <>
      {userInfo.loggedIn ? (
        <User user={{ ...userInfo }} />
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};
export default Home;
