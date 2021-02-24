import React, { useState } from "react";
import StyledButton from "./button/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import styled, {
  createGlobalStyle,
  ThemeProvider as StyledThemeProvider,
} from "styled-components";
import MenuUI from "./menu/Menu";
import MainGrid from "./container/MainGrid";
import DialogContainer from "./dialog/Dialog";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import MyDialog from "./dialog/DialogTest";
import { Switch, Route, useLocation } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import About from "./components/About";
import BottomNav from "./navbar/Bottom";
import TopSpacer from "./spacer/TopSpacer";
import CardUI from "./card/Card";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Container from "@material-ui/core/Container";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Profile from "./profile/Profile";
import { useTheme } from "./ContextProvider/ThemeProvider";
import { makeStyles } from "@material-ui/core/styles";
import indigo from "@material-ui/core/colors/indigo";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#2a2a72",
    backgroundImage: "linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)",
    borderRadius: 3,
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  paper: {
    maxWidth: 320,
    width: 300,
    padding: 10,
  },
});

const Global = createGlobalStyle`body {
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.color};
    font-family: sans-serif;
    text-align:center;
    margin: 0;
    padding: 0;
    width:100vw;
}`;

const ModalStyled = styled(DialogContainer)`
  display: block;
  margin: auto;
  button {
    width: 100%;
  }
`;

const Home = () => {
  const [open, setOpen] = useState(true);
  const classes = useStyles();
  const { setIsDark } = useTheme();
  return (
    <Container>
      <MyDialog />
      <Grid container spacing={1} justify="center">
        <CardUI />
        <CardUI />
        <CardUI />
        <CardUI />
      </Grid>
      <Grid container justify="center">
        <Grid item>
          <ModalStyled />
        </Grid>
      </Grid>
    </Container>
  );
};

const styledTheme = {
  dark: {
    background: "#212529",
    color: "#f8f9fa",
  },
  light: {
    background: "#e9ecef",
    color: "#212529",
  },
};

const useInput = txt => {
  const [value, setValue] = useState(txt);
  return [
    { value, onChange: e => setValue(e.target.value) },
    () => setValue(txt),
  ];
};

const Material = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const { pathname } = useLocation() || { pathname: "/" };
  const { isDark } = useTheme();
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: isDark ? "dark" : "light",
          primary: {
            main: isDark ? "#a5d8ff" : "#1864ab",
          },
        },
      }),
    [isDark]
  );
  const [login, reset] = useInput("");
  const handleLogin = () => {
    if (+login.value === 1995) {
      setLoggedIn(true);
      return;
    }
    alert("WRONG PASSWORD");
    reset();
  };
  if (!loggedIn) {
    return (
      <StyledThemeProvider theme={{ background: "skyblue", color: "white" }}>
        <Global />
        <h1>Please login first</h1>
        <TextField {...login} />
        <Button onClick={handleLogin}>Login</Button>
      </StyledThemeProvider>
    );
  }
  return (
    <StyledThemeProvider theme={isDark ? styledTheme.dark : styledTheme.light}>
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
                  <h1>
                    404 Page: Nothing was found: Please check if ` is the
                    {pathname} correct pathname or not
                  </h1>
                </Paper>
              </Grid>
            </Grid>
          </Route>
        </Switch>
      </ThemeProvider>
    </StyledThemeProvider>
  );
};

export default Material;
