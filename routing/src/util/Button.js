import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  background-color: #5f3dc4;
  color: white;
  padding: 10px 15px;
  border: 2px solid #5f3dc4;
  border-radius: 5px;
  font-size: 1.5rem;
  margin: 0 10px;
  cursor: pointer;
  :hover {
    background-color: transparent;
    color: black;
  }
`;

const Button = ({ children, onClick }) => {
  return <Btn onClick={onClick}>{children}</Btn>;
};

export default Button;
