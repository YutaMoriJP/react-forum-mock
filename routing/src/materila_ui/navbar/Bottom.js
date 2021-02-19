import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import styled from "styled-components";
import TopSpacer from "../spacer/TopSpacer";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

const BottomNavbar = styled(BottomNavigation)`
  box-sizing: border-box;
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  p {
    padding: 0 10px;
    text-align: left;
  }
  button {
    margin-left: auto;
    width: fit-content;
    padding: 0 20px;
  }
`;

export default function BottomNav() {
  return (
    <>
      <TopSpacer />
      <BottomNavbar showLabels>
        <p>
          Some Random TextTextTextTextText TextText TextTextTextTextTextTextText
          Text lorem
        </p>
        <IconButton>
          <h3>I Agree</h3>
        </IconButton>
      </BottomNavbar>
    </>
  );
}
