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
import Typography from "@material-ui/core/Typography";
import { useTheme } from "../ContextProvider/ThemeProvider";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import Checkbox from "@material-ui/core/Checkbox";

const Moon = styled(Brightness2Icon)`
  width: 50px;
  height: 30px;
  color: yellow;
`;

const Sun = styled(Brightness7Icon)`
  width: 50px;
  height: 30px;
  color: orange;
`;

const CheckboxStyled = styled(Checkbox)`
  margin-left: auto;
`;

const DrawerUI = ({ open, onClose }) => {
  const isMobile = useMediaQuery("(max-width:500px)");
  return (
    <Drawer anchor={isMobile ? "top" : "left"} open={open} onClose={onClose}>
      <List style={{ maxWidth: 300 }}>
        <LinkStyled to="/" onClick={onClose}>
          <Button fullWidth={true} startIcon={<Home />}>
            <ListItemStyled>Home</ListItemStyled>
          </Button>
        </LinkStyled>
        <LinkStyled to="/about" onClick={onClose}>
          <Button fullWidth={true} startIcon={<MoreHorizIcon />}>
            <ListItemStyled>About</ListItemStyled>
          </Button>
        </LinkStyled>
        <LinkStyled to="/profile" onClick={onClose}>
          <Button fullWidth={true} startIcon={<AccountBoxIcon />}>
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

const useStyles = makeStyles({
  margin: {
    margin: 0,
  },
  padding: {
    padding: 20,
  },
  background: {
    backgroundColor: "seagreen",
    color: "white",
  },
});

const Menu = styled(MenuIcon)``;

const ToolbarStyled = styled(Toolbar)`
  background-color: ${props => (props.isDark ? "#364fc7" : "#748ffc")};
  color: ${props => (props.isDark ? "white" : "black")};
`;
const Navbar = () => {
  const { isDark, setIsDark } = useTheme();
  const handleChange = () => setIsDark(prevOn => !prevOn);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(isDark);
  return (
    <>
      <AppBar elevation={10} position="sticky" color="secondary">
        <ToolbarStyled variant="dense" isDark={isDark}>
          <IconButton>
            <Menu onClick={handleOpen} isDark={isDark} />
          </IconButton>
          <Typography variant="h5">Home</Typography>
          <CheckboxStyled
            color="primary"
            checkedIcon={<Sun />}
            icon={<Moon />}
            value={isDark}
            onChange={handleChange}
          />
        </ToolbarStyled>
      </AppBar>
      <DrawerUI open={open} onClose={handleClose} />
    </>
  );
};

/*
 <AppBar position="sticky" className={classes.margin} elevation={3}>
        <Toolbar>
          <IconButton onClick={handleOpen}>
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
      */
export default Navbar;
