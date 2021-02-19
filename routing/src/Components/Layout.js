import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useLocation } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 14px;
        box-sizing: border-box;
    }
    body {
        font-family: 'Montserrat', sans-serif;
        background-color: #ced4da;
        color: #212529;
        padding: 0;
        margin: 0;
    }
    @media screen and (min-width: 700px) {
        html {
            font-size: 16px;
        }
    }
    @media screen and (min-width: 1024px) {
        html {
            font-size: 18px;
        }
    }

`;

const Container = styled.div`
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-areas:
    "navbar"
    "main"
    "sidebar"
    "footer";
  @media screen and (min-width: 800px) {
    grid-template-areas:
      "navbar navbar navbar"
      "sidebar main main"
      "footer footer footer";
  }
  @media screen and (min-width: 1024px) {
    grid-template-areas:
      "navbar navbar navbar navbar"
      "sidebar main main main"
      "footer footer footer footer";
  }

  nav {
    grid-area: navbar;
  }
  section {
    grid-area: sidebar;
    background-color: #f1f3f5;
    padding: 10px 20px;
    margin: 10px;
    border-radius: 10px;
    min-width: 250px;
  }
  main {
    grid-area: main;
    background-color: #f1f3f5;
    padding: 0 20px;
    margin: 10px;
    border-radius: 10px;
  }
  footer {
    grid-area: footer;
  }
`;

const Layout = ({ children }) => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <GlobalStyle />
      <Container>
        <Navbar items={["/", "anime"]} />
        <main>
          <p>{location.pathname}</p>
          {children}
        </main>
        <Sidebar />
      </Container>
    </>
  );
};

export default Layout;
