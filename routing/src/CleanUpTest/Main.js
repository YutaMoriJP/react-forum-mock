import { Route, Switch, Link } from "react-router-dom";
import React from "react";
import Home from "./Home";
import About from "./About";
import styled from "styled-components";

const Nav = styled.nav`
  margin: 0;
  font-family: sans-serif;
  display: flex;
  justify-content: space-evenly;
  background-color: beige;
  padding: 10px;
  a {
    color: black;
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
`;

const Main = () => {
  return (
    <>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </Nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </>
  );
};

export default Main;
