import React from "react";
import Button from "@material-ui/core/Button";
import styled, { css } from "styled-components";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const ButtonWrap = styled.section`
  display: block;
  width: 100%;
`;
const Buttons = styled(Button)`
  && {
    background-color: coral;
    padding: 10px;
    color: white;
    :hover {
      background-color: #9775fa;
    }
    ${({ primary }) =>
      primary &&
      css`
        background-color: #5f3dc4;
      `}
  }
`;

const StyledButton = ({
  children = false,
  onClick = false,
  disabled = false,
}) => {
  const [msg, setMsg] = React.useState({ count: 0, msg: "" });
  const handleClick = () =>
    setMsg(prevMsg => {
      const newCount = prevMsg.count + 1;
      return newCount % 2
        ? { count: newCount, msg: "Clicked" }
        : { count: newCount, msg: "" };
    });
  return (
    <>
      <ButtonWrap>
        <Buttons primary variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Buttons>
      </ButtonWrap>
      <IconButton>
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default StyledButton;
