import React, { useState } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

const MenuUI = ({ anchorEl, setAnchorEl }) => {
  const handleClose = () => setAnchorEl(null);
  return (
    <>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Home</MenuItem>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
      </Menu>
    </>
  );
};

export default MenuUI;
