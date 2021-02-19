import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FcMenu } from "react-icons/fc";
import { AiFillCloseCircle } from "react-icons/ai";
import Button from "@material-ui/core/Button";

const Nav = styled.nav`
  margin: 0;
  padding: 10px;
  ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    gap: 25px;
    align-items: center;
    list-style-type: none;
    li {
      font-size: 1.4rem;
      a {
        color: black;
        text-decoration: none;
        padding: 8px;
      }
    }
  }
  @media screen and (max-width: 560px) {
    ul {
      display: ${({ open }) => (open ? "flex" : "none")};
      li {
        padding: 8px 0;
      }
    }
  }
`;

const Icon = styled(FcMenu)`
  width: 50px;
  height: 50px;
  padding: 5px;
  cursor: pointer;
  display: none;
  border: 2px solid none;
  :hover {
    background-color: #f8f9fa;
    border-radius: 50%;
  }
  @media screen and (max-width: 560px) {
    display: block;
  }
`;

const Close = styled(AiFillCloseCircle)`
  width: 80px;
  height: 60px;
  cursor: pointer;
  display: none;
  @media screen and (max-width: 560px) {
    display: block;
  }
`;

const Sub = styled(Nav)`
  @media screen and (max-width: 560px) {
    ul {
      display: flex;
    }
  }
  padding: 0;
  ul {
    padding: 0;
  }
`;

const StyledButon = styled(Button)`
  && {
    color: seagreen;
  }
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(prev => !prev);
  return (
    <>
      <Nav open={open}>
        {!open ? (
          <Icon color="white" onClick={toggle} />
        ) : (
          <Close onClick={toggle} />
        )}
        <ul>
          <li>
            <Link to="/">
              <StyledButon>Home</StyledButon>
            </Link>
          </li>
          <li>
            <Link to="/anime">
              <StyledButon>Anime</StyledButon>
            </Link>
          </li>
          <li>
            <Link to="/account">
              <StyledButon>Account</StyledButon>
            </Link>
          </li>
          <li>
            <Link to="/user">
              <StyledButon>User</StyledButon>
            </Link>
          </li>
          <li>
            <Link to="/search">
              <StyledButon>Search</StyledButon>
            </Link>
          </li>
        </ul>
      </Nav>
    </>
  );
};

export const SubNavbar = ({ items, path }) => {
  return (
    <Sub>
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            <Link to={`${path}/${item.toLowerCase().replace(/home/g, "/")}`}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </Sub>
  );
};

export default Navbar;
