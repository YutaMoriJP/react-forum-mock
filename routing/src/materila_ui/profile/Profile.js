import React, { useState } from "react";
import Message from "./Snackbar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import styled, { css } from "styled-components";
import CheckBox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Avatar from "@material-ui/core/Avatar";
import CreateUser from "./CreateUser";
import BackspaceIcon from "@material-ui/icons/Backspace";
import Button from "@material-ui/core/Button";
const AvatarStyled = styled(Avatar)`
  background-color: seagreen;
`;

const StyledPaer = styled(Paper)`
  && {
    min-width: 280px;
    padding: 10px;
    margin: 10px;
  }
`;

const Header = styled.h1`
  color: #2a2a72;
  padding: 10px;
  font-size: 3rem;
  ${({ small }) =>
    small &&
    css`
      font-size: 1.5rem;
    `}
`;

const Agreement = styled.article`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  gap: 2px;
  h1 {
    flex: 1 1 auto;
    word-break: break-all;
  }
  span {
    align-self: center;
  }
  @media screen and (max-width: 800px) {
    > * {
      flex: 1 1 100%;
    }
    label {
      margin: auto;
    }
  }
`;

const MediaObject = styled.article`
  display: flex;
  justify-content: center;
  div {
    align-self: center;
    background-color: seagreen;
  }
  h1 {
    flex: 1 1 auto;
  }
`;

const User = ({ name, onClick }) => {
  return (
    <Grid container justify="center" spacing={1}>
      <StyledPaer>
        <MediaObject>
          <AvatarStyled>{name[0] + name[name.length - 1]}</AvatarStyled>
          <h1>Hi, {name}</h1>
        </MediaObject>
        <Button color="primary" onClick={onClick} startIcon={<BackspaceIcon />}>
          Change Username
        </Button>
      </StyledPaer>
    </Grid>
  );
};

const Profile = () => {
  const [username, setUsername] = useState("zaizen");
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState({ checkedA: false, checkedB: false });
  const handleChange = e => {
    const { name, checked } = e.target;
    setChecked(prevChecked => ({ ...prevChecked, [name]: checked }));
    if (e.target.name === "checkedA") {
      setOpen(true);
      return;
    }
    setUsername("");
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = () => {
    if (username.length === 0) {
      setUsername("annon");
    }
    setChecked(prevChecked => ({ ...prevChecked, checkedA: true }));
  };
  const handleButtonClose = () => {
    setOpen(false);
    setChecked(prevChecked => ({
      ...prevChecked,
      checkedA: false,
      checkedB: false,
    }));
  };
  return (
    <>
      <Container maxWidth="fixed">
        <Grid container spacing={5} justify="center">
          <Grid item sm={12} md={12} lg={10}>
            <StyledPaer>
              <Header>Profile Page</Header>
              <Grid container spacing={1} justify="center">
                {!checked.checkedA && !checked.checkedB ? (
                  <Agreement>
                    <Header small={true}>
                      Are you sure your username is {username}
                    </Header>
                    <FormControlLabel
                      label="I AGREE"
                      control={
                        <CheckBox
                          value={checked.checkedA}
                          name="checkedA"
                          onChange={handleChange}
                        />
                      }
                    />
                    <FormControlLabel
                      label="I DISAGREE"
                      control={
                        <CheckBox
                          value={checked.checkedB}
                          name="checkedB"
                          onChange={handleChange}
                        />
                      }
                    />
                  </Agreement>
                ) : checked.checkedA ? (
                  <User name={username} onClick={handleButtonClose} />
                ) : checked.checkedB ? (
                  <CreateUser
                    value={username}
                    onChange={setUsername}
                    handleSubmit={handleSubmit}
                  />
                ) : null}
              </Grid>
            </StyledPaer>
          </Grid>
        </Grid>
      </Container>
      <Message
        open={open}
        handleClose={handleClose}
        username={username}
        handleButtonClose={handleButtonClose}
      />
    </>
  );
};

export default Profile;
