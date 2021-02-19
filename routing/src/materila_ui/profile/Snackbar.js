import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import React from "react";

const Message = ({ open, handleClose, username, handleButtonClose }) => (
  <Snackbar
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    open={open}
    autoHideDuration={6000}
    onClose={handleClose}
    message={`Your username, ${username} is saved`}
    action={
      <React.Fragment>
        <Button
          color="primary"
          size="medium"
          onClick={handleButtonClose}
          name="button"
        >
          UNDO
        </Button>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </React.Fragment>
    }
  />
);

export default Message;
