import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import Home from "@material-ui/icons/Home";
import Button from "@material-ui/core/Button";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

const DrawerUI = ({ open, onClose }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <List style={{ maxWidth: 300 }}>
        <LinkStyled to="/" onClick={onClose}>
          <Button fullWidth={true} color="primary" startIcon={<Home />}>
            <ListItemStyled>Home</ListItemStyled>
          </Button>
        </LinkStyled>
        <LinkStyled to="/about" onClick={onClose}>
          <Button
            fullWidth={true}
            color="primary"
            startIcon={<MoreHorizIcon />}
          >
            <ListItemStyled>About</ListItemStyled>
          </Button>
        </LinkStyled>
        <LinkStyled to="/profile" onClick={onClose}>
          <Button
            fullWidth={true}
            color="primary"
            startIcon={<AccountBoxIcon />}
          >
            <ListItemStyled>Profile</ListItemStyled>
          </Button>
        </LinkStyled>
      </List>
    </Drawer>
  );
};

const LinkStyled = styled(Link)`
  text-decoration: none;
`;

const ListItemStyled = styled(ListItem)`
  font-size: 1rem;
`;

const useStyles = makeStyles(() => ({
  margin: {
    margin: 0,
  },
  color: {
    color: "white",
  },
  padding: {
    padding: 20,
  },
}));

const Menu = styled(MenuIcon)`
  color: white;
  width: 50px;
  height: 40px;
`;

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const notMobile = useMediaQuery("(min-width: 800px)");
  return (
    <>
      <AppBar position="sticky" className={classes.margin} elevation={3}>
        <Toolbar>
          <IconButton onClick={handleOpen}>
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
      <DrawerUI open={open} onClose={handleClose} />
    </>
  );
};

export default Navbar;
