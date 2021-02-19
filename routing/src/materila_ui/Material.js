import React, { useState } from "react";
import StyledButton from "./button/Button";
import TextField from "@material-ui/core/TextField";
import styled, { createGlobalStyle } from "styled-components";
import MenuUI from "./menu/Menu";
import MainGrid from "./container/MainGrid";
import DialogContainer from "./dialog/Dialog";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import MyDialog from "./dialog/DialogTest";
import { Switch, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import About from "./components/About";
import BottomNav from "./navbar/Bottom";
import TopSpacer from "./spacer/TopSpacer";
import CardUI from "./card/Card";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Container from "@material-ui/core/Container";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import Profile from "./profile/Profile";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#2a2a72",
    backgroundImage: "linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)",
    borderRadius: 3,
    color: "white",
    height: 48,
    padding: "0 30px",
  },
});

const theme = createMuiTheme({ palette: { secondary: { main: green[900] } } });

const Global = createGlobalStyle`body {
    background-color:#dee2e6;
    font-family: sans-serif;
    text-align:center;
    margin: 0;
    padding: 0;
    width:100vw;
}`;

const Home = () => {
  const [open, setOpen] = useState(true);
  const classes = useStyles();
  return (
    <Container fixed>
      <MyDialog />
      <Grid container spacing={2} justify="center">
        <CardUI />
        <CardUI />
        <CardUI />
      </Grid>
      <Grid justify="center" container spacing={1}>
        <Grid item elevation={3} xs={10} md={4} lg={3} open={open}>
          <Paper style={{ position: "relative" }}>
            <IconButton
              style={{ position: "absolute", right: "10px" }}
              onClick={() => setOpen(false)}
            >
              <CloseIcon />
            </IconButton>
            <h1>Title</h1>
            <p>Filler content</p>
            <Button className={classes.root}>GREEN</Button>
          </Paper>
        </Grid>
        <Grid item elevation={3} xs={10}>
          <Paper>
            <h1>Title</h1>
            <p>Filler content</p>
          </Paper>
        </Grid>
        <Grid item elevation={3} lg={3} md={4} xs={10}>
          <Paper>
            <h1>Title</h1>
            <p>Filler content</p>
          </Paper>
        </Grid>
        <DialogContainer />
        <MenuUI />
        <StyledButton />
        <MainGrid />
      </Grid>
    </Container>
  );
};

const Material = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>

        <Route>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <Paper>
                <h1>404 Page: Nothing was found</h1>
              </Paper>
            </Grid>
          </Grid>
        </Route>
      </Switch>
    </ThemeProvider>
  );
};

export default Material;
